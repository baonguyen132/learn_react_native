import { Text, View, StyleSheet } from "react-native";

export default function Third() {
    return (
        <View style={styles.container}>
            <Text>Third</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderWidth: 2,
        borderColor: "green",
    },
});
