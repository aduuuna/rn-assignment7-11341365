import "react-native-gesture-handler";
import { Dimensions } from "react-native";
import * as React from "react";
import { StyleSheet } from "react-native";
import CartScreen from "./components/CartScreen";
import HomeScreen from "./components/HomeScreen";
import DrawerContentView from "./components/DrawerContentView";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator, DrawerContent } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const screenWidth = Dimensions.get("window").width;
const drawerWidth = screenWidth * 0.6; // 50% of screen width

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="Checkout"
        component={CartScreen}
        options={{ headerTitle: " " }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            width: drawerWidth,
            padding: 5,
          },
        }}
        drawerContent={(props) => <DrawerContentView {...props} />}
      >
        <Drawer.Screen name="Store" component={HomeStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerShown: false,
//         }}
//       >
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{ headerTitle: " " }}
//         />
//         <Stack.Screen
//           name="Checkout"
//           component={CartScreen}
//           options={{ headerTitle: " " }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "white",
//     alignItems: "center",
//     display: "flex",
//     height: "100%",
//     width: "100%",
//     paddingTop: 30,
//   },
// });
