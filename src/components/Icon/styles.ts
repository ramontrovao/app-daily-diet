import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { IconDTO } from "./IconDTO";

export const Icon = styled(MaterialIcons).attrs<IconDTO>(
  ({ theme: { COLORS }, color, name, size }) => ({
    color: COLORS[color],
    name,
    size,
  })
)``;
