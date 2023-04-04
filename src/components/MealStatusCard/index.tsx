import { Icon } from "@components/Icon";
import { Text } from "@components/Text";
import * as S from "./styles";

type MealStatusCardProps = {
  isHealthy?: boolean;
};

export const MealStatusCard = ({ isHealthy = true }: MealStatusCardProps) => {
  return (
    <S.MealStatusCardContainer>
      {isHealthy && (
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

      {!isHealthy && (
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
