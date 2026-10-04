import { promises as fs } from 'fs';
import path from 'path';
import { ContactSubmission } from './validation';

export interface ProcessResult {
  success: boolean;
  message: string;
}

/**
 * Xử lý dữ liệu form liên hệ B2B.
 * Abstracted layer để dễ dàng tích hợp Email Provider / Database (như Prisma, SendGrid, v.v.) sau này.
 */
export async function processContactSubmission(data: ContactSubmission, file: File | null): Promise<ProcessResult> {
  try {
    // 1. Xử lý file đính kèm (Storage Abstraction)
    let savedFilePath = null;
    
    if (file && file.size > 0) {
      // TRONG MÔI TRƯỜNG PRODUCTION: 
      // Chỗ này nên sử dụng AWS S3, Vercel Blob, hoặc Supabase Storage.
      // Dưới đây là logic lưu tạm vào ổ cứng cục bộ (.data folder) để test/demo.
      // Tuyệt đối không lưu vào /public vì lý do bảo mật tài liệu B2B.
      
      const uploadDir = path.join(process.cwd(), '.data', 'attachments');
      await fs.mkdir(uploadDir, { recursive: true });
      
      const safeFileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
      savedFilePath = path.join(uploadDir, safeFileName);
      
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      
      await fs.writeFile(savedFilePath, buffer);
      console.log(`[Contact Service] Đã lưu file đính kèm an toàn tại: ${savedFilePath}`);
    }

    // 2. Lưu vào Database (Database Abstraction)
    // Ví dụ nếu có Prisma:
    // await prisma.contact.create({ data: { ...data, attachmentUrl: savedFilePath } })
    console.log('[Contact Service] Thông tin khách hàng đã được ghi nhận:', data);

    // 3. Gửi Email thông báo (Notification Abstraction)
    // Ví dụ nếu dùng Resend:
    // const resend = new Resend(process.env.EMAIL_PROVIDER_API_KEY);
    // await resend.emails.send({ from: process.env.EMAIL_FROM, to: process.env.CONTACT_RECEIVER_EMAIL, ... })
    console.log('[Contact Service] Đã gửi Notification (Mock).');

    return {
      success: true,
      message: 'Thông tin đã được ghi nhận thành công.'
    };
    
  } catch (error) {
    console.error('[Contact Service] Error processing contact:', error);
    return {
      success: false,
      message: 'Có lỗi xảy ra trong quá trình lưu trữ thông tin.'
    };
  }
}
