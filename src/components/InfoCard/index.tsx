import * as S from "./styles";
import { InfoCardDTO } from "./InfoCardDTO";
import { Text } from "@components/Text";

type InfoCardProps = InfoCardDTO & { title: string; subtitle: string };

export const InfoCard = ({ title, subtitle, variant }: InfoCardProps) => {
  return (
    <S.InfoCardContainer variant={variant}>
      <Text
        content={title}
        color="BLACK"
        fontSize="L"
        fontFamily="BOLD"
        fontWeight="bold"
      />

      <Text
        content={subtitle}
        color="GRAY_2"
        fontSize="M"
        fontFamily="REGULAR"
      />
    </S.InfoCardContainer>
  );
};
