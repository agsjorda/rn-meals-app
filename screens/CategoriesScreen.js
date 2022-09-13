import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/data";

const CategoriesScreen = ({ navigation }) => {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview");
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    ></FlatList>
  );
};

export default CategoriesScreen;
