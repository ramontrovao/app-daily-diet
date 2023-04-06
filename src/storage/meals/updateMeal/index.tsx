import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "@storage/config";
import { getAllMeals } from "../getAllMeals";
import { MealDTO } from "../MealDTO";

export const updateMeal = async (id: string, mealUpdated: MealDTO) => {
  try {
    const meals = await getAllMeals();
    const mealToUpdateIndex = meals.findIndex((meal) => meal.id === id);
    meals[mealToUpdateIndex] = mealUpdated;

    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(meals));
  } catch (error) {
    console.log(error);
  }
};
