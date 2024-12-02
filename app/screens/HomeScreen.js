import { View, Text,Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View className='flex-1 bg-green-300 w-full flex items-center justify-center'>
      <Text className='text-center text-2xl font-bold'>HomeScreen Area</Text>
      <Button title='Go to About Screen' onPress={() => router.push('/about')} />
    </View>
  )
}