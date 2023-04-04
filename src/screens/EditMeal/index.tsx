import * as S from "./styles";
import { HeaderBack } from "@components/HeaderBack";
import { Text } from "@components/Text";
import { TextInput } from "@components/TextInput";
import { RadioButton } from "@components/RadioButton";
import { useState } from "react";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export const EditMeal = () => {
  const { navigate } = useNavigation();
  const [dietOptionActive, setDietOptionActive] = useState("Sim");

  const handleChangeDietOption = () => {
    if (dietOptionActive === "Sim") {
      setDietOptionActive("Não");
    } else {
      setDietOptionActive("Sim");
    }
  };

  const handleNavigateToFeedback = () => {
    navigate("feedback");
  };

  return (
    <S.EditMealContainer>
      <HeaderBack title="Editar refeição" />

      <S.EditMealFormContainer>
        <S.EditMealFormFieldsetContainer>
          <Text
            content="Nome"
            color="GRAY_2"
            fontSize="XSM"
            fontFamily="BOLD"
          />

          <TextInput />
        </S.EditMealFormFieldsetContainer>

        <S.EditMealFormFieldsetContainer>
          <Text
            content="Descrição"
            color="GRAY_2"
            fontSize="XSM"
            fontFamily="BOLD"
          />

          <TextInput height={120} textAlignVertical="top" />
        </S.EditMealFormFieldsetContainer>

        <S.EditMealFiedlsetWrapperContainer>
          <S.EditMealFormFieldsetContainer>
            <Text
              content="Data"
              color="GRAY_2"
              fontSize="XSM"
              fontFamily="BOLD"
            />

            <TextInput width={135} />
          </S.EditMealFormFieldsetContainer>

          <S.EditMealFormFieldsetContainer>
            <Text
              content="Hora"
              color="GRAY_2"
              fontSize="XSM"
              fontFamily="BOLD"
            />

            <TextInput width={135} />
          </S.EditMealFormFieldsetContainer>
        </S.EditMealFiedlsetWrapperContainer>

        <S.EditMealFormFieldsetContainer>
          <Text
            content="Está dentro da dieta?"
            color="GRAY_2"
            fontSize="XSM"
            fontFamily="BOLD"
          />
        </S.EditMealFormFieldsetContainer>

        <S.EditMealFiedlsetWrapperContainer>
          <RadioButton
            icon="brightness-1"
            text="Sim"
            variant="green"
            isActive={dietOptionActive === "Sim"}
            onPress={handleChangeDietOption}
          />

          <RadioButton
            icon="brightness-1"
            text="Não"
            variant="red"
            isActive={dietOptionActive === "Não"}
            onPress={handleChangeDietOption}
          />
        </S.EditMealFiedlsetWrapperContainer>

        <Button
          text="Salvar refeição"
          variant="black"
          onPress={handleNavigateToFeedback}
        />
      </S.EditMealFormContainer>
    </S.EditMealContainer>
  );
};