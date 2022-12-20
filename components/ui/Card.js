import { View, StyleSheet } from "react-native";
import Colors from "../../utils/colors";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary800,
    padding: 16,
    marginHorizontal: 8,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});

export default Card;
