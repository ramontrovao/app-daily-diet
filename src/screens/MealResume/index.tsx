import * as S from "./styles";

import { Button } from "@components/Button";
import { Confirm } from "@components/Confirm";
import { HeaderBack } from "@components/HeaderBack";
import { MealStatusCard } from "@components/MealStatusCard";
import { Text } from "@components/Text";

import {
  RouteProp,
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { MealDTO } from "@storage/meals/MealDTO";
import { getMealById } from "@storage/meals/getMealById";
import { Loading } from "@components/Loading";
import { removeMeal } from "@storage/meals/removeMeal";

interface MealResumeScreenParams {
  id: string;
}

export const MealResume = () => {
  const {
    params: { id },
  } = useRoute<RouteProp<Record<string, MealResumeScreenParams>>>();
  const { navigate } = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [meal, setMeal] = useState<MealDTO>({} as MealDTO);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const fetchMeal = async () => {
    try {
      setIsLoading(true);

      const mealStoraged = await getMealById(id);

      setMeal(mealStoraged!);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditMeal = () => {
    navigate("create-edit-meal", { id });
  };

  const handleToggleModal = () => {
    setModalIsVisible(!modalIsVisible);
  };

  const handleRemoveMeal = async () => {
    try {
      await removeMeal(id);

      navigate("home");
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchMeal();
    }, [])
  );

  return (
    <>
      {isLoading && <Loading />}

      {!isLoading && (
        <>
          <Confirm
            title="Deseja realmente excluir o registro da refeição?"
            cancelText="Cancelar"
            confirmText="Sim"
            onCancel={handleToggleModal}
            onConfirm={handleRemoveMeal}
            visible={modalIsVisible}
          />

          <S.MealResumeContainer>
            <HeaderBack title="Refeição" variant="GREEN_LIGHT" />

            <S.MealResumeContentContainer>
              <S.MealResumeContentTopContainer>
                <S.MealResumeTitleContainer>
                  <Text
                    content={meal.name}
                    fontSize="L"
                    fontFamily="BOLD"
                    color="BLACK"
                  />

                  <Text
                    content={meal.description}
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
                    content={`${meal.date} às ${meal.hour}`}
                    fontSize="M"
                    fontFamily="REGULAR"
                    color="GRAY_2"
                  />

                  <MealStatusCard isHealthy={meal.isOnDiet} />
                </S.MealResumeDescriptionContainer>
              </S.MealResumeContentTopContainer>

              <S.MealResumeBottomContainer>
                <Button
                  text="Editar refeição"
                  icon="edit"
                  onPress={handleEditMeal}
                />
                <Button
                  text="Excluir refeição"
                  icon="delete"
                  variant="white"
                  onPress={handleToggleModal}
                />
              </S.MealResumeBottomContainer>
            </S.MealResumeContentContainer>
          </S.MealResumeContainer>
        </>
      )}
    </>
  );
};
