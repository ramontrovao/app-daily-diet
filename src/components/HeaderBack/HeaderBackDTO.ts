import { useTheme } from "styled-components/native";

const { COLORS } = useTheme();

export type HeaderBackDTO = {
  variant?: keyof typeof COLORS;
};
