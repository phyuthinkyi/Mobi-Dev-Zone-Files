import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import color from '../constants/color'

const width = Dimensions.get('screen').width
const HeaderComponent = ({ title }) => {
  console.log("Title", title)
  return (
    <View style={{ marginTop: 24, width: width, height: 50, backgroundColor: color.primary, padding: 10, flexDirection: 'row' }}>
      { title == "Home" ?
        <Image style={{ width: 25, height: 25, tintColor: color.white }} source={require('../assets/menu.png')} />
        :
        <Image style={{ width: 25, height: 25, tintColor: color.white }} source={require('../assets/back_arrow.png')} />
      }
      <Text style={{ marginLeft: 10, color: color.white }}>{title}</Text>
    </View>
  )
}

export default HeaderComponent;