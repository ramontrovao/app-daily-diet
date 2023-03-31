import { Text } from "@components/Text";
import * as S from "./styles";

type MealCardProps = {
  mealName: string;
  mealHour: string;
  variant?: "green" | "red";
};

export const MealCard = ({
  mealName,
  mealHour,
  variant = "green",
}: MealCardProps) => {
  return (
    <S.MealCardContainer>
      <S.LeftWrapper>
        <S.HourText>{mealHour}</S.HourText>

        <Text
          color="GRAY_2"
          fontSize="M"
          fontFamily="REGULAR"
          content={mealName}
        />
      </S.LeftWrapper>

      <S.StatusIcon variant={variant} />
    </S.MealCardContainer>
  );
};
