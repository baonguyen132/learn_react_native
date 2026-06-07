import { Text, View, StyleSheet, Button } from "react-native";
import { Link } from "expo-router";
import { router } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Index</Text>
      <Link href="/fourth" style={{ color: "blue" }}>Fourth</Link>
      <Button title="Five" onPress={() => router.push("/Five")} />

      <Link href="/fourth" style={{ color: "blue" }} push asChild><Button title="/Push to fourth" /></Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "orange",
  },
});
