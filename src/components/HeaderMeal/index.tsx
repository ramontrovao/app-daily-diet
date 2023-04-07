import * as S from "./styles";

import { Icon } from "@components/Icon";
import { Text } from "@components/Text";

import { HeaderMealDTO } from "./HeaderMealDTO";

import { useNavigation } from "@react-navigation/native";

export type HeaderMealProps = { percentage: string } & HeaderMealDTO;

export const HeaderMeal = ({
  percentage,
  variant = "green",
}: HeaderMealProps) => {
  const { goBack } = useNavigation();

  const handleGoBack = () => {
    goBack();
  };

  return (
    <S.HeaderMealContainer variant={variant}>
      <S.ArrowContainer>
        <S.ArrowButton onPress={handleGoBack}>
          <Icon
            color={variant === "green" ? "GREEN_DARK" : "RED_DARK"}
            size={28}
            name="arrow-back"
          />
        </S.ArrowButton>
      </S.ArrowContainer>

      <S.MealTitleContainer>
        <Text
          content={percentage}
          color="BLACK"
          fontFamily="BOLD"
          fontSize="XL"
          fontWeight="bold"
        />

        <Text
          content="das refeições dentro da dieta"
          color="GRAY_3"
          fontFamily="REGULAR"
          fontSize="XSM"
        />
      </S.MealTitleContainer>
    </S.HeaderMealContainer>
  );
};
