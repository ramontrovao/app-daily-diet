import * as S from "./styles";

import { TextDTO } from "./TextDTO";

type TextProps = TextDTO & { content: string };

export const Text = ({
  color,
  fontFamily,
  fontSize,
  fontWeight,
  paddingRight = 0,
  align = "left",
  content,
  ...rest
}: TextProps) => {
  return (
    <S.Text
      color={color}
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      paddingRight={paddingRight}
      align={align}
      {...rest}
    >
      {content}
    </S.Text>
  );
};
