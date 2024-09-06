import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FlexboxPractice = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.blueBox} />
      <View style={styles.orangeBox} />
      <View style={styles.greenBox} />
    </View>
  );
};

export default FlexboxPractice;

const styles = StyleSheet.create({
  blueBox: {
    backgroundColor: "#2629ad",
    width: 100,
    height: 100,
    borderColor: "white",
    borderWidth: 10,
  },
  orangeBox: {
    backgroundColor: "#d57827",
    width: 100,
    height: 100,
    flex: 1,
    borderColor: "white",
    borderWidth: 10,
  },
  greenBox: {
    backgroundColor: "#26ad4c",
    width: 100,
    height: 100,
    borderColor: "white",
    borderWidth: 10,
  },
});
