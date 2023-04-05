import * as S from "./styles";

import { IconDTO } from "./IconDTO";

export const Icon = ({ color, name, size }: IconDTO) => {
  return <S.Icon color={color} name={name} size={size} />;
};
