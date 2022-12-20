import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../utils/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nuberText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    padding: 24,
    margin: 24,
    borderColor: Colors.accent500,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  nuberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: "bold",
  },
});
export default NumberContainer;
