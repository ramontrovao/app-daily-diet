import * as S from "./styles";

import { Image } from "react-native";

import success from "@assets/success.png";
import defeat from "@assets/defeat.png";

import { Text } from "@components/Text";
import { Button } from "@components/Button";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

interface FeedbackScreenParams {
  isOnDiet: boolean;
}

export const Feedback = () => {
  const {
    params: { isOnDiet },
  } = useRoute<RouteProp<Record<string, FeedbackScreenParams>>>();
  const { navigate } = useNavigation();

  const handleNavigateToHome = () => {
    navigate("home");
  };

  return (
    <S.FeedbackContainer>
      <Text
        content={isOnDiet ? "Continue assim!" : "Que pena!"}
        color={isOnDiet ? "GREEN_DARK" : "RED_DARK"}
        fontSize="XL"
        fontFamily="BOLD"
      />

      <Text
        content={
          isOnDiet
            ? "Você continua dentro da dieta. Muito bem!"
            : "Você saiu da dieta dessa vez, mas continue se esforçando e não desista!"
        }
        color="GRAY_1"
        fontSize="M"
        fontFamily="REGULAR"
        align="center"
      />

      <Image source={isOnDiet ? success : defeat} />

      <Button
        text="Ir para a página inicial"
        variant="black"
        onPress={handleNavigateToHome}
      />
    </S.FeedbackContainer>
  );
};
