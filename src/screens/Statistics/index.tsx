import * as S from "./styles";

import { HeaderMeal } from "@components/HeaderMeal";
import { Text } from "@components/Text";
import { InfoCard } from "@components/InfoCard";
import { useState } from "react";

type StatisticsType = {};

export const Statistics = () => {
  const [statistics, setStatistics] = useState({});

  useEff;
  return (
    <S.StatisticsContainer>
      <HeaderMeal />
      <S.StatisticsInformationContainer>
        <Text
          content="Estatísticas gerais"
          fontSize="M"
          color="GRAY_1"
          fontFamily="BOLD"
          fontWeight="bold"
        />

        <InfoCard
          title="4"
          subtitle="melhor sequência de pratos dentro da dieta"
          variant="GRAY_6"
        />

        <InfoCard
          title="109"
          subtitle="refeições registradas"
          variant="GRAY_6"
        />

        <S.StatisticsInformationWrapperContainer>
          <InfoCard
            title="32"
            subtitle="refeições dentro da dieta"
            variant="GREEN_LIGHT"
            width={145}
          />
          <InfoCard
            title="77"
            subtitle="refeições fora da dieta"
            variant="RED_LIGHT"
            width={145}
          />
        </S.StatisticsInformationWrapperContainer>
      </S.StatisticsInformationContainer>
    </S.StatisticsContainer>
  );
};
