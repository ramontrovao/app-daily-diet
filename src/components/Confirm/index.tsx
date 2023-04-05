import * as S from "./styles";

import { Button } from "@components/Button";
import { Text } from "@components/Text";
import { ModalProps } from "react-native";

type ConfirmProps = {
  title: string;
  cancelText: string;
  confirmText: string;

  onCancel: () => void;
  onConfirm: () => void;
} & ModalProps;

export const Confirm = ({
  title,
  cancelText,
  confirmText,
  onCancel,
  onConfirm,
  ...rest
}: ConfirmProps) => {
  return (
    <S.ConfirmContainer transparent={true} animationType="fade" {...rest}>
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
            <Button
              text={cancelText}
              variant="white"
              width={115}
              onPress={onCancel}
            />

            <Button
              text={confirmText}
              variant="black"
              width={110}
              onPress={onConfirm}
            />
          </S.ConfirmModalContentWrapperContainer>
        </S.ConfirmModalContentContainer>
      </S.ConfirmBackgroundContainer>
    </S.ConfirmContainer>
  );
};
