import "react-native-get-random-values";
import { MEALS_COLLECTION } from "@storage/config";

import { getAllMeals } from "../getAllMeals";

import { MealDTO } from "../MealDTO";

import AsyncStorage from "@react-native-async-storage/async-storage";
import generateUUID from "react-native-uuid";
import { AppException } from "@utils/AppException";

export const createMeal = async ({
  name,
  description,
  date,
  hour,
  isOnDiet,
}: MealDTO): Promise<void> => {
  try {
    const newMeal = {
      id: generateUUID.v4() as string,
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
