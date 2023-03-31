import styled from "styled-components/native";

export const HeaderProfileContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  padding: 35px 0;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const ProfileIcon = styled.Image`
  width: 40px;
  height: 40px;

  border-width: 3px;
  border-color: ${({ theme: { COLORS } }) => COLORS.BLACK};
  border-radius: 999px;
`;
