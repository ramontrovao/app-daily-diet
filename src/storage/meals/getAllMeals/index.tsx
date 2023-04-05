import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "@storage/config";

export const getAllMeals = async () => {
  try {
    const mealsStoraged = await AsyncStorage.getItem(MEALS_COLLECTION);
    const mealsParsed: string[] = mealsStoraged
      ? JSON.parse(mealsStoraged)
      : [];

    return mealsParsed;
  } catch (error) {
    throw error;
  }
};
