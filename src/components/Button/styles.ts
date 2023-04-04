import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { ButtonDTO } from "./ButtonDTO";

export const ButtonContainer = styled.TouchableOpacity<ButtonDTO>`
  width: 100%;
  padding: 16px 24px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;

  background: ${({ theme: { COLORS }, variant }) =>
    variant === "black" ? COLORS.GRAY_2 : COLORS.GRAY_7};
  border-width: ${({ variant }) => (variant === "black" ? 0 : "1px")};
  border-color: ${({ theme: { COLORS }, variant }) =>
    variant === "black" ? "none" : COLORS.GRAY_2};
  border-radius: 6px;
`;

export const ButtonIcon = styled(MaterialIcons).attrs<ButtonDTO>(
  ({ theme: { COLORS }, variant }) => ({
    color: variant === "black" ? COLORS.WHITE : COLORS.BLACK,
    size: 18,
  })
)``;
