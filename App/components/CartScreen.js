import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

export default function CartScreen({ route, navigation }) {
  const { cartItems: initialCartItems, updateCart } = route.params || {};
  const [cartItems, setCartItems] = React.useState(initialCartItems || []);

  const removeItem = (itemToRemove) => {
    const newCartItems = cartItems.filter(
      (item) => item.id !== itemToRemove.id
    );
    setCartItems(newCartItems);
    if (typeof updateCart === "function") {
      updateCart(newCartItems);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemAbout}>{item.about}</Text>
        <Text style={styles.itemPrice}>${item.price}</Text>
      </View>
      <TouchableOpacity
        onPress={() => removeItem(item)}
        style={styles.deleteButton}
      >
        <Image
          source={require("../assets/remove.png")}
          style={styles.deleteIcon}
        />
      </TouchableOpacity>
    </View>
  );

  const calculateTotalPrice = () => {
    return cartItems.reduce((sum, item) => {
      const itemPrice = parseFloat(item.price) || 0;
      return sum + itemPrice;
    }, 0);
  };

  const totalPrice = calculateTotalPrice();
  console.log("Received params:", route.params);
  React.useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      // Update the cart in HomeScreen when leaving this screen
      updateCart(cartItems);
    });

    return unsubscribe;
  }, [navigation, cartItems, updateCart]);

  return (
    <View style={styles.CartScreenContainer}>
      <View style={styles.Main1}>
        <View style={styles.Main1MiniA}>
          <View style={styles.Main1MiniA1}>
            <Image source={require("../assets/Logo.png")} />
          </View>
          <View style={styles.Main1MiniA2}>
            <Image source={require("../assets/Search.png")} />
          </View>
        </View>
        <View style={styles.Main1MiniB}>
          <Text style={styles.Check}>CHECKOUT</Text>
        </View>
      </View>
      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
          <Text style={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</Text>
        </>
      ) : (
        <Text style={styles.emptyNotice}>Your cart is empty</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  CartScreenContainer: {
    backgroundColor: "white",
    display: "flex",
    height: "100%",
    width: "100%",
    paddingTop: 40,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  cartItem: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    alignItems: "center",
  },
  itemImage: {
    height: 150,
    width: 100,
    marginRight: 20,
  },
  itemInfo: {
    flex: 1,
    fontSize: 30,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "600",
    opacity: 0.7,
    fontFamily: "sans-serif",

    letterSpacing: 2,
  },
  itemAbout: {
    fontSize: 16,
    fontWeight: "600",
    opacity: 0.4,
    fontFamily: "sans-serif",
  },
  itemPrice: {
    fontSize: 20,
    fontWeight: "600",
    opacity: 0.7,
    fontFamily: "sans-serif",
    color: "#F28C28",
  },
  deleteButton: {
    padding: 5,
  },
  deleteIcon: {
    width: 20,
    height: 20,
  },
  totalPrice: {
    textAlign: "center",
    fontSize: 20,
    justifyContent: "center",

    fontWeight: "600",
    opacity: 0.7,
    fontFamily: "sans-serif",

    letterSpacing: 2,
  },
  emptyNotice: {
    textAlign: "center",
    justifyContent: "center",
    marginTop: 300,
    fontSize: 22,
    opacity: 0.7,
    fontFamily: "sans-serif",
  },
  Main1: {
    height: 120,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  Main1MiniA: {
    height: 55,
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 2,
    flexDirection: "row",
  },
  Main1MiniA1: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    width: 300,
  },
  Main1MiniA2: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
  },
  Main1MiniB: {
    height: 55,
    alignItems: "center",
    justifyContent: "center",
  },
  Check: {
    fontSize: 20,
    fontWeight: "600",
    opacity: 0.7,
    fontFamily: "sans-serif",
    letterSpacing: 7,
  },
});
