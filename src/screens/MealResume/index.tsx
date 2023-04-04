import { Button } from "@components/Button";
import { Confirm } from "@components/Confirm";
import { HeaderBack } from "@components/HeaderBack";
import { MealStatusCard } from "@components/MealStatusCard";
import { Text } from "@components/Text";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import * as S from "./styles";

export const MealResume = () => {
  const { navigate } = useNavigation();
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const handleNavigateToEditMeal = () => {
    navigate("edit-meal");
  };

  const handleToggleModal = () => {
    setModalIsVisible(!modalIsVisible);
  };

  return (
    <S.MealResumeContainer>
      <HeaderBack title="Refeição" variant="GREEN_LIGHT" />

      <S.MealResumeContentContainer>
        <S.MealResumeContentTopContainer>
          <S.MealResumeTitleContainer>
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
          </S.MealResumeTitleContainer>

          <S.MealResumeDescriptionContainer>
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

            <MealStatusCard isHealthy={true} />
          </S.MealResumeDescriptionContainer>
        </S.MealResumeContentTopContainer>

        <S.MealResumeBottomContainer>
          <Button
            text="Editar refeição"
            icon="edit"
            onPress={handleNavigateToEditMeal}
          />
          <Button
            text="Excluir refeição"
            icon="delete"
            variant="white"
            onPress={handleToggleModal}
          />
          <Confirm
            title="Deseja realmente excluir o registro da refeição?"
            cancelText="Cancelar"
            confirmText="Sim"
            onCancel={handleToggleModal}
            onConfirm={handleToggleModal}
            visible={modalIsVisible}
          />
        </S.MealResumeBottomContainer>
      </S.MealResumeContentContainer>
    </S.MealResumeContainer>
  );
};
