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

export const MealResumeContentTopContainer = styled.View`
  flex: 1;
`;

export const MealResumeTitleContainer = styled.View`
  gap: 12px;
  margin-bottom: 18px;
`;

export const MealResumeDescriptionContainer = styled.View`
  gap: 8px;
`;

export const MealResumeBottomContainer = styled.View`
  gap: 8px;
`;
