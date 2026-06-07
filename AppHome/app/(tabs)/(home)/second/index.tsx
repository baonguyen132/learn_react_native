import { Text, View, StyleSheet } from "react-native";

export default function Second() {
    return (
        <View style={styles.container}>
            <Text>Second</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderWidth: 2,
        borderColor: "pink",
    },
});
