import * as S from "./styles";

import { Button } from "@components/Button";
import { HeaderProfile } from "@components/HeaderProfile";
import { MealCard } from "@components/MealCard";
import { Percent } from "@components/Percent";
import { Text } from "@components/Text";
import { Loading } from "@components/Loading";

import { getAllMeals } from "@storage/meals/getAllMeals";
import { MealDTO } from "@storage/meals/MealDTO";

import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useState, useCallback } from "react";
import { getMealStatistics } from "@storage/meals/getMealStatistics";

export const Home = () => {
  const { navigate } = useNavigation();

  const [isLoading, setIsLoading] = useState(true);
  const [mealsOnDietPercentage, setMealsOnDietPercentage] = useState(0);
  const [meals, setMeals] = useState<MealDTO[]>([]);

  const allDates = meals.map((meal) => meal.date);
  const allDatesWithoutRepetition = allDates.filter((date, index) => {
    return allDates.indexOf(date) === index;
  });

  const fetchStatistics = async () => {
    try {
      setIsLoading(true);
      const { mealsOnDietPercentage } = await getMealStatistics();

      setMealsOnDietPercentage(mealsOnDietPercentage);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchMeals = async () => {
    try {
      setIsLoading(true);
      const meals = await getAllMeals();

      setMeals(meals);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNavigateToStatistics = () => {
    navigate("statistics");
  };

  const handleNavigateToCreateMeal = () => {
    navigate("create-edit-meal", {});
  };

  const handleNavigateToMealResume = (id: string) => {
    navigate("meal-resume", { id });
  };

  const filterMealsByDate = (date: string) => {
    const mealsFiltered = meals.filter((meal) => meal.date === date);

    return mealsFiltered;
  };

  useFocusEffect(
    useCallback(() => {
      fetchStatistics();
      fetchMeals();
    }, [])
  );

  return (
    <S.HomeContainerScroll>
      <S.HomeContainer>
        <HeaderProfile />
        {isLoading && <Loading />}
        {!isLoading && (
          <Percent
            percent={`${mealsOnDietPercentage}%`}
            variant={mealsOnDietPercentage >= 50 ? "positive" : "negative"}
            onPress={handleNavigateToStatistics}
          />
        )}

        <S.MealsContainer>
          <Text
            color="GRAY_1"
            fontSize="M"
            fontFamily="REGULAR"
            content="Refeições"
          />

          <Button
            icon="add"
            text="Nova refeição"
            onPress={handleNavigateToCreateMeal}
          />
        </S.MealsContainer>

        {!isLoading && (
          <>
            {allDatesWithoutRepetition.map((date) => (
              <S.DailyContainer key={date}>
                <Text
                  color="BLACK"
                  fontSize="XM"
                  fontFamily="BOLD"
                  content={date.replace(/\//g, ".")}
                />

                {filterMealsByDate(date).map(({ name, hour, isOnDiet, id }) => (
                  <MealCard
                    mealName={name}
                    mealHour={hour}
                    variant={isOnDiet ? "green" : "red"}
                    key={id}
                    onPress={() => handleNavigateToMealResume(id!)}
                  />
                ))}
              </S.DailyContainer>
            ))}
          </>
        )}

        {isLoading && <Loading />}
      </S.HomeContainer>
    </S.HomeContainerScroll>
  );
};
