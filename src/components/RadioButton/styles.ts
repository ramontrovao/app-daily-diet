import styled, { css } from "styled-components/native";

import { MaterialIcons } from "@expo/vector-icons";
import { RadioButtonDTO } from "./RadioButtonDTO";

export const RadioButtonContainer = styled.TouchableOpacity<RadioButtonDTO>`
  ${({ theme: { COLORS }, variant, isActive }) => css`
    padding: 16px;
    width: 140px;

    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;

    background: ${COLORS.GRAY_6};
    border-radius: 6px;

    ${isActive &&
    css`
      background: ${variant === "green"
        ? COLORS.GREEN_LIGHT
        : COLORS.RED_LIGHT};
      border: ${variant === "green" ? COLORS.GREEN_DARK : COLORS.RED_DARK};
      border-width: 1px;
    `};
  `}
`;

export const RadioButtonIcon = styled(MaterialIcons).attrs<RadioButtonDTO>(
  ({ theme: { COLORS }, variant }) => ({
    color: variant === "green" ? COLORS.GREEN_DARK : COLORS.RED_DARK,
    size: 8,
  })
)``;
