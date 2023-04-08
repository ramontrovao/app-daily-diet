import * as S from "./styles";

import { TextInputDTO } from "./TextInputDTO";

import { TextInputProps as TextInputType } from "react-native";

import { useController } from "react-hook-form";
import { Control } from "react-hook-form/dist/types";

type TextInputProps = {
  name: string;
  control: Control<any, any>;
  textAlignVertical?: "top" | "center" | "bottom";
} & TextInputDTO &
  TextInputType;

export const TextInput = ({
  width,
  height,
  textAlignVertical = "center",
  name,
  control,
  ...rest
}: TextInputProps) => {
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });

  return (
    <S.TextInputContainer
      width={width}
      height={height}
      multiline
      textAlignVertical={textAlignVertical}
      value={field.value}
      onChangeText={field.onChange}
      selectionColor="#639339"
      {...rest}
    />
  );
};
