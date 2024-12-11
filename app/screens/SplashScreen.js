import { View, Image, Text, Button, ActivityIndicator } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import home_logo from '../../assets/images/icons/home.jpg'
import { LinearGradient } from 'expo-linear-gradient';

export default function SplashScreen() {
  const router = useRouter();
  
  const [loading, setLoading] = React.useState(true);
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View className='flex bg-white flex-1 w-full'>
      <LinearGradient 
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <View className='flex gap-5 items-center justify-center bg-white rounded-lg shadow-lg p-5'>
          <Image 
            source={home_logo} 
            style={{ width: 200, height: 200 }}
            resizeMode="contain"
          />
          <Text className='text-2xl font-bold text-center'>Welcome to TODs</Text>
          <Text className='text-center text-sm text-gray-600 mt-2'>
            Your journey to getting things done starts here!
          </Text>
          
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <Button title='Get Started' className='w-full bg-sky-500 hover:cursor-pointer' onPress={() => router.push('/register')} />
          )}
        </View>
      </LinearGradient>
    </View>
  )
}