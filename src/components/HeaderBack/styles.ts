import styled from "styled-components/native";

export const HeaderBackContainer = styled.View`
  width: 100%;
  height: 132px;
  padding: 35px 15px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  background: ${({ theme: { COLORS } }) => COLORS.GREEN_LIGHT};
`;

export const HeaderBackTitleContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
