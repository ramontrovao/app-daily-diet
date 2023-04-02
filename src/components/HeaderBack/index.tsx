import * as S from "./styles";

import { HeaderBackDTO } from "./HeaderBackDTO";

import { Icon } from "@components/Icon";
import { Text } from "@components/Text";
import { useNavigation } from "@react-navigation/native";

export const HeaderBack = ({ variant = "GRAY_5" }: HeaderBackDTO) => {
  const { goBack } = useNavigation();

  const handleGoBack = () => {
    goBack();
  };

  return (
    <S.HeaderBackContainer variant={variant}>
      <S.BackButton onPress={handleGoBack}>
        <Icon color="GRAY_2" name="arrow-back" size={28} />
      </S.BackButton>

      <S.HeaderBackTitleContainer>
        <Text
          content="Nova refeição"
          color="GRAY_2"
          fontSize="L"
          fontFamily="BOLD"
        />
      </S.HeaderBackTitleContainer>
    </S.HeaderBackContainer>
  );
};
