import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import axios from "axios";
import CartScreen from "./CartScreen";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen({ navigation }) {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => [
      ...prevItems,
      {
        ...item,
        id: Date.now().toString(),
      },
    ]);
  };

  const updateCart = useCallback((newCartItems) => {
    setCartItems(newCartItems);
  }, []);

  const renderProduct = ({ item }) => (
    <View style={styles.productItem}>
      <TouchableOpacity
        onPress={() => navigation.navigate("ProductDetail", { product: item })}
      >
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={styles.productImage} />
        </View>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.addToCartIcon}
        onPress={() =>
          addToCart({
            id: item.id,
            name: item.title,
            price: item.price,
            image: item.image,
          })
        }
      >
        <Image
          source={require("../assets/add_circle.png")}
          style={styles.addCircle}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.HomeScreenContainer}>
      <View style={styles.HomeScreenMain1}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <View style={styles.Main1Mini1}>
            <Image source={require("../assets/Menu.png")} />
          </View>
        </TouchableOpacity>

        <View style={styles.Main1Mini2}>
          <Image source={require("../assets/Logo.png")} />
        </View>

        <View style={styles.Main1Mini3}>
          <TouchableOpacity>
            <View style={styles.Main1Mini3A}>
              <Image source={require("../assets/Search.png")} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Checkout", {
                cartItems: cartItems,
                updateCart: updateCart,
              })
            }
          >
            <View style={styles.Main1Mini3B}>
              <Image source={require("../assets/shoppingBag.png")} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.HomeScreenMain2}>
        <View style={styles.Main2Mini1}>
          <Text style={styles.Text0}>OUR STORY</Text>
        </View>
        <View style={styles.Main2Mini2}>
          <TouchableOpacity>
            <View style={styles.Main2Mini2A}>
              <Image source={require("../assets/Listview.png")} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.Main2Mini2B}>
              <Image source={require("../assets/Filter.png")} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.HomeScreenMain3A}>
        <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  HomeScreenContainer: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    height: "100%",
    width: "100%",
    paddingTop: 40,
  },
  scroll: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
  },
  Hmm: {
    alignItems: "center",
  },
  HomeScreenMain1: {
    height: 60,
    width: 350,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 2,
    flexDirection: "row",
  },
  Main1Mini1: {
    height: 54,
    width: 50,

    alignItems: "center",
    justifyContent: "center",
  },
  Main1Mini2: {
    height: 54,
    width: 160,

    alignItems: "center",
    justifyContent: "center",
  },
  Main1Mini3: {
    height: 54,
    width: 100,

    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  Main1Mini3A: {
    height: 50,
    width: 46,

    padding: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  Main1Mini3B: {
    height: 50,
    width: 46,

    alignItems: "center",
    justifyContent: "center",
  },
  HomeScreenMain2: {
    height: 50,
    width: 350,

    marginBottom: 20,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 2,
    flexDirection: "row",
  },
  Main2Mini1: {
    height: 44,
    width: 230,

    alignItems: "left",
    justifyContent: "center",
  },
  Main2Mini2: {
    height: 44,
    width: 100,

    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  Main2Mini2A: {
    height: 40,
    width: 40,

    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#F2F2F2",
  },
  Main2Mini2B: {
    height: 40,
    width: 40,

    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#F2F2F2",
  },
  HomeScreenMain3: {
    height: 350,
    width: 350,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 1,
    flexDirection: "row",
  },
  Main3Left: {
    height: 346,
    width: 170,

    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 1,
    flexDirection: "column",
  },

  Main3Right: {
    height: 346,
    width: 170,

    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 1,
    flexDirection: "column",
  },
  Main3Top: {
    height: 250,
    width: 164,

    justifyContent: "space-evenly",
  },
  addCircle: {
    top: 100,
    left: 130,
    height: 30,
    width: 30,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  Main3Down: {
    height: 76,
    width: 164,
    justifyContent: "space-evenly",
    paddingLeft: 2,
  },
  Text0: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "sans-serif",
    letterSpacing: 5,
  },
  Text1: {
    fontSize: 16,
    fontWeight: "600",
    opacity: 0.7,
    fontFamily: "sans-serif",
    letterSpacing: 0.5,
  },

  Text2: {
    fontSize: 13.5,
    fontWeight: "600",
    opacity: 0.4,
    fontFamily: "sans-serif",
  },
  Text3: {
    fontSize: 20,
    fontWeight: "600",
    opacity: 0.7,
    fontFamily: "sans-serif",
    color: "#F28C28",
  },
  HomeScreenMain3A: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    width: "100%",
    height: "100%",
  },

  productItem: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "relative",
  },
  imageContainer: {
    width: "100%",
    height: 120, // Adjust this value as needed
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  productImage: {
    width: 150,
    height: 100,
    resizeMode: "contain",
  },
  productTitle: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 5,
    textAlign: "left",
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#F28C28",
    textAlign: "left",
  },
  addToCartIcon: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  addCircle: {
    width: 25,
    height: 25,
  },
});
