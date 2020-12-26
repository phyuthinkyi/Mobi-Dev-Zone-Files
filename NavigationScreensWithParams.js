import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const HomeScreen = props => {
  //navigation, route
  return (
    <View style={styles.container}>
      <Text style={styles.text}>I'm Home</Text>
      { props.route.params != undefined && <Text style={styles.text}>{props.route.params.wherefrom}</Text>}
      <TouchableOpacity onPress={() => {
        props.navigation.navigate('Detail', {
          wherefrom: "I'm from Home"
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
  console.log("Props", props.route)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>I'm Home</Text>
      <Text style={styles.text}>{props.route.params.wherefrom}</Text>
      <TouchableOpacity onPress={() => {
        props.navigation.navigate('Home', {
          wherefrom: "I'm from Detail"
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
  }
})