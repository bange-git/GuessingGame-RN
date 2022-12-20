import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import { Ionicons } from '@expo/vector-icons';

const generateRandomBetween = (max, min, exclude) => {
  let rnNumber = Math.floor(Math.random() * (max - min)) + min;

  if (rnNumber === exclude) {
    return generateRandomBetween(max, min, exclude);
  } else {
    return rnNumber;
  }
};

let minBoundary = 1;
let maxBoundary = 100;
const GameScreen = ({ userNumber, onGameOver }) => {
  const initialState = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialState);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  const nextGuessHandler = (direction) => {
    //direction => lower or greater
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", "You Know that this is wrong..."),
        [{ text: "Sorry", style: "cancel" }];
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  };

  return (
    <View style={styles.screen}>
      <Title>Oponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>Higher or Lower</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color='red'/>
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            <Ionicons name="md-add" size={24} color='green' />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  instructionText: {
    marginBottom: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginVertical: 8,
  },
  buttonContainer: {
    flex: 1,
  },
});

export default GameScreen;
