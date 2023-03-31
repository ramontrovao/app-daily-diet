import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const MealCardContainer = styled.View`
  width: 100%;
  padding: 14px 16px 14px 12px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background: transparent;
  border-width: 1px;
  border-color: ${({ theme: { COLORS } }) => COLORS.GRAY_5};
  border-radius: 6px;
`;

export const LeftWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const HourText = styled.Text`
  ${({ theme: { COLORS, FONT_SIZE, FONT_FAMILY } }) => css`
    padding-right: 10px;

    border-right-width: 1px;
    border-right-color: ${COLORS.GRAY_5};

    color: ${COLORS.BLACK};
    font-size: ${FONT_SIZE.M};
    font-family: ${FONT_FAMILY.BOLD};
    font-weight: bold;
  `}
`;

type StatusIconStyleProps = {
  variant: "green" | "red";
};

export const StatusIcon = styled(MaterialIcons).attrs<StatusIconStyleProps>(
  ({ theme: { COLORS }, variant }) => ({
    name: "brightness-1",
    color: variant === "green" ? COLORS.GREEN_MID : COLORS.RED_MID,
    size: 14,
  })
)``;
