import { IconDTO } from "./IconDTO";
import * as S from "./styles";

export const Icon = ({ color, name, size }: IconDTO) => {
  return <S.Icon color={color} name={name} size={size} />;
};
