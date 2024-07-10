import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import CustomUnderlineText from "./CustomUnderlineText";

const DrawerContentView = (props) => {
  const closeDrawer = () => {
    props.navigation.closeDrawer();
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleUnderline = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const textItems = [
    {
      text: "ERIC ATSU",
      spacing: 8,
      color: "orange",
    },
  ];

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent1}>
        <TouchableOpacity onPress={closeDrawer} style={styles.closeButton}>
          <Image
            source={require("../assets/Close.png")}
            style={styles.closeIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.drawerContent2}>
        {textItems.map((item, index) => (
          <CustomUnderlineText
            key={index}
            isUnderlined={activeIndex === index}
            onPress={() => toggleUnderline(index)}
            underlineSpacing={item.spacing}
            underlineColor={item.color}
            textStyle={item.textStyle}
            containerStyles={item.containerStyle}
          >
            {item.text}
          </CustomUnderlineText>
        ))}

        <Text style={styles.drawerText2}>Store</Text>
        <Text style={styles.drawerText2}>Locations</Text>
        <Text style={styles.drawerText2}>Blog</Text>
        <Text style={styles.drawerText2}>Jewelery</Text>
        <Text style={styles.drawerText2}>Electronic</Text>
        <Text style={styles.drawerText2}>Clothing</Text>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent1: {
    flexDirection: "row",
    marginBottom: -10,
  },
  drawerContent2: {
    paddingTop: 20,
    paddingHorizontal: 10,

    flexDirection: "column",
    height: 350,
    justifyContent: "space-between",
    alignItems: "left",
  },
  drawerText1: {
    fontSize: 18,
    marginBottom: 15,
    letterSpacing: 2,
    fontWeight: "400",
  },
  drawerText2: {
    fontSize: 17,
    marginBottom: 15,
    marginTop: 10,
    fontWeight: "300",
  },
  closeButton: {
    alignSelf: "flex-end",
    padding: 10,
  },
  closeIcon: {
    width: 24,
    height: 24,
  },
});
export default DrawerContentView;
