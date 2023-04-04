import styled from "styled-components/native";

export const MealResumeContainer = styled.View`
  flex: 1;
`;

export const MealResumeContentContainer = styled.View`
  margin-top: -30px;
  padding: 35px 15px;

  flex: 1;
  gap: 20px;

  background: ${({ theme: { COLORS } }) => COLORS.GRAY_7};
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
`;
