import styled from "styled-components/native";

export const CreateMealContainer = styled.SafeAreaView`
  flex: 1;
`;

export const CreateMealFormContainer = styled.View`
  margin-top: -18px;
  padding: 35px 15px;

  flex: 1;
  gap: 25px;

  background: ${({ theme: { COLORS } }) => COLORS.GRAY_7};
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
`;

export const CreateMealFormFieldsetContainer = styled.View`
  width: 100%;
  gap: 5px;
`;

export const CreateMealFiedlsetWrapperContainer = styled.View`
  width: 100%;
  flex-direction: row;

  gap: 25px;
`;
