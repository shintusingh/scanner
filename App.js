import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import fingertprint from "./components/fingertprint";

export default function App() {
  return (
    <SafeAreaView styles={styles.container}>
      <Text>Test sdffffffffff</Text>
      <fingertprint></fingertprint>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
