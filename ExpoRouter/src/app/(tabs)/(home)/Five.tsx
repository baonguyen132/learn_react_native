import { Text, View, StyleSheet } from "react-native";

export default function Five() {
    return (
        <View style={styles.container}>
            <Text>Five</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderWidth: 2,
        borderColor: "blue",
    },
});
