import { Icon } from "@components/Icon";
import { Text } from "@components/Text";
import { HeaderBackDTO } from "./HeaderBackDTO";
import * as S from "./styles";

export const HeaderBack = ({ variant = "GRAY_5" }: HeaderBackDTO) => {
  return (
    <S.HeaderBackContainer variant={variant}>
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
