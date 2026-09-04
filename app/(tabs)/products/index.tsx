import { Text, View, StyleSheet } from "react-native";

export default function Products() {
    return (
        <View style={styles.container}>
            <Text>Danh sách sản phẩm</Text>
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
