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

export const CreateMeal = () => {
  const { navigate } = useNavigation();
  const [dietOptionActive, setDietOptionActive] = useState("Sim");

  const validationSchema = z.object({
    name: z.string().min(1),
    description: z.string().min(1),
    date: z.string().min(1),
    hour: z.string().min(1),
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
    setDietOptionActive(dietOptionActive === "Sim" ? "Não" : "Sim");
  };

  const onCreateMeal = async (data: validationSchemaType) => {
    console.log(data);
    console.log(errors);

    navigate("feedback");
  };

  return (
    <S.CreateMealContainer>
      <HeaderBack title="Nova refeição" />

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
            {errors.date && (
              <Text
                content={errors.date.message!}
                color="RED_MID"
                fontSize="M"
                fontFamily="REGULAR"
              />
            )}
          </S.CreateMealFormFieldsetContainer>

          <S.CreateMealFormFieldsetContainer>
            <Text
              content="Hora"
              color="GRAY_2"
              fontSize="XSM"
              fontFamily="BOLD"
            />

            <TextInput width={135} name="hour" control={control} />
            {errors.hour && (
              <Text
                content={errors.hour.message!}
                color="RED_MID"
                fontSize="M"
                fontFamily="REGULAR"
              />
            )}
          </S.CreateMealFormFieldsetContainer>
        </S.CreateMealFiedlsetWrapperContainer>

        <S.CreateMealFormFieldsetContainer>
          <Text
            content="Está dentro da dieta?"
            color="GRAY_2"
            fontSize="XSM"
            fontFamily="BOLD"
          />
        </S.CreateMealFormFieldsetContainer>

        <S.CreateMealFiedlsetWrapperContainer>
          <RadioButton
            icon="brightness-1"
            text="Sim"
            variant="green"
            isActive={dietOptionActive === "Sim"}
            onPress={handleChangeDietOption}
          />

          <RadioButton
            icon="brightness-1"
            text="Não"
            variant="red"
            isActive={dietOptionActive === "Não"}
            onPress={handleChangeDietOption}
          />
        </S.CreateMealFiedlsetWrapperContainer>

        <Button
          text="Cadastrar refeição"
          variant="black"
          onPress={handleSubmit(onCreateMeal)}
        />
      </S.CreateMealFormContainer>
    </S.CreateMealContainer>
  );
};
