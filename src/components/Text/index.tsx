import { TextDTO } from "./TextDTO";
import * as S from "./styles";

type TextProps = TextDTO & { content: string };

export const Text = ({
  color,
  fontFamily,
  fontSize,
  fontWeight,
  content,
  ...rest
}: TextProps) => {
  return (
    <S.Text
      color={color}
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      {...rest}
    >
      {content}
    </S.Text>
  );
};
