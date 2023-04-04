import { MaterialIcons } from "@expo/vector-icons";

export type ButtonDTO = {
  icon?: keyof typeof MaterialIcons.glyphMap;
  variant?: "black" | "white";
};
