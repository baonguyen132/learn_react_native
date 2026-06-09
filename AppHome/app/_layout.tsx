import { Stack } from "expo-router";
import React from "react";
import { View, Text } from "react-native";


export default function RootLayout() {
  return <React.Fragment>
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
    </Stack>

  </React.Fragment>
}
