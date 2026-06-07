# 📝 Tổng Hợp Bài Học & Hướng Dẫn Router (`src/app`)

File README này tóm tắt toàn bộ kiến thức, các lỗi đã xử lý và nguyên lý cấu trúc thư mục trong buổi học hôm nay.

---

## 📚 Bản đồ tài liệu (Quick Links)

* **[🏠 Thư mục Gốc - README.md](../../README.md)**: Hướng dẫn cài đặt dự án, câu lệnh khởi chạy, chế độ kết nối Tunnel (Ngrok), và sửa lỗi môi trường Windows.
* **[📁 Trang chủ (home) - README.md]((tabs)/(home)/README.md)**: Chi tiết cấu trúc định tuyến (Folder-based Routing) trong thư mục con, sơ đồ các trang `index.tsx`, `second`, `thrid`, `fourth`, `Five`, và chi tiết 3 phương pháp chuyển trang (Navigation).

---

## 🧠 Tóm tắt kiến thức cốt lõi hôm nay

### 1. Khắc phục lỗi Môi trường & Biên dịch
* **TypeScript & JSX**: Thêm trực tiếp `"jsx": "react-jsx"` vào `tsconfig.json` khi editor không tự nhận diện cấu hình kế thừa từ Expo.
* **Kết nối Tunnel (`--tunnel`)**: Nếu gặp lỗi cài đặt `@expo/ngrok` ở chế độ global do đường dẫn hệ thống trên Windows, hãy cài đặt local trực tiếp trong dự án bằng lệnh `npm install -D @expo/ngrok`.
* **Chạy đúng thư mục**: Mọi lệnh khởi chạy dự án Expo (`npx expo start`) đều phải chạy từ thư mục con `/ExpoRouter` (nơi chứa file `package.json`), thay vì thư mục gốc.

### 2. Nguyên lý hoạt động của Layout (`_layout.tsx`) trong Expo Router
* **Không bọc Navigator (Stack/Tabs) trong View hẹp**: Các component điều hướng cần chiếm toàn bộ màn hình (`flex: 1`) để xử lý các chuyển động trượt trang (transition) và cử chỉ vuốt quay lại (gestures).
* **Tránh file `_layout.tsx` rỗng**: Bất kỳ file `_layout.tsx` nào trong ứng dụng đều phải có `export default` một React Component. Để trống file sẽ làm ứng dụng bị lỗi crash (import undefined).
* **Dùng `<Slot />` thay cho `<Stack />` nếu muốn bọc giao diện giống Web**: Nếu bạn muốn tạo khung giao diện cố định dùng chung (như tiêu đề cố định, viền màn hình) cho các trang con mà không cần hiệu ứng chuyển trang di động, hãy thay thế `<Stack />` bằng `<Slot />` trong file `_layout.tsx`.

---

## 🛠️ Chi tiết cấu trúc thư mục và Layout hiện tại

### Sơ đồ cấu trúc Router:
```text
src/app/
├── _layout.tsx           # Layout gốc (chứa Stack điều hướng chính)
├── README.md             # File bạn đang đọc (tóm tắt tổng hợp)
└── (tabs)/               # Nhóm chứa Tab Navigation
    ├── _layout.tsx       # Định nghĩa thanh Bottom Tab (Trang chủ & Sản phẩm)
    ├── (home)/           # Tab 1: Trang chủ
    │   ├── _layout.tsx   # Sử dụng <Slot /> để tạo khung viền đỏ chung
    │   ├── index.tsx     # Trang chủ chính (viền cam)
    │   ├── second/       # Trang con 2 (viền hồng)
    │   ├── thrid/        # Trang con 3 (viền xanh lá)
    │   ├── fourth.tsx    # Trang con 4 (viền vàng)
    │   ├── Five.tsx      # Trang con 5 (viền xanh dương)
    │   └── README.md     # Chi tiết cách chuyển trang & Folder Routing
    └── products/         # Tab 2: Sản phẩm
        └── index.tsx     # Trang danh sách sản phẩm
```

---

## 📍 Hướng dẫn thiết lập Layout dùng chung (Nhắc lại)

### Cách 1: Sử dụng `<Slot />` để tạo khung giao diện dùng chung (Ví dụ thư mục `(home)`)
```tsx
import { Slot } from "expo-router";
import { View } from "react-native";

export default function HomeLayout() {
  return (
    <View style={{ borderWidth: 2, borderColor: "red", padding: 10, flex: 1 }}>
      {/* Khung viền đỏ này sẽ áp dụng chung cho mọi trang con trong thư mục (home) */}
      <Slot />
    </View>
  );
}
```

### Cách 2: Thiết kế khung rời dưới dạng Component (Khuyên dùng khi cần dùng `<Stack />`)
Thay vì viết khung ở file `_layout.tsx`, hãy tạo component và bọc ở các file trang con để không làm ảnh hưởng đến hoạt động của `<Stack />`.
