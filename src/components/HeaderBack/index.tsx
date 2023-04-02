import { Icon } from "@components/Icon";
import { Text } from "@components/Text";
import * as S from "./styles";

export const HeaderBack = () => {
  return (
    <S.HeaderBackContainer>
      <Icon color="GRAY_2" name="arrow-back" size={28} />

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
