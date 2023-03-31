import styled from "styled-components/native";

export const StatisticsContainer = styled.SafeAreaView`
  flex: 1;
`;

export const StatisticsInformationContainer = styled.View`
  margin-top: -18px;
  padding: 35px 15px;

  flex: 1;
  align-items: center;
  gap: 20px;

  background: ${({ theme: { COLORS } }) => COLORS.GRAY_7};
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
`;

export const StatisticsInformationWrapperContainer = styled.View`
  flex-direction: row;
  gap: 5px;
`;
