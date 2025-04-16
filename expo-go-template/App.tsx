import { SafeAreaView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { appStyles } from "./app.styles";
import { Home } from "./pages/Home/home";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={appStyles.root}>
        <Home />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

