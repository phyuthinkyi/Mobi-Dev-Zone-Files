import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const HomeScreen = props => {
  const [value, setValue] = useState('')
  return (
    <View style={styles.container}>
      <Text style={styles.text}>I'm Home</Text>
      { props.route.params != undefined && <Text style={styles.text}>{props.route.params.wherefrom}</Text>}
      <TextInput
        style={styles.inputStyle}
        placeholder="Please Enter"
        onChangeText={myText => setValue(myText)}
      />
      <TouchableOpacity onPress={() => {
        console.log("Input Field Data", value)
        props.navigation.navigate('Detail', {
          wherefrom: value
        })
      }} style={styles.btnContainer}>
        <Text style={styles.btnText}>Go To Detail</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnContainer}>
        <Text style={styles.btnText}>Go To Profile</Text>
      </TouchableOpacity>
    </View>
  )
}

const DetailScreen = props => {
  const [value, setValue] = useState('')

  const setMyValue = (text) => {
    setValue(text)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>I'm Home</Text>
      <Text style={styles.text}>{props.route.params.wherefrom}</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="Enter Something"
        onChangeText={myText => setMyValue(myText)}
      />
      <TouchableOpacity onPress={() => {
        props.navigation.navigate('Home', {
          wherefrom: value
        })
      }} style={styles.btnContainer}>
        <Text style={styles.btnText}>Go Back To Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnContainer}>
        <Text style={styles.btnText}>Go To Profile</Text>
      </TouchableOpacity>
    </View>
  )
}

const Stack = createStackNavigator()

const app = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  text: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold'
  },
  btnContainer: {
    marginTop: 15,
    width: '100%',
    height: 50,
    backgroundColor: '#0c67a8',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  inputStyle: {
    width: '100%',
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    paddingLeft: 8
  },
})