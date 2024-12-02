import { View, Text,Button,TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';


export default function AboutScreen() {
  const router = useRouter();
  return (
    <View className='flex-1 bg-green-300 w-full flex items-center justify-center'>
      <Text className='text-center text-2xl font-bold'>HomeScreen Area</Text>
        <TouchableOpacity onPress={() => router.push('/')}>
          <View className='p-2 rounded-md bg-orange-500'>
            <Text className='text-white'>Go to Home Screen</Text>
          </View>
        </TouchableOpacity>
    </View>
  )
}