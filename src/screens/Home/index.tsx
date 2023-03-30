import { Button } from "@components/Button";
import { HeaderDefault } from "@components/HeaderDefault";
import { Percent } from "@components/Percent";
import { Text } from "@components/Text";
import { HomeContainer, MealsContainer } from "./styles";

export const Home = () => {
  return (
    <HomeContainer>
      <HeaderDefault />
      <Percent />

      <MealsContainer>
        <Text
          color="GRAY_1"
          fontSize="M"
          fontFamily="REGULAR"
          content="Refeições"
        />

        <Button icon="add" text="Nova refeição" />
      </MealsContainer>
    </HomeContainer>
  );
};
