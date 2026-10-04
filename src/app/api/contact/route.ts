import { NextRequest, NextResponse } from 'next/server';
import { validateContactForm } from '@/lib/contact/validation';
import { processContactSubmission } from '@/lib/contact/contact-service';

// Basic in-memory rate limiting (Production should use Redis or similar)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }
  
  if (now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }
  
  if (record.count >= MAX_REQUESTS) {
    return true;
  }
  
  record.count += 1;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    // 1. Rate Limiting check
    const ip = request.headers.get('x-forwarded-for') || 'anonymous';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: 'Bạn đã gửi yêu cầu quá nhiều lần. Vui lòng thử lại sau.' },
        { status: 429 }
      );
    }

    // 2. Parse Multipart Form Data
    let formData: FormData;
    try {
      formData = await request.formData();
    } catch (e) {
      return NextResponse.json(
        { success: false, message: 'Định dạng dữ liệu không hợp lệ.' },
        { status: 400 }
      );
    }

    // 3. Validation
    const validation = validateContactForm(formData);
    if (!validation.success || !validation.data) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Thông tin gửi lên không hợp lệ.', 
          errors: validation.errors 
        },
        { status: 400 }
      );
    }

    // 4. Extract File if exists
    const file = formData.get('file') as File | null;

    // 5. Process the submission (Storage, DB, Email)
    const processResult = await processContactSubmission(validation.data, file);

    if (!processResult.success) {
      return NextResponse.json(
        { success: false, message: processResult.message },
        { status: 500 }
      );
    }

    // 6. Success Response
    return NextResponse.json(
      { success: true, message: 'Yêu cầu dự án đã được gửi thành công.' },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('[Contact API] Internal Server Error:', error);
    // Trả về error generic để không lộ thông tin hệ thống
    return NextResponse.json(
      { success: false, message: 'Hệ thống đang bận. Không thể gửi yêu cầu lúc này.' },
      { status: 500 }
    );
  }
}
