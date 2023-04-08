import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "@storage/config";
import { AppException } from "@utils/AppException";
import { getAllMeals } from "../getAllMeals";

type mealUpdatedType = {
  name: string;
  description: string;
  date: string;
  hour: string;
  isOnDiet: boolean;
};

export const updateMeal = async (id: string, mealUpdated: mealUpdatedType) => {
  try {
    const meals = await getAllMeals();
    const mealToUpdateIndex = meals.findIndex((meal) => meal.id === id);

    if (!mealToUpdateIndex) {
      throw new AppException("A refeição não foi encontrada!");
    }

    meals[mealToUpdateIndex] = { ...mealUpdated, id };

    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(meals));
  } catch (error) {
    throw error;
  }
};
