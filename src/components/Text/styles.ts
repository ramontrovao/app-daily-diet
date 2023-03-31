import styled, { css } from "styled-components/native";
import { TextDTO } from "./TextDTO";

export const Text = styled.Text<TextDTO>`
  ${({
    color,
    fontSize,
    fontFamily,
    fontWeight,
    paddingRight,
    theme: { COLORS, FONT_SIZE, FONT_FAMILY },
  }) => css`
    color: ${COLORS[color]};
    font-size: ${FONT_SIZE[fontSize]};
    font-family: ${FONT_FAMILY[fontFamily]};
    font-weight: ${fontWeight ? fontWeight : 400};
    padding-right: ${paddingRight}px;
    text-align: center;
  `}
`;
