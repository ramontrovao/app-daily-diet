import * as S from "./styles";

type PercentProps = {
  variant?: "positive" | "negative";
};

export const Percent = ({ variant = "positive" }: PercentProps) => {
  return (
    <S.PercentContainer variant={variant}>
      <S.PercentTitle>XX,YY%</S.PercentTitle>
      <S.PercentSubtitle>das refeições dentro da dieta</S.PercentSubtitle>
    </S.PercentContainer>
  );
};
