import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Trang chủ",
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          title: "Sản phẩm",
        }}
      />
      <Tabs.Screen
        name="iosLiquidGlass"
        options={{
          title: "LiquidGlass",
        }}
      />
    </Tabs>
  );
}
