import * as S from "./styles";

import { TouchableOpacityProps } from "react-native";

import { ButtonDTO } from "./ButtonDTO";

import { Text } from "@components/Text";

type ButtonProps = {
  text: string;
} & ButtonDTO &
  TouchableOpacityProps;

export const Button = ({
  icon,
  text,
  width,
  variant = "black",
  ...rest
}: ButtonProps) => {
  return (
    <S.ButtonContainer {...rest} variant={variant} width={width}>
      {icon && <S.ButtonIcon name={icon} variant={variant} />}
      <Text
        content={text}
        color={variant === "black" ? "WHITE" : "BLACK"}
        fontSize="M"
        fontFamily="REGULAR"
      />
    </S.ButtonContainer>
  );
};
