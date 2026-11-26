# LONG ĐẠT MA — Experience Network

Bản MVP giao diện PWA tĩnh. Airbnb vẫn là kênh đặt phòng; website này chỉ giới thiệu dịch vụ/trải nghiệm bổ sung.

## Chạy thử trên máy
- Giải nén thư mục.
- Mở `index.html` bằng trình duyệt. Một số tính năng PWA chỉ hoạt động khi chạy qua HTTPS hoặc localhost.

## Cấu hình liên hệ
Mở `config.js`, điền `whatsappNumber` bằng số WhatsApp của doanh nghiệp theo định dạng quốc tế chỉ gồm chữ số, ví dụ `8490xxxxxxx`. Không điền số giả.

## Đưa lên GitHub Pages
1. Tạo repository mới trong tổ chức `rsvietnam-wq`, ví dụ `long-dat-ma-experience`.
2. Upload toàn bộ nội dung thư mục này lên thư mục gốc của repository.
3. Vào **Settings → Pages**.
4. Chọn **Deploy from a branch**, branch `main`, folder `/ (root)`, rồi Save.
5. GitHub Pages sẽ cấp URL sau khi deploy hoàn tất.

## Lưu ý trước khi nhận đặt dịch vụ thật
- Đây là MVP frontend, chưa có database, đăng nhập đối tác/admin, lịch trống, thanh toán hay tính hoa hồng tự động.
- Form hiện chuyển yêu cầu sang WhatsApp nếu đã cấu hình số; nếu chưa, nó sao chép nội dung yêu cầu để gửi thủ công.
- Cần xác minh giá, đối tác, điều kiện an toàn, thời gian hoạt động và chính sách huỷ trước khi công bố dịch vụ.
- Không thu tiền phòng Airbnb trên website này. Thanh toán dịch vụ ngoài chỉ triển khai minh bạch, có xác nhận và chứng từ phù hợp.
- Email đối tác trong trang hiện là placeholder; thay bằng email thật trước khi xuất bản.
