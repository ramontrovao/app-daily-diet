import AsyncStorage from "@react-native-async-storage/async-storage/lib/typescript/AsyncStorage";
import { MEALS_COLLECTION } from "@storage/config";
import { getAllMeals } from "../getAllMeals";
import { MealDTO } from "../MealDTO";

export const createMeal = async (newMeal: MealDTO): Promise<void> => {
  try {
    const mealsStoraged = await getAllMeals();
    const mealsUpdated = [...mealsStoraged, newMeal];

    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(mealsUpdated));
  } catch (error) {
    throw error;
  }
};
