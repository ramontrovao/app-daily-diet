import styled from "styled-components/native";
import { InfoCardDTO } from "./InfoCardDTO";

export const InfoCardContainer = styled.View<InfoCardDTO>`
  width: 100%;

  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { COLORS }, variant }) => COLORS[variant]};
`;
