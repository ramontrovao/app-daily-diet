import styled, { css } from "styled-components/native";
import { TextInputDTO } from "./TextInputDTO";

export const TextInputContainer = styled.TextInput<TextInputDTO>`
  ${({ theme: { COLORS, FONT_SIZE, FONT_FAMILY }, width, height }) => css`
    width: ${width ? `${width}px` : "100%"};
    height: ${height ? `${height}px` : "auto"};
    padding: 14px;

    border-width: 1px;
    border-radius: 6px;
    border-color: ${COLORS.GRAY_5};

    color: ${COLORS.GRAY_1};
    font-size: ${FONT_SIZE.M};
    font-family: ${FONT_FAMILY.REGULAR};
  `}
`;
