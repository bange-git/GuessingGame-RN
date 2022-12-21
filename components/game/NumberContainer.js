import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../utils/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nuberText}>{children}</Text>
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderColor: Colors.accent500,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  nuberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 24 : 36,
    fontFamily: "open-sans-bold",
  },
});
export default NumberContainer;
