import { View, Image, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../utils/colors";

const GameOverScreen = ({ onGameOver }) => {
  return (
    <View>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/images/success.png")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 400,
    height: 400,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden'
  },
});
export default GameOverScreen;
