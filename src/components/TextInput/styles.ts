import styled, { css } from "styled-components/native";

export const TextInputContainer = styled.TextInput`
  ${({ theme: { COLORS, FONT_SIZE, FONT_FAMILY } }) => css`
    width: 100%;
    padding: 14px;

    border-width: 1px;
    border-radius: 6px;
    border-color: ${COLORS.GRAY_5};

    color: ${COLORS.GRAY_1};
    font-size: ${FONT_SIZE.M};
    font-family: ${FONT_FAMILY.REGULAR};
  `}
`;
