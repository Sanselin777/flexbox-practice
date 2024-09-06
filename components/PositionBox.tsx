import { StyleSheet, Text, View } from "react-native";

const PositionBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.blueBox} />
      <View style={styles.yelloxBox} />
      <View style={styles.purpleBox} />
    </View>
  );
};

export default PositionBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
  },
  yelloxBox: {
    backgroundColor: "yellow",
    width: 150,
    height: 150,
    borderWidth: 10,
    borderColor: "white",
    position: "absolute",
    top: 0,
  },
  purpleBox: {
    backgroundColor: "purple",
    width: 150,
    height: 150,
    borderWidth: 10,
    borderColor: "white",
    position: "absolute",
    top: 0,
    right: 0,
  },
  blueBox: {
    backgroundColor: "blue",
    // width: 150,
    // height: 150,
    borderWidth: 10,
    borderColor: "white",
    ...StyleSheet.absoluteFillObject,
  },
});
