import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import NavigatorStack from './src/navigator/NavigatorStack';

const App = () => {
  return (
    <NavigationContainer>
      <NavigatorStack />
    </NavigationContainer>
  )
}

export default App;
