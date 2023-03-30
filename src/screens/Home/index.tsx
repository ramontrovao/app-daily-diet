import { HeaderDefault } from "@components/HeaderDefault";
import { Percent } from "@components/Percent";
import { HomeContainer } from "./styles";

export const Home = () => {
  return (
    <HomeContainer>
      <HeaderDefault />

      <Percent />
    </HomeContainer>
  );
};
