import styled from "styled-components/native";
import { InfoCardDTO } from "./InfoCardDTO";

export const InfoCardContainer = styled.View<InfoCardDTO>`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  padding: 16px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme: { COLORS }, variant }) => COLORS[variant]};
  border-radius: 8px;
`;
