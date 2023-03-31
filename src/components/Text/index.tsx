import { TextDTO } from "./TextDTO";
import * as S from "./styles";

type TextProps = TextDTO & { content: string };

export const Text = ({
  color,
  fontFamily,
  fontSize,
  fontWeight,
  paddingRight = 0,
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
      {...rest}
    >
      {content}
    </S.Text>
  );
};
