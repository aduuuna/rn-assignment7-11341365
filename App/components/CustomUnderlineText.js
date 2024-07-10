import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const CustomUnderlineText = ({
  children,
  isUnderlined,
  onPress,
  underlineSpacing = 5,
  underlineColor = "black",
  textStyles = {},
  containerStyles = {},
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text style={styles.text}>{children}</Text>
        {isUnderlined && (
          <View
            style={[
              styles.underline,
              { marginTop: underlineSpacing, backgroundColor: underlineColor },
            ]}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginTop: -5,
    letterSpacing: 1,
    fontWeight: "400",
    marginBottom: -5,
  },
  underline: {
    height: 1,
    width: "50%",
  },
});

export default CustomUnderlineText;
