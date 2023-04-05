import * as S from "./styles";

import { Text } from "@components/Text";

import { RadioButtonDTO } from "./RadioButtonDTO";

import { MaterialIcons } from "@expo/vector-icons";

import { TouchableOpacityProps } from "react-native";

type RadioButtonProps = {
  icon: keyof typeof MaterialIcons.glyphMap;
  text: string;
} & RadioButtonDTO &
  TouchableOpacityProps;

export const RadioButton = ({
  icon,
  text,
  isActive = false,
  variant = "green",
  ...rest
}: RadioButtonProps) => {
  return (
    <S.RadioButtonContainer {...rest} variant={variant} isActive={isActive}>
      {icon && (
        <S.RadioButtonIcon name={icon} variant={variant} isActive={isActive} />
      )}
      <Text content={text} color="GRAY_1" fontSize="M" fontFamily="REGULAR" />
    </S.RadioButtonContainer>
  );
};
