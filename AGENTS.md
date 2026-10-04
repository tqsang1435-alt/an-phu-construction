# Hướng dẫn AI Agent — An Phú Landing Page

## Mục tiêu
Xây dựng landing page tiếng Việt cho An Phú, doanh nghiệp tại Mai Phụ, Hà Tĩnh, định hướng giới thiệu dịch vụ thi công các hạng mục thuộc dự án xây dựng lớn: đường bộ, cống thoát nước, bê tông và hạ tầng kỹ thuật.

## Công nghệ
- Next.js App Router
- React + TypeScript
- CSS thuần trong `src/app/globals.css`
- `lucide-react` cho icon
- Không thêm thư viện UI lớn nếu chưa có lý do rõ ràng.

## Quy tắc thiết kế
- B2B construction / civil engineering; chuyên nghiệp, mạnh mẽ, dễ tin cậy.
- Màu chính: navy `#10263b`, cam công trình `#f28b2c`, trắng và xám bê tông.
- Responsive mobile-first; CTA liên hệ dễ thấy.
- Ưu tiên hình ảnh công trình thật do người dùng cung cấp. Không tự tạo số liệu, dự án, chứng chỉ hoặc thành tích.
- Nội dung phải bằng tiếng Việt tự nhiên, hướng đến tổng thầu, nhà thầu chính và đối tác.

## Cấu trúc
- `src/app`: route, layout, metadata, CSS toàn cục.
- `src/components/layout`: header, footer.
- `src/components/sections`: các section của landing page.
- `src/lib/site-data.ts`: nội dung và dữ liệu doanh nghiệp có thể chỉnh sửa.

## Trước khi code tiếp
1. Đọc toàn bộ cấu trúc hiện có trước khi thay đổi.
2. Giữ component nhỏ, có tên rõ ràng.
3. Không hardcode thông tin liên hệ ở nhiều nơi; cập nhật `src/lib/site-data.ts`.
4. Không coi form hiện tại là form hoạt động thật. Muốn nhận dữ liệu phải kết nối API/email và thêm validation, chống spam, thông báo thành công/thất bại.
5. Không thay placeholder dự án bằng công trình giả. Dùng ảnh placeholder đến khi người dùng cung cấp ảnh thật.
6. Kiểm tra responsive ở mobile/tablet/desktop.
7. Chạy `npm run build` và sửa lỗi trước khi kết thúc.

## Việc cần hoàn thiện
- Bổ sung số điện thoại, email, Zalo và thông tin pháp lý đã xác minh.
- Thay khung ảnh bằng ảnh công trình thực tế.
- Cập nhật lĩnh vực nhận thầu theo năng lực thực tế.
- Bổ sung dự án tiêu biểu đã được phép công khai.
- Kết nối form liên hệ đến email hoặc backend.
- Thêm favicon/logo chính thức, SEO metadata và thông tin chia sẻ mạng xã hội.
