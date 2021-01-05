import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
//screens
import HomeScreen from '../screens/HomeScreen'
import DetailScreen from '../screens/DetailScreen'
import ProfileScreen from '../screens/ProfileScreen'
import FlatListScreen from '../screens/FlatlistScreen'
import FlatListDetailScreen from '../screens/FlatListDetailScreen'
import ButtonScreen from '../screens/ButtonScreen'

const Stack = createStackNavigator()

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="FlatList" component={FlatListScreen} />
        <Stack.Screen name="FlatListDetail" component={FlatListDetailScreen} />
        <Stack.Screen name="Button" component={ButtonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Navigator;