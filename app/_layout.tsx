import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* L'ordre ici définit la priorité au démarrage */}
      <Stack.Screen name="login" options={{ title: "Connexion" }} />
      <Stack.Screen name="index" options={{ title: "Accueil" }} />
      <Stack.Screen name="scan" options={{ title: "Scanner" }} />
      <Stack.Screen name="confirm" options={{ title: "Validation" }} />
    </Stack>
  );
}
