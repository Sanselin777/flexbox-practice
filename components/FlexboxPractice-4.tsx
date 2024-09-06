import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FlexboxPractice4 = () => {
  return (
    <View
      style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}
    >
      <View style={styles.blueBox} />
      <View style={styles.orangeBox} />
      <View style={styles.greenBox} />
    </View>
  );
};

export default FlexboxPractice4;

const styles = StyleSheet.create({
  blueBox: {
    backgroundColor: "#2629ad",
    width: 100,
    height: "auto",
    borderColor: "white",
    borderWidth: 10,
  },
  orangeBox: {
    backgroundColor: "#d57827",
    width: 100,
    height: "auto",
    borderColor: "white",
    borderWidth: 10,
  },
  greenBox: {
    backgroundColor: "#26ad4c",
    width: 100,
    height: "auto",
    borderColor: "white",
    borderWidth: 10,
  },
});
