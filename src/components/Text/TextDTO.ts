import { TextProps } from "react-native";
import { useTheme } from "styled-components/native";

const { COLORS, FONT_SIZE, FONT_FAMILY } = useTheme();

export type TextDTO = {
  color: keyof typeof COLORS;
  fontSize: keyof typeof FONT_SIZE;
  fontFamily: keyof typeof FONT_FAMILY;
  paddingRight?: number;
  align?: "left" | "center" | "right";
  fontWeight?: number | "bold";
} & TextProps;
