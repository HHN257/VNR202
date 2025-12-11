# Nghị quyết Trung ương 5 khóa VIII (1998)

Website trình bày toàn văn “XÂY DỰNG VÀ PHÁT TRIỂN NỀN VĂN HÓA VIỆT NAM TIÊN TIẾN – ĐẬM ĐÀ BẢN SẮC DÂN TỘC”, kèm mục tóm tắt nhanh để nắm ý chính.

## Tính năng

- **Trang chủ**: Giới thiệu ngắn gọn, điều hướng tới nội dung đầy đủ và tóm tắt.
- **Trang nội dung (`/presentation`)**: Bố cục rõ ràng theo 7 phần của nghị quyết:
  - Vị trí, vai trò của văn hóa.
  - Xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc.
  - Văn hóa Việt Nam: thống nhất trong đa dạng.
  - Văn hóa là một mặt trận.
  - Mười nhiệm vụ xây dựng và phát triển văn hóa.
  - Phong trào “Toàn dân đoàn kết xây dựng đời sống văn hóa”.
  - Ý nghĩa chung của nghị quyết.
- **Tóm tắt nhanh**: Mục `#tomtat` tổng hợp điểm nhấn chính.

## Công nghệ

- Next.js 13 (App Router)
- TailwindCSS + shadcn/ui

## Cài đặt & chạy

```bash
npm install
npm run dev
```

Truy cập [http://localhost:3000](http://localhost:3000).

## Triển khai

Ứng dụng không cần cơ sở dữ liệu hay biến môi trường. Có thể build và deploy thẳng (ví dụ Vercel):

```bash
npm run build
npm run start
```

## Cấu trúc thư mục chính

```
app/
├── presentation/page.tsx   # Nội dung đầy đủ nghị quyết
├── page.tsx                # Trang chủ
├── layout.tsx              # Metadata & layout gốc
└── globals.css             # Styles chung
components/ui/              # Thư viện shadcn/ui
```
