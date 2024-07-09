import * as React from "react";
import { StyleSheet } from "react-native";
import CartScreen from "./components/CartScreen";
import HomeScreen from "./components/HomeScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerTitle: " " }}
        />
        <Stack.Screen
          name="Checkout"
          component={CartScreen}
          options={{ headerTitle: " " }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    display: "flex",
    height: "100%",
    width: "100%",
    paddingTop: 30,
  },
});
