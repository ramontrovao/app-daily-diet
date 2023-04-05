import { getAllMeals } from "../getAllMeals";
import { MealDTO } from "../MealDTO";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "@storage/config";

export const removeMeal = async (id: string): Promise<void> => {
  try {
    const mealsStoraged: MealDTO[] = await getAllMeals();
    const mealsUpdated = mealsStoraged.filter((meal) => meal.id !== id);

    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(mealsUpdated));
  } catch (error) {
    throw error;
  }
};
