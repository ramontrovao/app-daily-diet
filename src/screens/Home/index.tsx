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

export const Home = () => {
  const { navigate } = useNavigation();

  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState<MealDTO[]>([]);

  const allDates = meals.map((meal) => meal.date);
  const allDatesWithoutRepetition = allDates.filter((date, index) => {
    return allDates.indexOf(date) === index;
  });

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
      fetchMeals();
    }, [])
  );

  return (
    <S.HomeContainerScroll>
      <S.HomeContainer>
        <HeaderProfile />
        <Percent variant="positive" onPress={handleNavigateToStatistics} />

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
          <S.DailyContainer>
            {allDatesWithoutRepetition.map((date) => (
              <>
                <Text
                  color="BLACK"
                  fontSize="XM"
                  fontFamily="BOLD"
                  content={date.replace(/\//g, ".")}
                  key={date}
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
              </>
            ))}
          </S.DailyContainer>
        )}

        {isLoading && <Loading />}
      </S.HomeContainer>
    </S.HomeContainerScroll>
  );
};
