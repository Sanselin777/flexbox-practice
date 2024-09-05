import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";

const DimensionsBox = () => {
  const { height, width } = useWindowDimensions();
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={[{ ...styles.purpleBox, width: width * 0.5 }]} />
      </View>
      <Text style={styles.title}>
        width: {width}, height:{height}
      </Text>
    </View>
  );
};

export default DimensionsBox;

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 300,
    backgroundColor: "red",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  purpleBox: {
    backgroundColor: "purple",
    width: "50%",
    height: "50%",
  },
});
