import { Stack } from "expo-router"

export default function StackNavigationLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    title: "StackNavigation"
                }}
            />
            <Stack.Screen
                name="nested"
                options={{
                    title: "Nested"
                }}
            />
            <Stack.Screen
                name="nested-also"
                options={{
                    title: "Also Nested"
                }}
            />
        </Stack>
    )

}