import styled, { css } from "styled-components/native";

type PercentContainerProps = {
  variant: "positive" | "negative";
};

export const PercentContainer = styled.View<PercentContainerProps>`
  ${({ theme: { COLORS }, variant }) => css`
    width: 100%;
    padding: 16px 20px;

    justify-content: center;
    align-items: center;
    gap: 5px;

    background: ${variant === "positive"
      ? COLORS.GREEN_LIGHT
      : COLORS.RED_LIGHT};
    border-radius: 8px;
  `}
`;

export const PercentTitle = styled.Text`
  ${({ theme: { COLORS, FONT_SIZE, FONT_FAMILY } }) => css`
    font-size: ${FONT_SIZE.XL};
    font-family: ${FONT_FAMILY.BOLD};
    font-weight: bold;
    color: ${COLORS.BLACK};
  `}
`;

export const PercentSubtitle = styled.Text`
  ${({ theme: { COLORS, FONT_SIZE, FONT_FAMILY } }) => css`
    font-size: ${FONT_SIZE.XSM};
    font-family: ${FONT_FAMILY.BOLD};
    color: ${COLORS.GRAY_3};
  `}
`;
