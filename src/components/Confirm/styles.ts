import styled from "styled-components/native";

export const ConfirmContainer = styled.Modal``;

export const ConfirmBackgroundContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.4);
`;

export const ConfirmModalContentContainer = styled.View`
  width: 90%;
  padding: 32px;

  gap: 25px;

  background-color: ${({ theme: { COLORS } }) => COLORS.GRAY_7};
  border-radius: 8px;
`;

export const ConfirmModalContentWrapperContainer = styled.View`
  flex-direction: row;
  gap: 10px;
`;
