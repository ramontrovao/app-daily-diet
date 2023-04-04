import styled from "styled-components/native";

export const MealStatusCardContainer = styled.View`
  width: 150px;
  height: 34px;
  padding: 8px 16px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;

  border-radius: 999px;
  background: ${({ theme: { COLORS } }) => COLORS.GRAY_6};
`;
