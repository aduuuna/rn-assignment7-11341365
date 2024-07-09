import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import CartScreen from "./CartScreen";

export default function HomeScreen({ navigation }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [
      ...prevItems,
      {
        ...item,
        id: Date.now().toString(), // Generate a unique id for each cart entry
      },
    ]);
  };

  const updateCart = useCallback((newCartItems) => {
    setCartItems(newCartItems);
  }, []);

  console.log("Navigating to Checkout with:", { cartItems, updateCart });

  return (
    <View style={styles.HomeScreenContainer}>
      <View style={styles.HomeScreenMain1}>
        <TouchableOpacity>
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
      <ScrollView style={styles.scroll}>
        <View style={styles.Hmm}>
          <View style={styles.HomeScreenMain3}>
            <View style={styles.Main3Left}>
              <View style={styles.Main3Top}>
                <ImageBackground
                  source={require("../assets/dress1.png")}
                  style={styles.backgroundImage}
                >
                  <TouchableOpacity
                    onPress={() =>
                      addToCart({
                        name: "OFFICE WEAR",
                        price: "120",
                        about: "reversible angola cardigan",
                        image: require("../assets/dress1.png"),
                      })
                    }
                  >
                    <Image
                      source={require("../assets/add_circle.png")}
                      style={styles.addCircle}
                    />
                  </TouchableOpacity>
                </ImageBackground>
              </View>
              <View style={styles.Main3Down}>
                <View style={styles.Font}>
                  <Text style={styles.Text1}>Office Wear</Text>
                </View>
                <View style={styles.Font}>
                  <Text style={styles.Text2}>reversible angola cardigan</Text>
                </View>
                <View style={styles.Font}>
                  <Text style={styles.Text3}>$120</Text>
                </View>
              </View>
            </View>
            <View style={styles.Main3Right}>
              <View style={styles.Main3Top}>
                <ImageBackground
                  source={require("../assets/dress2.png")}
                  style={styles.backgroundImage}
                >
                  <TouchableOpacity
                    onPress={() =>
                      addToCart({
                        name: "BLACK",
                        price: "120",
                        about: "reversible angola cardigan",
                        image: require("../assets/dress2.png"),
                      })
                    }
                  >
                    <Image
                      source={require("../assets/add_circle.png")}
                      style={styles.addCircle}
                    />
                  </TouchableOpacity>
                </ImageBackground>
              </View>
              <View style={styles.Main3Down}>
                <View style={styles.Font}>
                  <Text style={styles.Text1}>Black</Text>
                </View>
                <View style={styles.Font}>
                  <Text style={styles.Text2}>reversible angola cardigan</Text>
                </View>
                <View style={styles.Font}>
                  <Text style={styles.Text3}>$120</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.HomeScreenMain3}>
            <View style={styles.Main3Left}>
              <View style={styles.Main3Top}>
                <ImageBackground
                  source={require("../assets/dress3.png")}
                  style={styles.backgroundImage}
                >
                  <TouchableOpacity
                    onPress={() =>
                      addToCart({
                        name: "CHURCH WEAR",
                        price: "120",
                        about: "reversible angola cardigan",
                        image: require("../assets/dress3.png"),
                      })
                    }
                  >
                    <Image
                      source={require("../assets/add_circle.png")}
                      style={styles.addCircle}
                    />
                  </TouchableOpacity>
                </ImageBackground>
              </View>
              <View style={styles.Main3Down}>
                <View style={styles.Font}>
                  <Text style={styles.Text1}>Church Wear</Text>
                </View>
                <View style={styles.Font}>
                  <Text style={styles.Text2}>reversible angola cardigan</Text>
                </View>
                <View style={styles.Font}>
                  <Text style={styles.Text3}>$120</Text>
                </View>
              </View>
            </View>
            <View style={styles.Main3Right}>
              <View style={styles.Main3Top}>
                <ImageBackground
                  source={require("../assets/dress4.png")}
                  style={styles.backgroundImage}
                >
                  <TouchableOpacity
                    onPress={() =>
                      addToCart({
                        name: "LAMEREI",
                        price: "120",
                        about: "reversible angola cardigan",
                        image: require("../assets/dress4.png"),
                      })
                    }
                  >
                    <Image
                      source={require("../assets/add_circle.png")}
                      style={styles.addCircle}
                    />
                  </TouchableOpacity>
                </ImageBackground>
              </View>
              <View style={styles.Main3Down}>
                <View style={styles.Font}>
                  <Text style={styles.Text1}>Lamerei</Text>
                </View>
                <View style={styles.Font}>
                  <Text style={styles.Text2}>reversible angola cardigan</Text>
                </View>
                <View style={styles.Font}>
                  <Text style={styles.Text3}>$120</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.HomeScreenMain3}>
            <View style={styles.Main3Left}>
              <View style={styles.Main3Top}>
                <ImageBackground
                  source={require("../assets/dress2.png")}
                  style={styles.backgroundImage}
                >
                  <TouchableOpacity
                    onPress={() =>
                      addToCart({
                        name: "OFFICE WEAR",
                        price: "120",
                        about: "reversible angola cardigan",
                        image: require("../assets/dress2.png"),
                      })
                    }
                  >
                    <Image
                      source={require("../assets/add_circle.png")}
                      style={styles.addCircle}
                    />
                  </TouchableOpacity>
                </ImageBackground>
              </View>
              <View style={styles.Main3Down}>
                <View style={styles.Font}>
                  <Text style={styles.Text1}>Office Wear</Text>
                </View>
                <View style={styles.Font}>
                  <Text style={styles.Text2}>reversible angola cardigan</Text>
                </View>
                <View style={styles.Font}>
                  <Text style={styles.Text3}>$120</Text>
                </View>
              </View>
            </View>
            <View style={styles.Main3Right}>
              <View style={styles.Main3Top}>
                <ImageBackground
                  source={require("../assets/dress6.png")}
                  style={styles.backgroundImage}
                >
                  <TouchableOpacity
                    onPress={() =>
                      addToCart({
                        name: "LOOP",
                        price: "120",
                        about: "reversible angola cardigan",
                        image: require("../assets/dress6.png"),
                      })
                    }
                  >
                    <Image
                      source={require("../assets/add_circle.png")}
                      style={styles.addCircle}
                    />
                  </TouchableOpacity>
                </ImageBackground>
              </View>
              <View style={styles.Main3Down}>
                <View style={styles.Font}>
                  <Text style={styles.Text1}>Lopo</Text>
                </View>
                <View style={styles.Font}>
                  <Text style={styles.Text2}>reversible angola cardigan</Text>
                </View>
                <View style={styles.Font}>
                  <Text style={styles.Text3}>$120</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.HomeScreenMain3}>
            <View style={styles.Main3Left}>
              <View style={styles.Main3Top}>
                <ImageBackground
                  source={require("../assets/dress7.png")}
                  style={styles.backgroundImage}
                >
                  <TouchableOpacity
                    onPress={() =>
                      addToCart({
                        name: "21WN",
                        price: "120",
                        about: "reversible angola cardigan",
                        image: require("../assets/dress7.png"),
                      })
                    }
                  >
                    <Image
                      source={require("../assets/add_circle.png")}
                      style={styles.addCircle}
                    />
                  </TouchableOpacity>
                </ImageBackground>
              </View>
              <View style={styles.Main3Down}>
                <View style={styles.Font}>
                  <Text style={styles.Text1}>21WN</Text>
                </View>
                <View style={styles.Font}>
                  <Text style={styles.Text2}>reversible angola cardigan</Text>
                </View>
                <View style={styles.Font}>
                  <Text style={styles.Text3}>$120</Text>
                </View>
              </View>
            </View>
            <View style={styles.Main3Right}>
              <View style={styles.Main3Top}>
                <ImageBackground
                  source={require("../assets/dress3.png")}
                  style={styles.backgroundImage}
                >
                  <TouchableOpacity
                    onPress={() =>
                      addToCart({
                        name: "LAME",
                        price: "120",
                        about: "reversible angola cardigan",
                        image: require("../assets/dress3.png"),
                      })
                    }
                  >
                    <Image
                      source={require("../assets/add_circle.png")}
                      style={styles.addCircle}
                    />
                  </TouchableOpacity>
                </ImageBackground>
              </View>
              <View style={styles.Main3Down}>
                <View style={styles.Font}>
                  <Text style={styles.Text1}>lame</Text>
                </View>
                <View style={styles.Font}>
                  <Text style={styles.Text2}>reversible angola cardigan</Text>
                </View>
                <View style={styles.Font}>
                  <Text style={styles.Text3}>$120</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
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
});
