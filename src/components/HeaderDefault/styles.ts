import styled from "styled-components/native";

export const HeaderDefaultContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  padding: 20px;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const ProfileIcon = styled.Image`
  width: 40px;
  height: 40px;

  border: 3px solid ${({ theme: { COLORS } }) => COLORS.BLACK};
  border-radius: 999px;
`;
