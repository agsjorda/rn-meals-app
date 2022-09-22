import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/data";
import { FavoritesContext } from "../store/context/favorites-context";

const FavoritesScreen = () => {
  const { ids } = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) => ids.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>You Have No Favorites</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
