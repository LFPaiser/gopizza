import React from "react";
import AppLoading from "expo-app-loading"; // Segura a splash até o app inicializar
import { useFonts, DMSans_400Regular } from "@expo-google-fonts/dm-sans"; //fonte
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display"; //fonte
import { ThemeProvider } from "styled-components/native"; // Tema para  o app

import theme from "./src/theme";

export default function App() {
  // fonte
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular,
  });

  //previne mostrar o app antes de carregar fontes
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <ThemeProvider theme={theme}></ThemeProvider>;
}
