import styled from "styled-components/native";

export const HomeContainerScroll = styled.ScrollView`
  flex: 1;
`;

export const HomeContainer = styled.View`
  padding: 35px 15px;

  flex: 1;
  min-height: 700px;

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
