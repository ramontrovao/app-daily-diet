import * as S from "./styles";

import { Text } from "@components/Text";

import { InfoCardDTO } from "./InfoCardDTO";

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
        align="center"
      />

      <Text
        content={subtitle}
        color="GRAY_2"
        fontSize="M"
        fontFamily="REGULAR"
        align="center"
      />
    </S.InfoCardContainer>
  );
};
