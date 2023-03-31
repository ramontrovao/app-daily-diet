import * as S from "./styles";
import { InfoCardDTO } from "./InfoCardDTO";
import { Text } from "@components/Text";

type InfoCardProps = InfoCardDTO & { title: string; subtitle: string };

export const InfoCard = ({
  title,
  subtitle,
  variant,
  width,
}: InfoCardProps) => {
  return (
    <S.InfoCardContainer variant={variant} width={width}>
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
