import styled from "styled-components/native";
import { HeaderMealDTO } from "./HeaderMealDTO";

export const HeaderMealContainer = styled.View<HeaderMealDTO>`
  width: 100%;
  height: 200px;
  padding: 35px 15px;

  background: ${({ theme: { COLORS }, variant }) =>
    variant === "green" ? COLORS.GREEN_MID : COLORS.RED_MID};
`;

export const ArrowContainer = styled.View`
  align-items: flex-start;
  justify-content: center;
`;

export const ArrowButton = styled.TouchableOpacity``;

export const MealTitleContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
