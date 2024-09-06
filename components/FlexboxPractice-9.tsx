import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FlexboxPractice9 = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <View style={styles.blueBox} />
      <View style={styles.orangeBox} />
      <View style={styles.greenBox} />
    </View>
  );
};

export default FlexboxPractice9;

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
    borderColor: "white",
    borderWidth: 10,
    top: 50,
  },
  greenBox: {
    backgroundColor: "#26ad4c",
    width: 100,
    height: 100,
    borderColor: "white",
    borderWidth: 10,
  },
});
