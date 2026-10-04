export interface ContactSubmission {
  fullName: string;
  phone: string;
  email: string;
  company: string;
  position?: string;
  projectName?: string;
  description?: string;
}

export interface ValidationResult {
  success: boolean;
  data?: ContactSubmission;
  errors?: Record<string, string>;
}

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_MIME_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'image/jpeg',
  'image/jpg',
  'image/png',
  'application/acad',
  'application/x-acad',
  'application/autocad_dwg',
  'image/vnd.dwg',
  'image/x-dwg'
];

export function validateContactForm(formData: FormData): ValidationResult {
  const errors: Record<string, string> = {};

  const fullName = formData.get('name') as string;
  const phone = formData.get('phone') as string;
  const email = formData.get('email') as string;
  const company = formData.get('company') as string;
  const position = formData.get('position') as string;
  const project = formData.get('project') as string;
  const description = formData.get('description') as string;
  
  if (!fullName || fullName.trim().length === 0) {
    errors.name = 'Vui lòng nhập họ và tên.';
  }
  if (!phone || phone.trim().length === 0) {
    errors.phone = 'Vui lòng nhập số điện thoại.';
  }
  if (!company || company.trim().length === 0) {
    errors.company = 'Vui lòng nhập tên công ty / tổng thầu.';
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = 'Vui lòng nhập email hợp lệ.';
  }

  // File validation
  const file = formData.get('file') as File | null;
  if (file && file.size > 0) {
    if (file.size > MAX_FILE_SIZE) {
      errors.file = 'Dung lượng file vượt quá giới hạn (10MB).';
    }
    
    // We allow standard extensions as backup if MIME type is generic
    const validExtension = file.name.match(/\.(pdf|doc|docx|jpg|jpeg|png|dwg)$/i);
    if (!ALLOWED_MIME_TYPES.includes(file.type) && !validExtension) {
      errors.file = 'Định dạng file không được hỗ trợ. (Chỉ nhận PDF, DOC, DWG, JPG, PNG)';
    }
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  return {
    success: true,
    data: {
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email.trim(),
      company: company.trim(),
      position: position ? position.trim() : undefined,
      projectName: project ? project.trim() : undefined,
      description: description ? description.trim() : undefined,
    }
  };
}
