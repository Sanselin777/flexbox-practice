import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Layout from "./components/Layout";
import { useState } from "react";
import BoxModel from "./components/BoxModel";
import { SafeAreaView } from "react-native-safe-area-context";
import DimensionsBox from "./components/DimensionsBox";
import PositionBox from "./components/PositionBox";
import FlexboxPractice from "./components/FlexboxPractice-0";
import FlexboxPractice1 from "./components/FlexboxPractice-1";
import FlexboxPractice2 from "./components/FlexboxPractice-2";
import FlexboxPractice3 from "./components/FlexboxPractice-3";
import FlexboxPractice4 from "./components/FlexboxPractice-4";
import FlexboxPractice5 from "./components/FlexboxPractice-5";
import FlexboxPractice6 from "./components/FlexboxPractice-6";
import FlexboxPractice7 from "./components/FlexboxPractice-7";
import FlexboxPractice8 from "./components/FlexboxPractice-8";
import FlexboxPractice9 from "./components/FlexboxPractice-9";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <DimensionsBox /> */}
      {/* <PositionBox /> */}
      {/* <FlexboxPractice /> */}
      {/* <FlexboxPractice1 /> */}
      {/* <FlexboxPractice2 /> */}
      {/* <FlexboxPractice3 /> */}
      {/* <FlexboxPractice4 /> */}
      {/* <FlexboxPractice5 /> */}
      {/* <FlexboxPractice6 /> */}
      {/* <FlexboxPractice7 /> */}
      {/* <FlexboxPractice8 /> */}
      <FlexboxPractice9 />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2eb7cc",
    flex: 1,
    paddingVertical: 20,
  },
});
