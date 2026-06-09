import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="(home)"
        options={{
          tabBarLabel: "Trang chủ",
          tabBarIcon: () => <FontAwesome name="home" color="black" size={24} />
        }}
      />
      <Tabs.Screen
        name="stacknavigation"

        options={{
          headerShown: false,
          popToTopOnBlur: true,
          tabBarLabel: "Stack",
          tabBarIcon: () => <FontAwesome name="history" color="black" size={24} />
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          tabBarLabel: "Sản phẩm",
          tabBarIcon: () => <Ionicons name="cart" color="#000" size={24} />
        }}
      />
      <Tabs.Screen
        name="iosLiquidGlass/index"
        options={{
          tabBarBadge: 2,
          tabBarBadgeStyle: {
            backgroundColor: "red",
            color: "white",
          },
          tabBarLabel: "LiquidGlass",
          tabBarIcon: () => <Ionicons name="water" color="#000" size={24} />
        }}
      />
    </Tabs>
  );
}

