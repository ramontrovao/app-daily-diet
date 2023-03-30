import * as S from "./styles";
import logo from "@assets/logo.png";
import profile from "@assets/profile.png";

export const HeaderDefault = () => {
  return (
    <S.HeaderDefaultContainer>
      <S.Logo source={logo} />
      <S.ProfileIcon source={profile} />
    </S.HeaderDefaultContainer>
  );
};
