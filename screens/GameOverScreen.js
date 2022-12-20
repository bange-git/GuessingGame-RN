import { View, Image, StyleSheet, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../utils/colors";

const GameOverScreen = ({ onGameOver }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        You Phone needed <Text style={styles.highlight}>X</Text> rounds to guess
        the number<Text style={styles.highlight}>Y</Text>
      </Text>
      <PrimaryButton>Start new Game</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  summaryText: {
    textAlign: "center",
    fontFamily: "open-sans",
    fontSize: 24,
    marginBottom: 20
  },
  highlight: {
    color: Colors.primary500,
    fontFamily: "open-sans-bold",
  },
});
export default GameOverScreen;
