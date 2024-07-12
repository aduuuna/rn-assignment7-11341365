import React, { useState } from "react";
import { Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./components/HomeScreen";
import CartScreen from "./components/CartScreen";
import DrawerContentView from "./components/DrawerContentView";
import ProductDetailScreen from "./components/ProductDetailScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const screenWidth = Dimensions.get("window").width;
const drawerWidth = screenWidth * 0.6;

function HomeStack({ cartItems, addToCart, removeFromCart }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen">
        {(props) => (
          <HomeScreen {...props} cartItems={cartItems} addToCart={addToCart} />
        )}
      </Stack.Screen>
      <Stack.Screen name="Checkout">
        {(props) => (
          <CartScreen
            {...props}
            cartItems={cartItems}
            removeFromCart={removeFromCart}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="ProductDetail">
        {(props) => <ProductDetailScreen {...props} addToCart={addToCart} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [
      ...prevItems,
      { ...item, id: Date.now().toString() },
    ]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

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
        <Drawer.Screen name="Store">
          {(props) => (
            <HomeStack
              {...props}
              cartItems={cartItems}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
