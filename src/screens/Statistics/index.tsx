import * as S from "./styles";

import { HeaderMeal } from "@components/HeaderMeal";
import { Text } from "@components/Text";
import { InfoCard } from "@components/InfoCard";
import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getMealStatistics } from "@storage/meals/getMealStatistics";
import { Loading } from "@components/Loading";

type StatisticsType = {
  mealsRegistered: number;
  mealsOnDietPercentage: number;
  mealsOnDiet: number;
  mealsNotOnDiet: number;
  mealsBestSequence: number;
};

export const Statistics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [statistics, setStatistics] = useState<StatisticsType>(
    {} as StatisticsType
  );

  const fetchStatistics = async () => {
    try {
      setIsLoading(true);
      const mealsStatistic = await getMealStatistics();

      setStatistics(mealsStatistic);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchStatistics();
    }, [])
  );
  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <S.StatisticsContainer>
          <HeaderMeal
            percentage={`${statistics.mealsOnDietPercentage}%`}
            variant={statistics.mealsOnDietPercentage >= 50 ? "green" : "red"}
          />
          <S.StatisticsInformationContainer>
            <Text
              content="Estatísticas gerais"
              fontSize="M"
              color="GRAY_1"
              fontFamily="BOLD"
              fontWeight="bold"
            />

            <InfoCard
              title={`${statistics.mealsBestSequence}`}
              subtitle="melhor sequência de pratos dentro da dieta"
              variant="GRAY_6"
            />

            <InfoCard
              title={`${statistics.mealsRegistered}`}
              subtitle="refeições registradas"
              variant="GRAY_6"
            />

            <S.StatisticsInformationWrapperContainer>
              <InfoCard
                title={`${statistics.mealsOnDiet}`}
                subtitle="refeições dentro da dieta"
                variant="GREEN_LIGHT"
                width={145}
              />
              <InfoCard
                title={`${statistics.mealsNotOnDiet}`}
                subtitle="refeições fora da dieta"
                variant="RED_LIGHT"
                width={145}
              />
            </S.StatisticsInformationWrapperContainer>
          </S.StatisticsInformationContainer>
        </S.StatisticsContainer>
      )}
    </>
  );
};
