import { Button, Text, TouchableOpacity, View, Alert, Modal } from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { Link } from "expo-router";


export default function ModalScreen() {
    const [modalVisible, setModalVisible] = useState(false)
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
        <View style={{ borderWidth: 2, borderColor: "green", justifyContent: "center", alignItems: "center", flex: 1, gap: 10 }}>
            <Text>Modal</Text>

            <TouchableOpacity
                style={styles.buttons}
                onPress={handerAlert} >
                <Text style={{ color: "white" }}>Open Alert</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttons}
                onPress={() => setModalVisible(true)} >
                <Text style={{ color: "white" }}>Open RN Modal</Text>
            </TouchableOpacity>

            <Link href="/modal" push asChild>
                <Button title="Open Expo Modal" />
            </Link>


            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent
                presentationStyle="pageSheet"
                onRequestClose={() => {
                    setModalVisible(false)
                }} >

                <View style={{ borderWidth: 2, borderColor: "green", justifyContent: "center", alignItems: "center", flex: 1 }} >
                    <Text>Modal</Text>

                </View>
            </Modal>
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