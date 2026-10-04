# An Phú — Landing Page Starter

Khung source code ban đầu cho landing page giới thiệu doanh nghiệp An Phú, địa chỉ Mai Phụ, Hà Tĩnh.

## Yêu cầu
- Node.js phiên bản tương thích với Next.js 16
- npm

## Chạy local

```bash
npm install
npm run dev
```

Mở `http://localhost:3000`.

## Build kiểm tra

```bash
npm run build
```

## Cấu trúc source

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── Capabilities.tsx
│       ├── Projects.tsx
│       ├── Process.tsx
│       └── Contact.tsx
└── lib/
    └── site-data.ts
```

## Lưu ý
- Đây là starter scaffold để đưa cho AI coding agent tiếp tục phát triển, không phải bản production đã kiểm thử.
- Ảnh dự án đang là placeholder thiết kế, chưa phải ảnh công trình thực tế.
- Form liên hệ hiện chưa gửi dữ liệu đi đâu.
- Cần xác minh tên pháp lý, địa chỉ đầy đủ, thông tin liên hệ, năng lực và dự án trước khi công khai website.
