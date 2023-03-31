import styled from "styled-components/native";

export const HomeContainer = styled.ScrollView`
  padding: 35px 15px;

  flex: 1;

  background: ${({ theme: { COLORS } }) => COLORS.GRAY_7};
`;

export const MealsContainer = styled.View`
  margin-top: 25px;
  gap: 15px;
`;

export const DailyContainer = styled.View`
  margin-top: 50px;
  gap: 20px;
`;
