// app/_layout.js
import { Stack } from 'expo-router';
import "../global.css"

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home Screen' }} />
      <Stack.Screen name="about" options={{ title: 'About Screen' }} />
    </Stack>
  );
}
