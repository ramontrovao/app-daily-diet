import * as S from "./styles";

import { Button } from "@components/Button";
import { HeaderProfile } from "@components/HeaderProfile";
import { MealCard } from "@components/MealCard";
import { Percent } from "@components/Percent";
import { Text } from "@components/Text";

import { useNavigation } from "@react-navigation/native";

export const Home = () => {
  const { navigate } = useNavigation();

  const handleNavigateToStatistics = () => {
    navigate("statistics");
  };

  const handleNavigateToCreateMeal = () => {
    navigate("edit-meal");
  };

  const handleNavigateToMealResume = () => {
    navigate("meal-resume");
  };

  return (
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

      <S.DailyContainer>
        <Text
          color="BLACK"
          fontSize="XM"
          fontFamily="BOLD"
          content="30.03.23"
        />

        <MealCard
          mealName="X-tudo"
          mealHour="20:00"
          variant="red"
          onPress={handleNavigateToMealResume}
        />
      </S.DailyContainer>
    </S.HomeContainer>
  );
};
