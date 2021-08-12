import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Transaksi from './src/screen/Transaksi';
import DetailTransaksi from './src/screen/DetailTransaksi';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Transaksi"
          component={Transaksi}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DetailTransaksi"
          component={DetailTransaksi}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
