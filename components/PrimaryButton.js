import { View, Text, Pressable, StyleSheet } from "react-native";

const PrimaryButton = ({ children }) => {
  const handleClick = () => {
    console.log("Pressed!!!");
  };
  return (
    <View style={styles.buttonOuterContainer} >
      <Pressable
        style={ ({pressed}) => pressed ?  [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
        android_ripple={{ color: "#640233" }}
        onPress={handleClick}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
    backgroundColor: "white",
  },
  buttonText: {
    textAlign: "center",
  },

  pressed: {
    opacity: 0.75,
  }
});

export default PrimaryButton;
