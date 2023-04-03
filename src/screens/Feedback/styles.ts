import styled from "styled-components/native";

export const FeedbackContainer = styled.View`
  padding: 35px 15px;

  flex: 1;
  gap: 20px;
  justify-content: center;
  align-items: center;

  background: ${({ theme: { COLORS } }) => COLORS.GRAY_7};
`;
