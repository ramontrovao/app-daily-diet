import { StatusBar } from "expo-status-bar";
import { Routes } from "./src/routes";
import { Theme } from "@theme/default";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  return (
    <ThemeProvider theme={Theme}>
      {fontsLoaded ? <Routes /> : <Loading />}

      <StatusBar style="light" backgroundColor="transparent" translucent />
    </ThemeProvider>
  );
}
