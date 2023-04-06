import * as S from "./styles";

import { HeaderBack } from "@components/HeaderBack";
import { Text } from "@components/Text";
import { TextInput } from "@components/TextInput";
import { RadioButton } from "@components/RadioButton";
import { Button } from "@components/Button";

import { useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";
import { createMeal } from "@storage/meals/createMeal";

export const CreateEditMeal = () => {
  const { navigate } = useNavigation();
  const [isOnDiet, setIsOnDiet] = useState(true);

  const validationSchema = z.object({
    name: z.string().min(1, { message: "Escreva um nome válido" }),
    description: z.string().min(1, { message: "Escreva uma descrição válida" }),
    date: z
      .string()
      .regex(/^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/, {
        message: "O padrão não corresponde a DD/MM/AAAA",
      }),
    hour: z.string().regex(/^([0-1][0-9]|2[0-3]):[0-5][0-9]$/, {
      message: "O padrão não corresponde ao formato HH:MM",
    }),
  });

  type validationSchemaType = z.infer<typeof validationSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<validationSchemaType>({
    resolver: zodResolver(validationSchema),
  });

  const handleChangeDietOption = () => {
    setIsOnDiet(!isOnDiet);
  };

  const onCreateMeal = async ({
    name,
    description,
    date,
    hour,
  }: validationSchemaType) => {
    try {
      await createMeal({ name, description, date, hour, isOnDiet });
    } catch (error) {
      console.log(error);
    } finally {
      navigate("feedback", { isOnDiet: isOnDiet });
    }
  };

  return (
    <S.CreateMealContainer>
      <HeaderBack title="Nova refeição" />

      <S.CreateMealFormContainerScroll>
        <S.CreateMealFormContainer>
          <S.CreateMealFormFieldsetContainer>
            <Text
              content="Nome"
              color="GRAY_2"
              fontSize="XSM"
              fontFamily="BOLD"
            />

            <TextInput name="name" control={control} />

            {errors.name && (
              <Text
                content={errors.name.message!}
                color="RED_MID"
                fontSize="M"
                fontFamily="REGULAR"
                align="center"
              />
            )}
          </S.CreateMealFormFieldsetContainer>

          <S.CreateMealFormFieldsetContainer>
            <Text
              content="Descrição"
              color="GRAY_2"
              fontSize="XSM"
              fontFamily="BOLD"
            />

            <TextInput
              height={120}
              textAlignVertical="top"
              name="description"
              control={control}
            />
            {errors.description && (
              <Text
                content={errors.description.message!}
                color="RED_MID"
                fontSize="M"
                fontFamily="REGULAR"
                align="center"
              />
            )}
          </S.CreateMealFormFieldsetContainer>

          <S.CreateMealFiedlsetWrapperContainer>
            <S.CreateMealFormFieldsetContainer>
              <Text
                content="Data"
                color="GRAY_2"
                fontSize="XSM"
                fontFamily="BOLD"
              />

              <TextInput width={135} name="date" control={control} />
            </S.CreateMealFormFieldsetContainer>

            <S.CreateMealFormFieldsetContainer>
              <Text
                content="Hora"
                color="GRAY_2"
                fontSize="XSM"
                fontFamily="BOLD"
              />

              <TextInput width={135} name="hour" control={control} />
            </S.CreateMealFormFieldsetContainer>
          </S.CreateMealFiedlsetWrapperContainer>
          {errors.date && (
            <Text
              content={errors.date.message!}
              color="RED_MID"
              fontSize="M"
              fontFamily="REGULAR"
              align="center"
            />
          )}

          {errors.hour && (
            <Text
              content={errors.hour.message!}
              color="RED_MID"
              fontSize="M"
              fontFamily="REGULAR"
              align="center"
            />
          )}

          <S.CreateMealFormFieldsetContainer>
            <Text
              content="Está dentro da dieta?"
              color="GRAY_2"
              fontSize="XSM"
              fontFamily="BOLD"
            />
          </S.CreateMealFormFieldsetContainer>

          <S.CreateMealFiedlsetWrapperContainer style={{ marginBottom: 35 }}>
            <RadioButton
              icon="brightness-1"
              text="Sim"
              variant="green"
              isActive={isOnDiet}
              onPress={handleChangeDietOption}
            />

            <RadioButton
              icon="brightness-1"
              text="Não"
              variant="red"
              isActive={!isOnDiet}
              onPress={handleChangeDietOption}
            />
          </S.CreateMealFiedlsetWrapperContainer>

          <Button
            text="Cadastrar refeição"
            variant="black"
            onPress={handleSubmit(onCreateMeal)}
          />
        </S.CreateMealFormContainer>
      </S.CreateMealFormContainerScroll>
    </S.CreateMealContainer>
  );
};
