import styled from "styled-components/native";

export const EditMealContainer = styled.SafeAreaView`
  flex: 1;
`;

export const EditMealFormContainer = styled.View`
  margin-top: -30px;
  padding: 35px 15px;

  flex: 1;
  gap: 20px;

  background: ${({ theme: { COLORS } }) => COLORS.GRAY_7};
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
`;

export const EditMealFormFieldsetContainer = styled.View`
  gap: 5px;
`;

export const EditMealFiedlsetWrapperContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;

  gap: 10px;
`;
