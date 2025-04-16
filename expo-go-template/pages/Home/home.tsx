import { Text, View } from "react-native";
import { homeStyles } from "./home.styles";

export function Home() {
  return (
    <View style={homeStyles.container} >
      <Text style={homeStyles.header}>Expo Go</Text>
      <Text style={homeStyles.subtitle}>Template Project</Text>
    </View>

  )
}
