import * as S from "./styles";

import { TouchableOpacityProps } from "react-native";

import { MealCardDTO } from "./MealCardDTO";

import { Text } from "@components/Text";

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
