import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type PercentProps = {
  variant?: "positive" | "negative";
} & TouchableOpacityProps;

export const Percent = ({ variant = "positive", ...rest }: PercentProps) => {
  return (
    <S.PercentContainer variant={variant} {...rest}>
      <S.PercentTitle>XX,YY%</S.PercentTitle>
      <S.PercentSubtitle>das refeições dentro da dieta</S.PercentSubtitle>
    </S.PercentContainer>
  );
};
