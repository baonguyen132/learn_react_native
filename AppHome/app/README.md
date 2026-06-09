# 📝 Tổng Hợp Bài Học & Hướng Dẫn Router (`src/app`)

File README này tóm tắt toàn bộ kiến thức, các lỗi đã xử lý và nguyên lý cấu trúc thư mục trong buổi học hôm nay.

---

## 📚 Bản đồ tài liệu (Quick Links)

* **[🏠 Thư mục Gốc - README.md](../../README.md)**: Hướng dẫn cài đặt dự án, câu lệnh khởi chạy, chế độ kết nối Tunnel (Ngrok), và sửa lỗi môi trường Windows.
* **[📁 Trang chủ (home) - README.md]((tabs)/(home)/README.md)**: Chi tiết cấu trúc định tuyến (Folder-based Routing) trong thư mục con, sơ đồ các trang `index.tsx`, `second`, `thrid`, `fourth`, `Five`, và chi tiết 3 phương pháp chuyển trang (Navigation).
* **[📁 Điều hướng Ngăn xếp (stacknavigation) - README.md]((tabs)/stacknavigation/README.md)**: Chi tiết cấu trúc lồng Stack trong Bottom Tab (Nested Navigation), cách thiết lập reset màn hình khi chuyển tab (`popToTopOnBlur`), cách hiển thị badge (`tabBarBadge`) và chuyển trang trong Stack.

---

## 🧠 Tóm tắt kiến thức cốt lõi hôm nay

### 1. Khắc phục lỗi Môi trường & Biên dịch
* **TypeScript & JSX**: Thêm trực tiếp `"jsx": "react-jsx"` vào `tsconfig.json` khi editor không tự nhận diện cấu hình kế thừa từ Expo.
* **Kết nối Tunnel (`--tunnel`)**: Nếu gặp lỗi cài đặt `@expo/ngrok` ở chế độ global do đường dẫn hệ thống trên Windows, hãy cài đặt local trực tiếp trong dự án bằng lệnh `npm install -D @expo/ngrok`.
* **Chạy đúng thư mục**: Mọi lệnh khởi chạy dự án Expo (`npx expo start`) đều phải chạy từ thư mục con `/AppHome` (nơi chứa file `package.json`), thay vì thư mục gốc.

### 2. Nguyên lý hoạt động của Layout (`_layout.tsx`) trong Expo Router
* **Không bọc Navigator (Stack/Tabs) trong View hẹp**: Các component điều hướng cần chiếm toàn bộ màn hình (`flex: 1`) để xử lý các chuyển động trượt trang (transition) và cử chỉ vuốt quay lại (gestures).
* **Tránh file `_layout.tsx` rỗng**: Bất kỳ file `_layout.tsx` nào trong ứng dụng đều phải có `export default` một React Component. Để trống file sẽ làm ứng dụng bị lỗi crash (import undefined).
* **Dùng `<Slot />` thay cho `<Stack />` nếu muốn bọc giao diện giống Web**: Nếu bạn muốn tạo khung giao diện cố định dùng chung (như tiêu đề cố định, viền màn hình) cho các trang con mà không cần hiệu ứng chuyển trang di động, hãy thay thế `<Stack />` bằng `<Slot />` trong file `_layout.tsx`.

### 3. Nested Navigation & Cấu hình Bottom Tabs nâng cao
* **Sửa cảnh báo "No route named... exists in nested children"**: Khi một tab trỏ tới một thư mục con (ví dụ `products` hoặc `iosLiquidGlass`), nếu trong thư mục đó không có file `_layout.tsx`, Expo Router mặc định nhận diện tên route là `<tên_thư_mục>/index` thay vì `<tên_thư_mục>`. Ta cần cấu hình đúng thuộc tính `name` trong file layout của Tab (ví dụ `name="iosLiquidGlass/index"`) hoặc tạo file `_layout.tsx` riêng cho thư mục đó.
* **Tự động reset Stack khi đổi Tab (`popToTopOnBlur`)**: Cấu hình `popToTopOnBlur: true` ở `<Tabs.Screen>` giúp đưa Stack lồng bên trong quay trở về màn hình đầu tiên (`index`) bất cứ khi nào người dùng bấm chuyển sang tab khác.
* **Huy hiệu thông báo (`tabBarBadge`)**: Hỗ trợ hiển thị số lượng thông báo hoặc trạng thái trực tiếp trên thanh Bottom Tab (ví dụ: `tabBarBadge: 2`, có cấu hình màu sắc qua `tabBarBadgeStyle`).

---

## 🛠️ Chi tiết cấu trúc thư mục và Layout hiện tại

### Sơ đồ cấu trúc Router:
```text
app/
├── _layout.tsx           # Layout gốc (chứa Stack điều hướng chính)
├── README.md             # File bạn đang đọc (tóm tắt tổng hợp)
└── (tabs)/               # Nhóm chứa Tab Navigation
    ├── _layout.tsx       # Định nghĩa Bottom Tab (Home, Stack, Products, LiquidGlass)
    ├── (home)/           # Tab 1: Trang chủ (Sử dụng Slot để tạo khung viền đỏ chung)
    │   ├── _layout.tsx
    │   ├── index.tsx
    │   ├── second/
    │   ├── thrid/
    │   ├── fourth.tsx
    │   ├── Five.tsx
    │   └── README.md
    ├── stacknavigation/  # Tab 2: Stack Navigation (Stack lồng trong Tabs)
    │   ├── _layout.tsx   # Định nghĩa Stack cho tab này
    │   ├── index.tsx     # Màn hình Green (Gốc Stack)
    │   ├── nested.tsx    # Màn hình Blue
    │   ├── nested-also.tsx # Màn hình Red
    │   └── README.md     # Tài liệu hướng dẫn chi tiết Stack Navigation
    ├── products/         # Tab 3: Sản phẩm
    │   ├── _layout.tsx   # Layout Stack của sản phẩm
    │   └── index.tsx     # Màn hình danh sách sản phẩm
    └── iosLiquidGlass/   # Tab 4: LiquidGlass
        └── index.tsx     # Màn hình LiquidGlass (Hiện badge số 2)
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
