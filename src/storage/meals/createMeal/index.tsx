import { MEALS_COLLECTION } from "@storage/config";

import { getAllMeals } from "../getAllMeals";

import { MealDTO } from "../MealDTO";

import AsyncStorage from "@react-native-async-storage/async-storage";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
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
      id: uuidv4(),
      name,
      description,
      date,
      hour,
      isOnDiet,
    };

    const mealsStoraged = await getAllMeals();
    const mealAlreadyExists = mealsStoraged.includes(newMeal);

    if (mealAlreadyExists) {
      throw new AppException(
        "Essa refeição já está cadastrada em nosso banco de dados!"
      );
    }

    const mealsUpdated = [...mealsStoraged, newMeal];

    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(mealsUpdated));
  } catch (error) {
    throw error;
  }
};
