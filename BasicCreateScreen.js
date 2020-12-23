import React from 'react'
import { View, Text } from 'react-native'

const App = () => {
  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: '#f00', fontSize: 16, fontWeight: 'bold'}}>Hello!</Text>
    </View>
  )
}

export default App;

{/*
  flex is "to flexible all its content"
  justifyContent is "Vertical Center"
  alignItems is "Horizontal Center"
*/}