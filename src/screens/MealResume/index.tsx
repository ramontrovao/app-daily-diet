import { Button } from "@components/Button";
import { HeaderBack } from "@components/HeaderBack";
import { Text } from "@components/Text";
import * as S from "./styles";

export const MealResume = () => {
  return (
    <S.MealResumeContainer>
      <HeaderBack title="Refeição" variant="GREEN_LIGHT" />

      <S.MealResumeContentContainer>
        <Text
          content="Sanduíche"
          fontSize="L"
          fontFamily="BOLD"
          color="BLACK"
        />

        <Text
          content="Sanduíche de pão integral com atum e salada de alface e tomate"
          fontSize="M"
          fontFamily="REGULAR"
          color="GRAY_2"
        />

        <Text
          content="Data e hora"
          fontSize="XSM"
          fontFamily="BOLD"
          color="BLACK"
        />

        <Text
          content="03/04/2023 às 10:14"
          fontSize="M"
          fontFamily="REGULAR"
          color="GRAY_2"
        />

        <Button text="Editar refeição" icon="edit" />
        <Button text="Excluir refeição" icon="delete" variant="white" />
      </S.MealResumeContentContainer>
    </S.MealResumeContainer>
  );
};
