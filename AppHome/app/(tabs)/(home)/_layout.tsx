import { Text, View } from "react-native";
import { Slot, Stack } from "expo-router"
export default function HomeLayout() {
    return (
        <View style={{ borderWidth: 2, borderColor: "red", marginTop: 50, marginBottom: 20, flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>HomeLayout</Text>
            <Slot />
        </View>
    )

}