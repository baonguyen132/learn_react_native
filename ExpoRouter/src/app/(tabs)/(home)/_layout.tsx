import { View } from "react-native";
import { Slot, Stack } from "expo-router"
export default function HomeLayout() {
    return (
        <View style={{ borderWidth: 2, borderColor: "red", padding: 10 }}>
            <Slot />
        </View>
    )

}