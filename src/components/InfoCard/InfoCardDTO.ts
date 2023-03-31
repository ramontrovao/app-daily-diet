import { useTheme } from "styled-components/native";

const { COLORS } = useTheme();

export type InfoCardDTO = {
  variant: keyof typeof COLORS;
};
