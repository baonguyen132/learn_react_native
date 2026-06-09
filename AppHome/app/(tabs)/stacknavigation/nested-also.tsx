import { Button, Text, View } from "react-native";
import { Link } from "expo-router";

export default function NestedAlso() {
    return (
        <View style={{ borderWidth: 2, borderColor: "green", justifyContent: "center", alignItems: "center", backgroundColor: "red", flex: 1 }}>
            <Text>NestedAlso</Text>
            <Link href="/stacknavigation/nested" style={{ borderWidth: 1, borderColor: "green", justifyContent: "center", alignItems: "center" }} push asChild>
                <Button title="Nested" />
            </Link>
        </View>
    );
}