import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { ButtonDTO } from "./ButtonDTO";

export const ButtonContainer = styled.TouchableOpacity<ButtonDTO>`
  ${({ theme: { COLORS }, width, variant }) => css`
    width: ${width ? `${width}px` : "100%"};
    padding: 14px 24px;

    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;

    background: ${variant === "black" ? COLORS.GRAY_2 : COLORS.GRAY_7};
    border-width: ${variant === "black" ? 0 : "1px"};
    border-color: ${variant === "black" ? "none" : COLORS.GRAY_2};
    border-radius: 6px;
  `}
`;

export const ButtonIcon = styled(MaterialIcons).attrs<ButtonDTO>(
  ({ theme: { COLORS }, variant }) => ({
    color: variant === "black" ? COLORS.WHITE : COLORS.BLACK,
    size: 18,
  })
)``;
