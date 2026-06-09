import { Button, Text, View } from "react-native";
import { Link } from "expo-router";

export default function StackNavigation() {
    return (
        <View style={{ borderWidth: 2, borderColor: "green", justifyContent: "center", alignItems: "center", backgroundColor: "green", flex: 1 }}>
            <Text>StackNavigation</Text>
            <Link href="/stacknavigation/nested" style={{ borderWidth: 1, borderColor: "green", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: "green" }}>Nested</Text>
            </Link>
            <Link href="/stacknavigation/nested-also" style={{ borderWidth: 1, borderColor: "green", justifyContent: "center", alignItems: "center" }} push asChild>
                <Button title="Also Nested" />
            </Link>
        </View>
    );
}

/**
 * /home
 * /stacknavigation
 *    /stacknavigation/index
 *    /stacknavigation/nested
 *    /stacknavigation/also-nested
 * /products
 * /liquidGlass
 * 
 */