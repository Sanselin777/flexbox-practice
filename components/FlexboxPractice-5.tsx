import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FlexboxPractice5 = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.blueBox} />
      <View style={styles.orangeBox} />
      <View style={styles.greenBox} />
    </View>
  );
};

export default FlexboxPractice5;

const styles = StyleSheet.create({
  blueBox: {
    backgroundColor: "#2629ad",
    width: "auto",
    flex: 1,
    borderColor: "white",
    borderWidth: 10,
  },
  orangeBox: {
    backgroundColor: "#d57827",
    width: "auto",
    borderColor: "white",
    borderWidth: 10,
    flex: 1,
  },
  greenBox: {
    backgroundColor: "#26ad4c",
    width: "auto",
    borderColor: "white",
    borderWidth: 10,
    flex: 2,
  },
});
