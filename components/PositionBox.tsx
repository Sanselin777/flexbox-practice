import { StyleSheet, Text, View } from "react-native";

const PositionBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.yelloxBox} />
      <View style={styles.purpleBox} />
    </View>
  );
};

export default PositionBox;

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: "green",
  },
  yelloxBox: {
    backgroundColor: "yellow",
    width: 150,
    height: 150,
    borderWidth: 10,
    borderColor: "white",
    top: 100,
  },
  purpleBox: {
    backgroundColor: "purple",
    width: 150,
    height: 150,
    borderWidth: 10,
    borderColor: "white",
    right: -200,
  },
});
