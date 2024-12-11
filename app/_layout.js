// app/_layout.js
import { Stack } from 'expo-router';
import "../global.css"

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Splash Screen', headerShown: false }}  />
      <Stack.Screen name="register" options={{ title: 'Registration Screen', headerShown: false }} />
      <Stack.Screen name='login' options={{ title: 'Login Screen', headerShown: false }} />
      <Stack.Screen name='dashboard' options={{ title: 'Dashboard Screen', headerShown: false }} />
    </Stack>
  );
}
