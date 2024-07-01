// app/_layout.js
import React from 'react';
import { Stack } from 'expo-router';
import "../global.css"

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="about" options={{ title: 'About' }} />
    </Stack>
  );
}
