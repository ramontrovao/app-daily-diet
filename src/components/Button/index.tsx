import * as S from "./styles";

import { Text } from "@components/Text";

import { ButtonDTO } from "./ButtonDTO";

import { TouchableOpacityProps } from "react-native";

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
