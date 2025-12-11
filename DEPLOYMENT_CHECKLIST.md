# Deployment Checklist

## Pre-Deployment
- [ ] Dependencies installed (`npm install`)
- [ ] Home page loads and navigates to `/presentation`
- [ ] Mục `#tomtat` hiển thị tóm tắt nhanh
- [ ] Các phần I–VII hiển thị đủ nội dung
- [ ] Kiểm tra nhanh trên mobile/desktop

## Build Check
- [ ] `npm run build` thành công
- [ ] `npm run start` chạy bản build OK

## Vercel (hoặc tương tự)
1. Push mã nguồn lên repo
2. Import dự án trên Vercel, framework Next.js tự nhận
3. Không cần cấu hình biến môi trường
4. Deploy

## Post-Deployment
- [ ] Trang chủ và `/presentation` hoạt động
- [ ] Liên kết nội bộ (tới `#tomtat`) chính xác
- [ ] Kiểm tra hiển thị trên thiết bị nhỏ
- [ ] Không còn liên kết/game/leaderboard cũ

## Troubleshooting
- Build lỗi: kiểm tra log và các import.
- Giao diện lỗi: chạy lại `npm install`, xóa cache trình duyệt.
