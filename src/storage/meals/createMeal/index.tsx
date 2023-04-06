import { MEALS_COLLECTION } from "@storage/config";

import { getAllMeals } from "../getAllMeals";

import { MealDTO } from "../MealDTO";

import AsyncStorage from "@react-native-async-storage/async-storage";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

export const createMeal = async ({
  name,
  description,
  date,
  hour,
  isOnDiet,
}: MealDTO): Promise<void> => {
  try {
    const newMeal = {
      id: uuidv4(),
      name,
      description,
      date,
      hour,
      isOnDiet,
    };

    const mealsStoraged = await getAllMeals();
    const mealsUpdated = [...mealsStoraged, newMeal];

    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(mealsUpdated));
  } catch (error) {
    throw error;
  }
};
