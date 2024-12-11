import { View, Text, Button, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';

import register_icon from '../../assets/images/icons/register.png'; // Ensure this path is correct

export default function RegistrationScreen() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Add your registration logic here
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
    // Navigate to the next screen after registration
  };

  return (
    <ImageBackground
      source={register_icon}
      style={{ flex: 1, resizeMode: 'cover', alignItems: 'center', justifyContent: 'flex-start' }}
    >
      <View className="flex-1 gap-5 w-full bg-white items-center justify-center p-5 opacity-90 mt-10 rounded-xl">
        <Text className="text-center text-2xl font-bold">Welcome to Onboard</Text>
        <Text className="text-xl text-center mb-4">Let's help to meet up your tasks.</Text>
        <View className="w-full flex gap-3">
          <TextInput
            className="border border-gray-300 rounded-full p-2 mb-4"
            placeholder="Enter your full name"
            value={fullName}
            onChangeText={setFullName}
            keyboardType="default"
            autoCapitalize="words"
          />
          <TextInput
            className="border border-gray-300 rounded-full p-2 mb-4"
            placeholder="Enter Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            className="border border-gray-300 rounded-full p-2 mb-4"
            placeholder="Enter Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <TextInput
            className="border border-gray-300 rounded-full p-2 mb-4"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={true}
          />
          <Button title="Register" onPress={handleRegister} />
        </View>
        <Text className="mt-4">Already have an account?</Text>
        <TouchableOpacity onPress={() => router.push('/login')} className="mt-2">
          <Text className="text-blue-500 text-center">Sign in</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
