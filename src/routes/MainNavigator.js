import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'

import ProductListScreen from '../screens/product/ProductListScreen'
import ProductDetailScreen from '../screens/product/ProductDetailScreen'

import CartScreen from '../screens/cart/CartScreen'

import OrderListScreen from '../screens/order/OrderListScreen'
import OrderDetailScreen from '../screens/order/OrderDetailScreen'

import ProfileScreen from '../screens/profile/ProfileScreen'
import LatestItemsScreen from '../screens/product/LatestItemScreen'
import HottestItemScreen from '../screens/product/HottestItemScreen'

import LoginScreen from '../screens/profile/LoginScreen'
import ContactUsScreen from '../screens/contactus/ContactUsScreen'
import AboutUsScreen from '../screens/contactus/AboutUsScreen'

import CustomDrawerMenu from './CustomDrawerMenu'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const CustomDrawerContent = (props) => {
  return(
    <DrawerContentScrollView showsVerticalScrollIndicator={false}>
      <CustomDrawerMenu navigation = {props.navigation} />
    </DrawerContentScrollView>
  )
}

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
      drawerContent={(props) => CustomDrawerContent(props)}
      screenOptions={{
        headerShown: false
      }}>
        <Drawer.Screen name="Product" component={ProductListScreen} />
        <Drawer.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Drawer.Screen name="Cart" component={CartScreen} />
        <Drawer.Screen name="Order" component={OrderListScreen} />
        <Drawer.Screen name="OrderDetail" component={OrderDetailScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="LatestItems" component={LatestItemsScreen} />
        <Drawer.Screen name="HottestItems" component={HottestItemScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="ContactUs" component={ContactUsScreen} />
        <Drawer.Screen name="AboutUs" component={AboutUsScreen} />

      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default DrawerNavigator

