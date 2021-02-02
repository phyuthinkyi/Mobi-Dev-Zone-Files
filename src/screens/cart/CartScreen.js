import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import HeaderComponent from '../../components/HeaderComponent'
import BottomTabComponent from '../../components/BottomTabComponent'
export default function CartScreen({navigation, route}) {
  return (
    <SafeAreaView style={{flex: 1}}>
    <HeaderComponent menu="menu" title="Cart" navigation={navigation} />
    <View style={{flex: 1}}>
      <Text></Text>
    </View>
    <BottomTabComponent navigation={navigation} screenName="Cart" />
    </SafeAreaView>
  )
}
