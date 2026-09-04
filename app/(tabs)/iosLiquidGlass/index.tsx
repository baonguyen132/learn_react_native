import { Text, View, StyleSheet } from "react-native";

export default function IosLiquidGlass() {
    return (
        <View style={styles.container}>
            <Text>IosLiquidGlass</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
