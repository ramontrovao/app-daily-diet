import styled from "styled-components/native";

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background: ${({ theme: { COLORS } }) => COLORS.GRAY_7};
`;

export const Loading = styled.ActivityIndicator.attrs(
  ({ theme: { COLORS } }) => ({
    color: COLORS.GREEN_DARK,
    size: 55,
  })
)``;
