import { Text, StyleSheet, Platform } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: 'open-sans-bold',
    color: 'white',
    textAlign: "center",
    borderWidth: Platform.select({ios: 0, android: 2}),
    padding: 12,
    borderColor: 'white',
  },
});
export default Title;
