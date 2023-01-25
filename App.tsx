import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import {
  useFonts,
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black,
} from '@expo-google-fonts/lato';
import Home from './src/pages/Home/Index';
import Login from './src/pages/Login/Index';
import Signup from './src/pages/Signup/Index';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastProvider } from 'react-native-toast-notifications';

const Stack = createNativeStackNavigator();
export default function App() {
  const queryClient = new QueryClient();
  let [fontsLoaded] = useFonts({
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black,
  });

  if (!fontsLoaded) {
    return (
      <>
        <Text>loading...</Text>
      </>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider offsetTop={50}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Group>
                <Stack.Screen name="Initial" component={Home} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
              </Stack.Group>
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </ToastProvider>
    </QueryClientProvider>
  );
}
