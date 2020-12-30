import React from 'react'
import {View, Text} from 'react-native'

const FlatListDetailScreen = ({navigation, route}) => {
  console.log("Route Data", route.params)
  const {name, age} = route.params
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>{name}</Text>
        <Text>{age}</Text>
    </View>
  )
}

export default FlatListDetailScreen

