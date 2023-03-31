import * as S from "./styles";
import { Icon } from "@components/Icon";
import { Text } from "@components/Text";

export const HeaderMeal = () => {
  return (
    <S.HeaderMealContainer>
      <S.ArrowContainer>
        <S.ArrowButton>
          <Icon color="GREEN_DARK" size={28} name="arrow-back" />
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
