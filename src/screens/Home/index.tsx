import { Button } from "@components/Button";
import { HeaderDefault } from "@components/HeaderDefault";
import { MealCard } from "@components/MealCard";
import { Percent } from "@components/Percent";
import { Text } from "@components/Text";
import * as S from "./styles";

export const Home = () => {
  return (
    <S.HomeContainer>
      <HeaderDefault />
      <Percent />

      <S.MealsContainer>
        <Text
          color="GRAY_1"
          fontSize="M"
          fontFamily="REGULAR"
          content="Refeições"
        />

        <Button icon="add" text="Nova refeição" />
      </S.MealsContainer>

      <S.DailyContainer>
        <Text
          color="BLACK"
          fontSize="XM"
          fontFamily="BOLD"
          content="30.03.23"
        />

        <MealCard mealName="X-tudo" mealHour="20:00" variant="red" />
      </S.DailyContainer>
    </S.HomeContainer>
  );
};
