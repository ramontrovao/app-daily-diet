import * as S from "./styles";

import { Icon } from "@components/Icon";
import { Text } from "@components/Text";

import { TouchableOpacityProps } from "react-native";

type PercentProps = {
  percent: string;
  variant?: "positive" | "negative";
} & TouchableOpacityProps;

export const Percent = ({
  percent,
  variant = "positive",
  ...rest
}: PercentProps) => {
  return (
    <S.PercentContainer variant={variant} {...rest}>
      <S.HeaderPercentContainer>
        {variant === "positive" && (
          <Icon name="arrow-upward" color="GREEN_DARK" size={20} />
        )}

        {variant === "negative" && (
          <Icon name="arrow-downward" color="RED_DARK" size={20} />
        )}
      </S.HeaderPercentContainer>

      <Text
        content={percent}
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
    </S.PercentContainer>
  );
};
