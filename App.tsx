import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Layout from "./components/Layout";
import { useState } from "react";
import BoxModel from "./components/BoxModel";
import { SafeAreaView } from "react-native-safe-area-context";
import DimensionsBox from "./components/DimensionsBox";
import PositionBox from "./components/PositionBox";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <DimensionsBox /> */}
      <PositionBox />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
