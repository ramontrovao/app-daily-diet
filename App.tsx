import { StatusBar } from "expo-status-bar";
import { Routes } from "./src/routes";
import { Theme } from "@theme/default";
import { ThemeProvider } from "styled-components/native";

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Routes />
      <StatusBar style="light" backgroundColor="transparent" translucent />
    </ThemeProvider>
  );
}
