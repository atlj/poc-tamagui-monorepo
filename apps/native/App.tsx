import config from "./tamagui.config"
import { TamaguiProvider } from "tamagui";
import { Home } from "./src/Home";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from "react";
import { View, StyleSheet } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function App() {

const [fontsLoaded] = useFonts({
    'Inter': require('./assets/fonts/Inter-Regular.ttf'),
  }); 

const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
  <View onLayout={onLayoutRootView} style={styles.container}>
  <TamaguiProvider  config={config}>
  <Home />
    </TamaguiProvider>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }
  })
