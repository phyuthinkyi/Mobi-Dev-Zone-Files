import React from 'react'
import {View, Text, Image, TouchableOpacity, Platform} from 'react-native'
import color from '../constants/color'

const HeaderComponent = ({navigation, title, menu}) => {
  return(
    <View style={{marginTop: Platform.OS == 'ios' ? 0 : 24, height: 50, backgroundColor: color.white, flexDirection: 'row', paddingHorizontal: 15, alignItems: 'center'}}>
     {
       menu == "menu" ?
       <TouchableOpacity onPress={() => {navigation.toggleDrawer()}}>
       <Image style={{width: 25, height: 25, tintColor: color.primary}} source={require('../../assets/icons/menu.png')} />
       </TouchableOpacity>
       :
       <TouchableOpacity onPress={() => {navigation.goBack()}}>
       <Image style={{width: 25, height: 25, tintColor: color.primary}} source={require('../../assets/icons/back_arrow.png')} />
       </TouchableOpacity>
     }
     <Text style={{marginLeft: 10}}>{title}</Text>
    </View>
  )
}

export default HeaderComponent;