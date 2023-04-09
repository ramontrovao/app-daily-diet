import { AppException } from "@utils/AppException";
import { getAllMeals } from "../getAllMeals";

export const getMealById = async (id: string) => {
  try {
    const mealsStoraged = await getAllMeals();
    const mealFound = mealsStoraged.find((meal) => meal.id === id);

    if (!mealFound) {
      throw new AppException("Refeição não encontrada.");
    }

    return mealFound;
  } catch (error) {
    throw error;
  }
};
