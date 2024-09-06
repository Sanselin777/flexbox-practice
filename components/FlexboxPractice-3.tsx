import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FlexboxPractice3 = () => {
  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <View style={styles.blueBox} />
      <View style={styles.orangeBox} />
      <View style={styles.greenBox} />
    </View>
  );
};

export default FlexboxPractice3;

const styles = StyleSheet.create({
  blueBox: {
    backgroundColor: "#2629ad",
    width: 100,
    height: 100,
    borderColor: "white",
    borderWidth: 10,
    alignSelf: "flex-end",
  },
  orangeBox: {
    backgroundColor: "#d57827",
    width: 100,
    height: 100,
    borderColor: "white",
    borderWidth: 10,
    alignSelf: "center",
  },
  greenBox: {
    backgroundColor: "#26ad4c",
    width: 100,
    height: 100,
    borderColor: "white",
    borderWidth: 10,
  },
});
