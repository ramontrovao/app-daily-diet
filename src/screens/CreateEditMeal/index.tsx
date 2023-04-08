import * as S from "./styles";

import { HeaderBack } from "@components/HeaderBack";
import { Text } from "@components/Text";
import { TextInput } from "@components/TextInput";
import { RadioButton } from "@components/RadioButton";
import { Button } from "@components/Button";

import { useCallback, useEffect, useState } from "react";

import {
  RouteProp,
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";
import { createMeal } from "@storage/meals/createMeal";
import { MealDTO } from "@storage/meals/MealDTO";
import { getMealById } from "@storage/meals/getMealById";
import { Loading } from "@components/Loading";
import { updateMeal } from "@storage/meals/updateMeal";
import { AppException } from "@utils/AppException";
import { Alert } from "react-native/Libraries/Alert/Alert";

interface CreateEditMealScreenParams {
  id?: string;
}

export const CreateEditMeal = () => {
  const { params } =
    useRoute<RouteProp<Record<string, CreateEditMealScreenParams>>>();
  const { navigate } = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [isOnDiet, setIsOnDiet] = useState(true);

  const fetchMeal = async () => {
    try {
      setIsLoading(true);
      const meal = await getMealById(params.id!);

      setIsOnDiet(meal!.isOnDiet);
      setValue("name", meal!.name);
      setValue("description", meal!.description);
      setValue("date", meal!.date);
      setValue("hour", meal!.hour);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeDietOption = () => {
    setIsOnDiet(!isOnDiet);
  };

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
    setValue,
    formState: { errors },
  } = useForm<validationSchemaType>({
    resolver: zodResolver(validationSchema),
  });

  const onCreateMeal = async ({
    name,
    description,
    date,
    hour,
  }: validationSchemaType) => {
    try {
      await createMeal({ name, description, date, hour, isOnDiet });

      navigate("feedback", { isOnDiet: isOnDiet });
    } catch (error) {
      if (error instanceof AppException) {
        return Alert.alert("ERRO", error.message);
      }

      Alert.alert("ERRO", "Ocorreu um erro inesperado! :(");
      console.log(error);
    }
  };

  const onEditMeal = async (data: validationSchemaType) => {
    try {
      await updateMeal(params.id!, { ...data, isOnDiet });
    } catch (error) {
      if (error instanceof AppException) {
        return Alert.alert("ERRO", error.message);
      }

      Alert.alert("ERRO", "Ocorreu um erro inesperado! :(");
      console.log(error);
    } finally {
      navigate("meal-resume", { id: params.id! });
    }
  };

  useFocusEffect(
    useCallback(() => {
      params.id ? fetchMeal() : setIsLoading(false);
    }, [])
  );

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <S.CreateMealContainer>
          <HeaderBack title="Nova refeição" />

          <S.CreateMealFormContainerScroll>
            <S.CreateMealFormContainer>
              <S.CreateMealFormFieldsetContainer>
                <Text
                  content="Nome"
                  color="GRAY_2"
                  fontSize="M"
                  fontFamily="BOLD"
                />

                <TextInput name="name" control={control} />

                {errors.name && (
                  <Text
                    content={errors.name.message!}
                    color="RED_DARK"
                    fontSize="M"
                    fontFamily="REGULAR"
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
                    color="RED_DARK"
                    fontSize="M"
                    fontFamily="REGULAR"
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
                  color="RED_DARK"
                  fontSize="XSM"
                  fontFamily="REGULAR"
                />
              )}

              {errors.hour && (
                <Text
                  content={errors.hour.message!}
                  color="RED_DARK"
                  fontSize="XSM"
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

              <S.CreateMealFiedlsetWrapperContainer
                style={{ marginBottom: 35 }}
              >
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
                text={params.id ? "Salvar alterações" : "Cadastrar Refeição"}
                variant="black"
                onPress={handleSubmit(params.id ? onEditMeal : onCreateMeal)}
              />
            </S.CreateMealFormContainer>
          </S.CreateMealFormContainerScroll>
        </S.CreateMealContainer>
      )}
    </>
  );
};
