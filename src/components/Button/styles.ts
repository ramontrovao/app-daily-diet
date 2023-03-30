import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

type ButtonContainerStyleProps = {
  variant: "black";
};

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerStyleProps>`
  width: 100%;
  padding: 16px 24px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;

  background: ${({ theme: { COLORS }, variant }) =>
    variant === "black" && COLORS.GRAY_2};
  border-radius: 6px;
`;

export const ButtonText = styled.Text`
  ${({ theme: { COLORS, FONT_FAMILY, FONT_SIZE } }) => css`
    color: ${COLORS.WHITE};
    font-size: ${FONT_SIZE.M};
    font-family: ${FONT_FAMILY.REGULAR};
  `}
`;

export const ButtonIcon = styled(MaterialIcons).attrs(
  ({ theme: { COLORS } }) => ({
    color: COLORS.WHITE,
    size: 18,
  })
)``;
