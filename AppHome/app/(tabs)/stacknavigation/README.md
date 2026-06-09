# Cấu trúc Nested Navigation (Stack Navigation lồng trong Bottom Tabs)

Thư mục này minh họa cách kết hợp **Stack Navigation** lồng bên trong một màn hình thuộc **Bottom Tab Navigation** sử dụng Expo Router.

---

## 📁 1. Cấu trúc thư mục định tuyến

Khi muốn lồng một cấu trúc chuyển trang dạng ngăn xếp (Stack) vào một Tab, ta tạo một thư mục con đại diện cho Tab đó và định nghĩa một file `_layout.tsx` riêng bên trong nó để trả về `<Stack />`.

```text
app/(tabs)/stacknavigation/
├── _layout.tsx       # Định nghĩa Stack Navigator cho riêng Tab này
├── index.tsx         # Trang chính của Stack (Màn hình đầu tiên)
├── nested.tsx        # Trang con cấp 1 (Màn hình Blue)
├── nested-also.tsx   # Trang con cấp 2 (Màn hình Red)
└── README.md         # File tài liệu hướng dẫn (bạn đang đọc)
```

---

## ⚙️ 2. Cách thiết lập cấu hình

### Bước A: Tạo Layout Stack con (`stacknavigation/_layout.tsx`)
Ta định nghĩa các màn hình (Screens) nằm trong ngăn xếp này:
```tsx
import { Stack } from "expo-router";

export default function StackNavigationLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "StackNavigation" }} />
      <Stack.Screen name="nested" options={{ title: "Nested" }} />
      <Stack.Screen name="nested-also" options={{ title: "Also Nested" }} />
    </Stack>
  );
}
```

### Bước B: Khai báo Tab con trong Layout chính (`app/(tabs)/_layout.tsx`)
Tại file layout của Bottom Tabs, ta khai báo tab chỉ trỏ vào thư mục `stacknavigation` và tắt Header của Tab đi để tránh bị hiện 2 tiêu đề (tiêu đề Tab đè lên tiêu đề Stack):

```tsx
<Tabs.Screen
  name="stacknavigation" // Tên trùng với tên thư mục chứa Stack
  options={{
    headerShown: false,    // Tắt Header của Tab để dùng Header của Stack con
    popToTopOnBlur: true,  // Tự động quay về trang index khi người dùng bấm sang tab khác
    tabBarLabel: "Stack",
    tabBarIcon: () => <FontAwesome name="history" color="black" size={24} />
  }}
/>
```

---

## 💡 3. Các thuộc tính định cấu hình Tab & Stack nổi bật

### `popToTopOnBlur: true`
* **Ý nghĩa**: Khi người dùng đang ở trang con (ví dụ `/stacknavigation/nested-also`) và bấm chuyển sang một Tab khác (ví dụ *Trang chủ*), rồi sau đó bấm quay lại Tab *Stack*, ứng dụng sẽ tự động dọn dẹp Stack và đưa họ về **trang đầu tiên** (`index.tsx`) của Tab đó.
* **Tác dụng**: Giúp hành vi điều hướng của người dùng tự nhiên hơn, không bị kẹt ở các trang con khi đổi Tab.

### `tabBarBadge` và `tabBarBadgeStyle`
* Dùng để hiện các thông báo/số lượng huy hiệu (ví dụ số lượng sản phẩm trong giỏ hàng, số tin nhắn chưa đọc) lên thanh Bottom Tab.
* **Ví dụ cấu hình** (đã áp dụng cho tab `LiquidGlass`):
  ```tsx
  tabBarBadge: 2,
  tabBarBadgeStyle: {
    backgroundColor: "red",
    color: "white",
  }
  ```

---

## 🗺️ 4. Cách điều hướng giữa các màn hình trong Stack

Sử dụng `<Link>` để di chuyển giữa các trang con trong Stack. Vì chúng nằm trong cùng thư mục `stacknavigation`, ta cần cung cấp đường dẫn đầy đủ:

1. **Chuyển trang bằng chữ thông thường:**
   ```tsx
   <Link href="/stacknavigation/nested">
     <Text>Nested</Text>
   </Link>
   ```

2. **Chuyển trang bọc nút Button (sử dụng `push` và `asChild`):**
   ```tsx
   <Link href="/stacknavigation/nested-also" push asChild>
     <Button title="Also Nested" />
   </Link>
   ```
   * **`push`**: Đẩy màn hình mới vào ngăn xếp.
   * **`asChild`**: Cho phép thẻ `<Link>` truyền sự kiện click và thuộc tính của nó sang cho component con trực tiếp (`<Button>`).
