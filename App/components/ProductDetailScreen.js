import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function ProductDetailScreen({ route, navigation }) {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

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

  const { product } = route.params;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image,
    });

    alert("Added to cart!");
  };

  return (
    <View style={styles.ProductDetailScreenContainer}>
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
      <ScrollView style={styles.container}>
        <View style={styles.HomeView2}>
          <Image source={{ uri: product.image }} style={styles.image} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.category}>Category: {product.category}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>Rating: {product.rating.rate}</Text>
            <Text style={styles.ratingCount}>
              ({product.rating.count} reviews)
            </Text>
          </View>
        </View>
        <View style={styles.HomeView3}>
          <View style={styles.holder}>
            <Image
              style={styles.imag}
              source={require("../assets/Do Not Bleach.png")}
            />
            <Text style={styles.infog}>Do not use bleach</Text>
          </View>
          <View style={styles.holder}>
            <Image
              style={styles.imag}
              source={require("../assets/Do Not Tumble Dry.png")}
            />
            <Text style={styles.infog}>Do not tumble dry</Text>
          </View>
          <View style={styles.holder}>
            <Image
              style={styles.imag}
              source={require("../assets/Do Not Wash.png")}
            />
            <Text style={styles.infog}>Dry clean with tetrachloroethylene</Text>
          </View>
          <View style={styles.holder}>
            <Image
              style={styles.imag}
              source={require("../assets/Iron Low Temperature.png")}
            />
            <Text style={styles.infog}>Iron at a maximum of 110ºC/230ºF</Text>
          </View>
        </View>
        <View style={styles.HomeView4}>
          <View style={styles.line1}></View>
          <View style={styles.line2}>
            <View style={styles.F4iew}>
              <Image
                style={styles.imag}
                source={require("../assets/Shipping.png")}
              />
            </View>
            <View style={styles.F5iew}>
              <Text style={styles.infom}>Free Flat Rate Shipping</Text>
              <Text style={styles.infom}>Estimated to be delivered on</Text>
              <Text style={styles.infom}>09/11/2021 - 12/11/2021</Text>
            </View>
            <View style={styles.F4iew}>
              <Image style={styles.imag} source={require("../assets/Up.png")} />
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={handleAddToCart}>
          <View style={styles.HomeView5}>
            <View style={styles.One}>
              <Image
                style={styles.imag}
                source={require("../assets/Plus.png")}
              />
            </View>
            <View style={styles.Two}>
              <Text style={styles.addToCartText}>Add to Cart</Text>
            </View>
            <View style={styles.One}>
              <Image
                style={styles.imag}
                source={require("../assets/Heart.png")}
              />
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  ProductDetailScreenContainer: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
    display: "flex",
    height: "100%",
    width: "100%",
    paddingTop: 40,
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
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "contain",
  },
  infoContainer: {
    padding: 20,
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F28C28",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  category: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  rating: {
    fontSize: 14,
    marginRight: 10,
  },
  ratingCount: {
    fontSize: 14,
    color: "#666",
  },
  addToCartButton: {
    backgroundColor: "#F28C28",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  addToCartText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  HomeView2: {
    width: "100%",
    height: 280,
    padding: 20,
  },
  HomeView3: {
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: 210,
    padding: 20,
    flexDirection: "column",
  },
  holder: {
    width: "100%",
    height: 50,
    justifyContent: "left",
    flexDirection: "row",

    alignItems: "center",
  },
  imag: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  infog: {
    fontSize: 15,
    marginLeft: 10,
  },
  infom: {
    fontSize: 15,
    marginLeft: 10,
  },
  HomeView4: {
    width: "100%",
    height: 200,

    flexDirection: "column",
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "space-around",
  },
  line1: {
    borderWidth: 1,
    borderColor: "grey",
    width: 340,
  },
  line2: {
    width: "100%",
    height: 150,

    flexDirection: "row",
  },
  F4iew: {
    width: 50,
    height: 30,
    padding: 20,
    justifyContent: "center",
  },
  F5iew: {
    width: 250,
    height: 80,

    alignItems: "left",
    justifyContent: "space-around",
    flexDirection: "column",
  },
  HomeView5: {
    width: 308,
    height: 70,
    backgroundColor: "#F28C28",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderWidth: 2,
    justifyContent: "space-around",
    alignSelf: "center",
    borderRadius: 5,
  },
  One: {
    width: 90,
    height: 50,

    alignItems: "center",
    justifyContent: "center",
  },
  Two: {
    width: 180,
    height: 50,

    alignItems: "center",
    justifyContent: "center",
  },
});
