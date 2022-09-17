import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    borderBottomColor: "#7093c7",
    borderBottomWidth: 2,
    marginVertical: 4,
    padding: 6,
    marginHorizontal: 12,
  },
  subtitle: {
    color: "#7093c7",
    fontSize: 18,
    fontWeight: "bold",

    textAlign: "center",
  },
});
