import * as S from "./styles";
import { Icon } from "@components/Icon";
import { Text } from "@components/Text";
import { useNavigation } from "@react-navigation/native";
import { HeaderMealDTO } from "./HeaderMealDTO";

export const HeaderMeal = ({ variant = "green" }: HeaderMealDTO) => {
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
          content="90,86%"
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
