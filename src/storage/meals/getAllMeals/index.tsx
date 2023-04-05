import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "@storage/config";
import { MealDTO } from "../MealDTO";

export const getAllMeals = async () => {
  try {
    const mealsStoraged = await AsyncStorage.getItem(MEALS_COLLECTION);
    const mealsParsed: MealDTO[] = mealsStoraged
      ? JSON.parse(mealsStoraged)
      : [];

    return mealsParsed;
  } catch (error) {
    throw error;
  }
};
