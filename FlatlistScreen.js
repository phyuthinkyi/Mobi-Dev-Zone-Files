import React from 'react'
import { View, FlatList, Text, Dimensions, TouchableOpacity } from 'react-native'

const deviceWidth = Dimensions.get('screen').width

const peopleArr = [{ id: 1, name: 'Name One', age: 12, }, { id: 2, name: 'Name Two', age: 12, }, { id: 1, name: 'Name One', age: 12, }, { id: 2, name: 'Name Two', age: 12, }, { id: 1, name: 'Name One', age: 12, }, { id: 2, name: 'Name Two', age: 12, }, { id: 1, name: 'Name One', age: 12, }, { id: 2, name: 'Name Two', age: 12, },]

const FlatListScreen = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        numColumns={2}
        data={peopleArr}
        renderItem={({ item, index }) => {
          //console.log("Each Item", item)
          return (
            <TouchableOpacity onPress={() => {
              navigation.navigate('FlatListDetail', {
                name: item.name,
                age: item.age
              })
            }}
              style={{
                borderRadius: 10,
                shadowColor: '#000',
                shadowRadius: 10,
                elevation: 5,
                justifyContent: 'center',
                alignItems: 'center',
                width: deviceWidth / 2 - 20,
                height: deviceWidth / 2 - 60,
                padding: 20,
                backgroundColor: '#fff',
                margin: 10
              }}>
              <Text>{item.name}</Text>
              <Text>{item.age}</Text>
            </TouchableOpacity>
          )
        }}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      //showsHorizontalScrollIndicator={false}
      //horizontal={true}
      />
    </View>
  )
}

export default FlatListScreen