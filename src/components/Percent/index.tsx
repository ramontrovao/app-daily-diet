import { Text } from "@components/Text";
import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type PercentProps = {
  variant?: "positive" | "negative";
} & TouchableOpacityProps;

export const Percent = ({ variant = "positive", ...rest }: PercentProps) => {
  return (
    <S.PercentContainer variant={variant} {...rest}>
      <Text
        content="90,86%"
        color="BLACK"
        fontFamily="BOLD"
        fontSize="XL"
        fontWeight="bold"
      />

      <Text
        content="90,86%"
        color="GRAY_3"
        fontFamily="REGULAR"
        fontSize="XSM"
      />
    </S.PercentContainer>
  );
};
