import { Button, Text, View } from "react-native";
import { Link } from "expo-router";



export default function Nested() {
    return (
        <View style={{ borderWidth: 2, borderColor: "green", justifyContent: "center", alignItems: "center", backgroundColor: "blue", flex: 1 }}>
            <Text>Nested</Text>
            <Link href="/stacknavigation/nested-also" style={{ borderWidth: 1, borderColor: "green", justifyContent: "center", alignItems: "center" }} push asChild>
                <Button title="Nested Also" />
            </Link>

        </View>
    );
}