import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { MEALS } from "../data/data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";

const MealDetailsScreen = ({ route }) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: selectedMeal.imageUrl,
        }}
      />

      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <Subtitle>Ingredients</Subtitle>
      <List data={selectedMeal.ingredients} />
      <Subtitle>Steps</Subtitle>
      <List data={selectedMeal.steps} />
    </View>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
});
