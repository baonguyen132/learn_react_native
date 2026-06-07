# Học React Native với Expo

Kho lưu trữ (repository) này chứa các dự án và ví dụ thực hành trong quá trình học React Native và Expo.

---

## 🚀 Các dự án hiện có

### 1. ExpoRouter
Dự án được khởi tạo bằng cấu trúc Expo Router mới nhất sử dụng TypeScript.

- **Đường dẫn thư mục**: `./ExpoRouter`
- **Các tính năng nổi bật**:
  - Expo Router (hệ thống định tuyến dựa trên cấu trúc file giống như Next.js).
  - TypeScript đã được cấu hình sẵn.
  - Hỗ trợ chạy trên Android, iOS và Web.
  - Đã được tối ưu hóa lỗi JSX và hỗ trợ kết nối Tunnel.

---

## 🛠️ Hướng dẫn các lệnh cơ bản

### 1. Khởi tạo một dự án Expo mới (Đơn giản nhất)
Chạy lệnh sau tại thư mục gốc để tạo một dự án Expo mới:
```bash
npx create-expo-app@latest <Tên_Dự_Án>
```
*Ví dụ:* `npx create-expo-app@latest MyNewApp`

### 2. Khởi chạy ứng dụng với chế độ Tunnel (Ngrok)
Chế độ tunnel giúp bạn dễ dàng quét mã QR để kiểm tra ứng dụng trên điện thoại thật (qua app Expo Go) mà không cần chung mạng Wi-Fi với máy tính.

Chạy lệnh sau bên trong thư mục dự án (ví dụ: `ExpoRouter`):
```bash
npx expo start --tunnel
```

### 3. Khởi tạo lại dự án về trạng thái trống (Reset Project)
Nếu bạn muốn xóa các file giao diện mẫu của Expo và bắt đầu code từ đầu với một file `index.tsx` và `_layout.tsx` trống, hãy chạy lệnh này bên trong thư mục dự án:
```bash
npm run reset-project
```
*(Lệnh sẽ hỏi bạn có muốn di chuyển các file cũ sang thư mục `/example` để tham khảo hay xóa hẳn).*

---

## 🐛 Giải quyết các lỗi thường gặp (Troubleshooting)

### 1. Lỗi: `Cannot use JSX unless the '--jsx' flag is provided`
* **Nguyên nhân**: Editor (như VS Code) không tự động nhận diện được cấu hình JSX kế thừa từ Expo.
* **Cách khắc phục**: Thêm trực tiếp `"jsx": "react-jsx"` vào file `tsconfig.json` trong dự án của bạn:
  ```json
  "compilerOptions": {
    "strict": true,
    "jsx": "react-jsx",
    "paths": { ... }
  }
  ```

### 2. Lỗi cài đặt `@expo/ngrok` khi chạy lệnh `--tunnel`
* **Nguyên nhân**: Lỗi khi cài đặt global (`npm install --global @expo/ngrok`) trên Windows do đường dẫn biến môi trường (Environment Path).
* **Cách khắc phục**: Cài đặt trực tiếp gói `@expo/ngrok` vào devDependencies của dự án bằng lệnh:
  ```bash
  npm install -D @expo/ngrok
  ```
  Sau khi cài đặt local, lệnh `npx expo start --tunnel` sẽ chạy bình thường mà không yêu cầu cài đặt global nữa.
