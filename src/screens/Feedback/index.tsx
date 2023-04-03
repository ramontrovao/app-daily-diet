import * as S from "./styles";

import { Image } from "react-native";

import success from "@assets/success.png";
import defeat from "@assets/defeat.png";

import { Text } from "@components/Text";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

type FeedbackProps = {
  isSuccess: boolean;
};

export const Feedback = () => {
  const { navigate } = useNavigation();

  const handleNavigateToHome = () => {
    navigate("home");
  };

  return (
    <S.FeedbackContainer>
      <Text
        content="Que pena!"
        color="RED_DARK"
        fontSize="XL"
        fontFamily="BOLD"
      />

      <Text
        content="Você saiu da dieta dessa vez, mas continue se esforçando e não desista!"
        color="GRAY_1"
        fontSize="M"
        fontFamily="REGULAR"
        align="center"
      />

      <Image source={defeat} />

      <Button
        text="Ir para a página inicial"
        variant="black"
        onPress={handleNavigateToHome}
      />
    </S.FeedbackContainer>
  );
};
