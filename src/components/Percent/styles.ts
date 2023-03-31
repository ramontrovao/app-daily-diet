import styled, { css } from "styled-components/native";

type PercentContainerProps = {
  variant: "positive" | "negative";
};

export const PercentContainer = styled.TouchableOpacity<PercentContainerProps>`
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
