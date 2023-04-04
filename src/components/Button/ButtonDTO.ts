import { MaterialIcons } from "@expo/vector-icons";

export type ButtonDTO = {
  width?: number;
  icon?: keyof typeof MaterialIcons.glyphMap;
  variant?: "black" | "white";
};
