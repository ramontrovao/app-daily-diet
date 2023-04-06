import { getAllMeals } from "../getAllMeals";

export const getMealById = async (id: string) => {
  try {
    const mealsStoraged = await getAllMeals();
    const mealFound = mealsStoraged.find((meal) => meal.id === id);

    return mealFound;
  } catch (error) {
    throw error;
  }
};
