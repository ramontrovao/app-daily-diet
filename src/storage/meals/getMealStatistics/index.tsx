import { getAllMeals } from "../getAllMeals";

export const getMealStatistics = async () => {
  try {
    const mealsStoraged = await getAllMeals();
    const mealsOnDiet = mealsStoraged.filter((meal) => meal.isOnDiet === true);
    const mealsOnDietPercentage =
      (mealsOnDiet.length / mealsStoraged.length) * 100;
    const mealsBestSequence = mealsStoraged.reduce(
      (acc, meal) => {
        if (meal.isOnDiet) {
          acc.count++;
          if (acc.count > acc.maxCount) {
            acc.maxCount = acc.count;
          }
        } else {
          acc.count = 0;
        }

        return acc;
      },
      { count: 0, maxCount: 0 }
    ).maxCount;

    return {
      mealsRegistered: mealsStoraged.length,
      mealsOnDietPercentage: isNaN(mealsOnDietPercentage)
        ? 0
        : mealsOnDietPercentage.toFixed(2),
      mealsOnDiet: mealsOnDiet.length,
      mealsNotOnDiet: mealsStoraged.length - mealsOnDiet.length,
      mealsBestSequence,
    };
  } catch (error) {
    throw error;
  }
};
