import React from 'react'
import { View, Image, Text, Dimensions, TouchableOpacity } from 'react-native'
import color from '../constants/color'
const width = Dimensions.get('screen').width

const BottomTabComponent = ({ navigation, screenName }) => {
  console.log("Screen Name", screenName)
  return (
    <View style={{ height: 50, backgroundColor: '#fff', flexDirection: 'row' }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Product')
        }}
        style={{ padding: 10, width: width / 4, justifyContent: 'center', alignItems: 'center' }}>
        <Image style={{ width: 25, height: 25, tintColor: screenName == "Product" ? color.primary : color.gray }} source={require('../../assets/icons/home.png')} />
        <Text style={{ color: screenName == "Product" ? color.primary : color.gray }}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Cart')
        }}
        style={{ padding: 10, width: width / 4, justifyContent: 'center', alignItems: 'center' }}>
        <Image style={{ width: 25, height: 25, tintColor: screenName == "Cart" ? color.primary : color.gray }} source={require('../../assets/icons/cart.png')} />
        <View style={{ position: 'absolute', top: -5, right: 0, marginTop: 5, borderRadius: 11, 
        marginRight: width/8 - 22, width: 22, height: 22, justifyContent: 'center', alignItems: 'center', 
        backgroundColor: color.cartQtyBg }}>
          <Text style={{ fontSize: 12, color: color.white }}>16</Text>
        </View>
        <Text style={{ color: screenName == "Cart" ? color.primary : color.gray }}>Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Order')
        }}
        style={{ padding: 10, width: width / 4, justifyContent: 'center', alignItems: 'center' }}>
        <Image style={{ width: 25, height: 25, tintColor: screenName == "OrderList" ? color.primary : color.gray }} source={require('../../assets/icons/order.png')} />
        <Text style={{ color: screenName == "OrderList" ? color.primary : color.gray }}>Order</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Profile')
        }}
        style={{ padding: 10, width: width / 4, justifyContent: 'center', alignItems: 'center' }}>
        <Image style={{ width: 25, height: 25, tintColor: screenName == "Profile" ? color.primary : color.gray }} source={require('../../assets/icons/profile.png')} />
        <Text style={{ color: screenName == "Profile" ? color.primary : color.gray }}>Profile</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BottomTabComponent