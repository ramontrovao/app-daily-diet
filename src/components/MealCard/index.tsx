import * as S from "./styles";

import { Text } from "@components/Text";

import { MealCardDTO } from "./MealCardDTO";

import { TouchableOpacityProps } from "react-native";

type MealCardProps = {
  mealName: string;
  mealHour: string;
} & MealCardDTO &
  TouchableOpacityProps;

export const MealCard = ({
  mealName,
  mealHour,
  variant = "green",
  ...rest
}: MealCardProps) => {
  return (
    <S.MealCardContainer {...rest}>
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
