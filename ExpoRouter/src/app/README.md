# Lưu ý về Layout (`_layout.tsx`) trong Expo Router

File `_layout.tsx` được sử dụng để định cấu hình các thành phần dùng chung (Shared Layout) cho các màn hình con nằm cùng thư mục. Tuy nhiên, lập trình Mobile (React Native) có những nguyên lý khác với lập trình Web truyền thống.

---

## ⚠️ Quy tắc quan trọng: Không bọc Navigator trong View giới hạn kích thước

Tránh viết như thế này:
```tsx
// ❌ SAI: Bọc Stack/Tabs trong View có kích thước cố định hoặc căn giữa
export default function BadLayout() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: 200 }}>
      <Stack />
    </View>
  );
}
```

### Tại sao?
1. **Mất kiểm soát kích thước**: `<Stack />` hoặc `<Tabs />` là các **Navigator (Bộ điều hành chuyển trang)**. Chúng cần chiếm trọn màn hình (`flex: 1` không bị giới hạn) để tính toán hiệu ứng chuyển cảnh và vị trí của các trang con.
2. **Lỗi cử chỉ (Gestures)**: Khi bọc Navigator trong một vùng nhỏ, các tính năng vuốt cạnh màn hình để quay lại (Swipe back trên iOS/Android) sẽ bị lỗi hoặc không hoạt động.

---

## 🛠️ Giải pháp thiết kế Layout dùng chung đúng cách

### Cách 1: Chỉ dùng chung Context / State (Khuyên dùng cho Stack/Tabs)
Nếu bạn chỉ muốn dùng chung logic, theme, hoặc các Provider (Redux, Context):
```tsx
import { Stack } from "expo-router";
import { MyProvider } from "@/context/MyContext";

export default function RootLayout() {
  return (
    <MyProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </MyProvider>
  );
}
```

### Cách 2: Sử dụng `<Slot />` nếu muốn bọc giao diện dùng chung (như Web)
Nếu bạn **không cần hiệu ứng chuyển trang** (như Stack hay Tab chuyển cảnh) mà chỉ muốn lồng trang con vào trong một khung giao diện dùng chung (Ví dụ: Khung chứa viền đen, tiêu đề chung...):
* Hãy sử dụng **`<Slot />`** thay thế cho `<Stack />`.

```tsx
import { Slot } from "expo-router";
import { View, Text } from "react-native";

export default function SharedUILayout() {
  return (
    <View style={{ flex: 1, backgroundColor: "#f0f0f0", padding: 20 }}>
      {/* Thành phần hiển thị chung cho tất cả các trang con */}
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Tiêu đề dùng chung</Text>
      
      <View style={{ flex: 1, borderWidth: 2, borderColor: "#000", backgroundColor: "#fff" }}>
        {/* Nội dung của trang con sẽ hiển thị ở đây */}
        <Slot />
      </View>
    </View>
  );
}
```

### Cách 3: Thiết kế khung dùng chung dưới dạng Component rời
Nếu bạn muốn sử dụng hiệu ứng chuyển trang của `<Stack />`, thay vì định nghĩa khung bao ngoài ở `_layout.tsx`, hãy tạo một component chứa khung đó (ví dụ: `<ScreenContainer>`) và bọc nó bên trong các file màn hình con (như `index.tsx`, `details.tsx`).
