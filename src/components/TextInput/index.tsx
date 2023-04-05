import * as S from "./styles";

import { TextInputDTO } from "./TextInputDTO";

type TextInputProps = TextInputDTO & {
  textAlignVertical?: "top" | "center" | "bottom";
};

export const TextInput = ({
  width,
  height,
  textAlignVertical = "center",
}: TextInputProps) => {
  return (
    <S.TextInputContainer
      width={width}
      height={height}
      multiline
      textAlignVertical={textAlignVertical}
    ></S.TextInputContainer>
  );
};
