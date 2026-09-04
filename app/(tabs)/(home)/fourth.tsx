import { Text, View, StyleSheet } from "react-native";

export default function Fourth() {
    return (
        <View style={styles.container}>
            <Text>Fourt</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderWidth: 2,
        borderColor: "yellow",
    },
});
