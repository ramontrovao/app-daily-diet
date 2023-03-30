import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as S from "./styles";

type ButtonProps = {
  icon?: keyof typeof MaterialIcons.glyphMap;
  text: string;
  variant?: "black";
} & TouchableOpacityProps;

export const Button = ({
  icon,
  text,
  variant = "black",
  ...rest
}: ButtonProps) => {
  return (
    <S.ButtonContainer {...rest} variant={variant}>
      {icon && <S.ButtonIcon name={icon} />}
      <S.ButtonText>{text}</S.ButtonText>
    </S.ButtonContainer>
  );
};
