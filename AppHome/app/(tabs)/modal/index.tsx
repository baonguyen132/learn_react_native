import { Button, Text, TouchableOpacity, View, Alert } from "react-native";
import { StyleSheet } from "react-native";



export default function Modal() {

    const handerAlert = () => {
        Alert.alert(
            "Alert",
            "This is an alert",
            [
                {
                    text: "Ok",
                    onPress: () => console.log("Cancel Pressed")
                },
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "destructive"
                }
            ]
        )
    }
    return (
        <View style={{ borderWidth: 2, borderColor: "green", justifyContent: "center", alignItems: "center", flex: 1 }}>
            <Text>Modal</Text>

            <TouchableOpacity
                style={styles.buttons}
                onPress={handerAlert} >
                <Text style={{ color: "white" }}>Open Alert</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    buttons: {
        padding: 10,
        backgroundColor: "green",
        width: 150,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    cancelButton: {
        color: "red"
    }
})