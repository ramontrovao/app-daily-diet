import * as S from "./styles";

import logo from "@assets/logo.png";
import profile from "@assets/profile.png";

export const HeaderProfile = () => {
  return (
    <S.HeaderProfileContainer>
      <S.Logo source={logo} />
      <S.ProfileIcon source={profile} />
    </S.HeaderProfileContainer>
  );
};
