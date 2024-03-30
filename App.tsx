
// @jsx: react-jsx
// @jsxFactory: React.createElement

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

import Home from './src/Home';
import Search from './src/Search';

const Tab = createBottomTabNavigator();

const Blank = () => {
  return <View />;
};

const screenOptions = ({ route }: { route: any }) => ({
  tabBarIcon: ({ focused, color, size }: { focused: boolean, color: string, size: number }) => {
    let iconName: any | undefined;

    if (route.name === 'Explore') {
      iconName = 'home';
    } else if (route.name === 'Watchlist') {
      iconName = 'heart';
    } else if (route.name === 'Details') {
      iconName = 'tag';
    } else if (route.name === 'Notifications') {
      iconName = 'bell';
    }
    return iconName ? <FontAwesome name={iconName} size={size} color={color} /> : null;
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={screenOptions}
        tabBarOptions={{
          activeTintColor: '#fb7200',
          inactiveTintColor: '#464962',
        }}
      >
        <Tab.Screen name="Explore" component={Home} />
        <Tab.Screen name="Watchlist" component={Search} />
        <Tab.Screen name="Details" component={Blank} />
        <Tab.Screen name="Notifications" component={Blank} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
