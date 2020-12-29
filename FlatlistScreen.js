import React from 'react'
import {View, FlatList, Text} from 'react-native'

const peopleArr = [{id: 1, name: 'Name One', age: 12,}, {id: 2, name: 'Name Two', age: 12,},]

const FlatListScreen = () => {
  return(
    <View style={{flex: 1}}>
      <FlatList 
        data={peopleArr}
        renderItem={({item, index}) => {
          console.log("Each Item", item)
          return(
            <View style={{padding: 20, backgroundColor: '#fff', margin: 10}}>
              <Text>{item.name}</Text>
              <Text>{item.age}</Text>
            </View>
          )
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

export default FlatListScreen