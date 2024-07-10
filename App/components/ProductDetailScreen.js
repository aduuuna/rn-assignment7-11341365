import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function ProductDetailScreen({ route, navigation }) {
  const { product } = route.params;

  const addToCart = () => {
    // This function will be implemented later
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <TouchableOpacity style={styles.addButton} onPress={addToCart}>
        <Text style={styles.addButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    fontSize: 18,
    color: "#888",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
  },
  addButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
  },
});
