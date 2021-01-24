import React from 'react'
import {View, Image, Text, Dimensions, TouchableOpacity} from 'react-native'
import color from '../constants/color'
const width = Dimensions.get('screen').width

const BottomTabComponent = ({navigation, screenName}) => {
  console.log("Screen Name", screenName)

{
  /*
  //Card View
  <View>

  <View style ={{ position: 'absolute', bottom: 0, right: 0}}><Text>Buy</Text></View>
  </View>

   */
}
  return(
    <View style={{height: 50, backgroundColor: '#fff', flexDirection: 'row'}}>
      <TouchableOpacity 
      onPress={() => {
        navigation.navigate('Product')
      }}
      style={{padding: 10, width: width/3, justifyContent: 'center', alignItems: 'center'}}>
        <Image style={{width: 25, height: 25, tintColor: screenName=="Product" ? color.primary : color.darkLight}} source={require('../../assets/primary_home.png')} />
        <Text style={{color: screenName=="Product" ? color.primary : color.darkLight}}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => {
        navigation.navigate('Order')
      }}
       style={{padding: 10, width: width/3, justifyContent: 'center', alignItems: 'center'}}>
        <Image style={{width: 25, height: 25, tintColor: screenName=="OrderList" ? color.primary : color.darkLight}} source={require('../../assets/primary_home.png')} />
        <Text style={{color: screenName=="OrderList" ? color.primary : color.darkLight}}>Order</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => {
        navigation.navigate('Profile')
      }}
       style={{padding: 10, width: width/3, justifyContent: 'center', alignItems: 'center'}}>
        <Image style={{width: 25, height: 25, tintColor: screenName=="Profile" ? color.primary : color.darkLight}} source={require('../../assets/primary_home.png')} />
        <Text style={{color: screenName=="Profile" ? color.primary : color.darkLight}}>Profile</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BottomTabComponent