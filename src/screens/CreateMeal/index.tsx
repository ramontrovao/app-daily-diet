import * as S from "./styles";
import { HeaderBack } from "@components/HeaderBack";
import { Text } from "@components/Text";
import { TextInput } from "@components/TextInput";

export const CreateMeal = () => {
  return (
    <S.CreateMealContainer>
      <HeaderBack />

      <S.CreateMealFormContainer>
        <S.CreateMealFormFieldsetContainer>
          <Text
            content="Nome"
            color="GRAY_2"
            fontSize="XSM"
            fontFamily="BOLD"
          />

          <TextInput />
        </S.CreateMealFormFieldsetContainer>

        <S.CreateMealFormFieldsetContainer>
          <Text
            content="Descrição"
            color="GRAY_2"
            fontSize="XSM"
            fontFamily="BOLD"
          />

          <TextInput />
        </S.CreateMealFormFieldsetContainer>

        <S.CreateMealFormFieldsetContainer>
          <Text
            content="Data"
            color="GRAY_2"
            fontSize="XSM"
            fontFamily="BOLD"
          />

          <TextInput />
        </S.CreateMealFormFieldsetContainer>

        <S.CreateMealFormFieldsetContainer>
          <Text
            content="Hora"
            color="GRAY_2"
            fontSize="XSM"
            fontFamily="BOLD"
          />

          <TextInput />
        </S.CreateMealFormFieldsetContainer>
      </S.CreateMealFormContainer>
    </S.CreateMealContainer>
  );
};
