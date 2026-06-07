# Cấu trúc Định tuyến (Routing) trong thư mục `(home)`

Thư mục này minh họa cách thiết lập các trang (Screens), layout dùng chung, và các phương thức chuyển trang (Navigation) trong Expo Router.

---

## 📁 1. Bản đồ định tuyến (Folder-based Routing)

Trong Expo Router, cấu trúc file/thư mục tự động ánh xạ thành đường dẫn URL của ứng dụng:

| Tên File / Thư mục | Đường dẫn tương ứng (Route) | Kiểu khai báo | Lưu ý |
| :--- | :--- | :--- | :--- |
| `index.tsx` | `/` (Trang chủ) | File mặc định của thư mục | Viền màu cam (`orange`) |
| `second/index.tsx` | `/second` | Thư mục con có `index.tsx` | Viền màu hồng (`pink`) |
| `thrid/index.tsx` | `/thrid` | Thư mục con có `index.tsx` | *(Tên thư mục viết sai chính tả "thrid")*, viền xanh lá (`green`) |
| `fourth.tsx` | `/fourth` | File route trực tiếp | Viền màu vàng (`yellow`) |
| `Five.tsx` | `/Five` | File route trực tiếp | Có chữ cái viết hoa `F` |

---

## 🎨 2. Layout dùng chung (`_layout.tsx` sử dụng `<Slot />`)

File `_layout.tsx` của thư mục `(home)` được viết để bọc tất cả các trang con trong một khung dùng chung (viền đỏ có đệm padding):

```tsx
import { View } from "react-native";
import { Slot } from "expo-router"

export default function HomeLayout() {
    return (
        <View style={{ borderWidth: 2, borderColor: "red", padding: 10, flex: 1 }}>
            <Slot /> {/* Các trang con (index, second, thrid, fourth, Five) sẽ được nhúng vào đây */}
        </View>
    )
}
```
* **Ưu điểm**: Giúp mọi trang con trong thư mục `(home)` đều tự động có viền đỏ bên ngoài mà không cần phải viết lại code style viền đỏ này ở từng màn hình.

---

## 🗺️ 3. Các cách chuyển trang (Navigation) trong `index.tsx`

Có 3 cách chuyển trang được bạn áp dụng trong `index.tsx`:

### Cách 1: Sử dụng Component `<Link>` (Chuyển trang dạng chữ)
Chuyển trang đơn giản bằng cách click vào dòng chữ Text:
```tsx
import { Link } from "expo-router";

<Link href="/fourth" style={{ color: "blue" }}>Fourth</Link>
```

### Cách 2: Chuyển trang theo phương thức lập trình (Programmatic Navigation)
Sử dụng đối tượng `router` để chuyển trang khi kích hoạt một sự kiện (ví dụ: bấm nút `Button`):
```tsx
import { router } from "expo-router";
import { Button } from "react-native";

<Button title="Five" onPress={() => router.push("/Five")} />
```

### Cách 3: Kết hợp `<Link asChild>` và `<Button>`
Khi bạn muốn một nút bấm `Button` thực hiện chức năng chuyển trang của `<Link>`, thuộc tính `asChild` giúp `<Link>` truyền toàn bộ hành vi bấm sang cho thẻ con `<Button>` bên trong:
```tsx
<Link href="/fourth" style={{ color: "blue" }} push asChild>
  <Button title="/Push to fourth" />
</Link>
```
* **`push(href)`**: 
  * Đẩy một màn hình mới lên trên cùng của ngăn xếp (Navigation Stack).
  * Bạn có thể mở một trang nhiều lần (ví dụ: bấm vào sản phẩm A rồi bấm sản phẩm B, mỗi trang sẽ đè lên nhau).
  * Người dùng có thể nhấn nút **Quay lại (Back)** để quay về các màn hình trước đó.
  * **Ví dụ code**:
    ```tsx
    import { router, Link } from "expo-router";

    // 1. Dùng thẻ Link:
    <Link href="/fourth">Đi tới Fourth</Link>

    // 2. Dùng router.push:
    router.push("/fourth");
    ```

* **`replace(href)`**:
  * Thay thế trực tiếp màn hình hiện tại bằng màn hình mới.
  * Màn hình trước đó sẽ bị xóa khỏi lịch sử ngăn xếp. Người dùng **không thể** quay lại màn hình cũ bằng nút Back.
  * Thích hợp cho các trường hợp chuyển hướng sau khi Đăng nhập, Đăng xuất, hoặc hoàn thành thanh toán.
  * **Ví dụ code**:
    ```tsx
    import { router, Link } from "expo-router";

    // 1. Dùng thẻ Link (thêm prop replace):
    <Link href="/fourth" replace>Thay thế bằng Fourth</Link>

    // 2. Dùng router.replace:
    router.replace("/fourth");
    ```

* **`dismissTo(href)`**:
  * Đóng dần (pop) tất cả các màn hình đang mở cho đến khi quay về đúng màn hình được chỉ định.
  * **Nếu màn hình đích đã tồn tại trong lịch sử stack**: Nó sẽ dọn dẹp (đóng) các màn hình đè lên nó để quay lại màn hình đó.
  * **Nếu màn hình đích chưa có trong lịch sử stack**: Nó sẽ hoạt động tương tự lệnh `replace` (thay thế trang hiện tại bằng trang mới).
  * **Ví dụ code**:
    ```tsx
    import { router } from "expo-router";

    // Dùng router.dismissTo (chỉ hỗ trợ qua API router):
    router.dismissTo("/fourth");
    ```
