import { MaterialIcons } from "@expo/vector-icons";

import { useTheme } from "styled-components";

const { COLORS } = useTheme();

export type IconDTO = {
  color: keyof typeof COLORS;
  name: keyof typeof MaterialIcons.glyphMap;
  size: number;
};
