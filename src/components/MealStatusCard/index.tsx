import { Icon } from "@components/Icon";
import { Text } from "@components/Text";
import * as S from "./styles";

type MealStatusCardProps = {
  variant?: "green" | "red";
};

export const MealStatusCard = ({ variant = "green" }: MealStatusCardProps) => {
  return (
    <S.MealStatusCardContainer>
      {variant === "green" && (
        <>
          <Icon color="GREEN_DARK" size={8} name="brightness-1" />

          <Text
            content="dentro da dieta"
            fontSize="XSM"
            fontFamily="REGULAR"
            color="GRAY_1"
          />
        </>
      )}

      {variant === "red" && (
        <>
          <Icon color="RED_DARK" size={8} name="brightness-1" />

          <Text
            content="fora da dieta"
            fontSize="XSM"
            fontFamily="REGULAR"
            color="GRAY_1"
          />
        </>
      )}
    </S.MealStatusCardContainer>
  );
};
