import { Button } from "@components/Button";
import { Text } from "@components/Text";
import * as S from "./styles";

type ConfirmProps = {
  title: string;
  cancelText: string;
  confirmText: string;
};

export const Confirm = ({ title, cancelText, confirmText }: ConfirmProps) => {
  return (
    <S.ConfirmContainer transparent>
      <S.ConfirmBackgroundContainer>
        <S.ConfirmModalContentContainer>
          <Text
            content={title}
            color="BLACK"
            fontSize="XM"
            fontFamily="BOLD"
            align="center"
          />

          <S.ConfirmModalContentWrapperContainer>
            <Button text={cancelText} variant="white" width={115} />

            <Button text={confirmText} variant="black" width={115} />
          </S.ConfirmModalContentWrapperContainer>
        </S.ConfirmModalContentContainer>
      </S.ConfirmBackgroundContainer>
    </S.ConfirmContainer>
  );
};
