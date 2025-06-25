import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Aora!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container takes up the full screen
    justifyContent: "center", // Centers content vertically
    alignItems: "center", // Centers content horizontally
    backgroundColor: "#f8f9fa", // Light gray background
  },
  heading: {
    fontSize: 24, // Large font size
    fontWeight: "bold", // Bold text
    color: "#333", // Dark gray text
  },
});
