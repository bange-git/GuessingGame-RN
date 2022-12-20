import { Text, StyleSheet } from "react-native";
import Colors from "../../utils/colors";

const InstructionText = ({ children, style }) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
    fontFamily: 'open-sans-bold',
  },
});

export default InstructionText;
