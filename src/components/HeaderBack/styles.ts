import styled from "styled-components/native";
import { HeaderBackDTO } from "./HeaderBackDTO";

export const HeaderBackContainer = styled.View<HeaderBackDTO>`
  width: 100%;
  height: 132px;
  padding: 35px 15px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  background: ${({ theme: { COLORS }, variant }) => COLORS[variant!]};
`;

export const HeaderBackTitleContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
