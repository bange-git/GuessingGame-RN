import React, { useState } from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const inputNumberHandler = (enteredNumber) => {
    setEnteredNumber(enteredNumber);
  };

  const resetHandler = () => {
    setEnteredNumber('');
  }

  const confirmHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 100) {
      Alert.alert("Invalid Number", "Number must be between 1 and 99",
      [{text: "Okay", style: "destructive", onPress: resetHandler}]);
      return;
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        onChangeText={inputNumberHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#72063c",
    padding: 16,
    marginHorizontal: 8,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    textAlign: "center",
    marginVertical: 8,
    fontWeight: "bold",
  },

  buttonsContainer: {
    flexDirection: "row",
    marginVertical: 8,
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
