import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//npm install -g expo-cli
// expo init ProjectName
// 
const HomeScreen = ({navigation, route}) => {
  console.log("Home Route Data", route)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>I'm Home</Text>
     { route.params != undefined && <Text>{route.params}</Text>}
      <TouchableOpacity
        style={styles.touchContain}
        onPress={() => {navigation.navigate("Detail", {
          wherefrom: "I'm from Home"
        }) }}>
        <View style={styles.btnContainer}>
          <Text style={styles.btnText}>Go To Detail</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const DetailScreen = ({ navigation, route }) => {
  console.log("Detail Route Data", route)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>I'm Detail</Text>
      <Text>{route.params.wherefrom}</Text>
      <TouchableOpacity
        style={styles.touchContain}
        onPress={() => { navigation.navigate("Home", {
          wherefrom: "I'm from Detail"
        }) }}>
        <View style={styles.btnContainer}>
          <Text style={styles.btnText}>Back To Home</Text>
        </View>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold'
  },
  touchContain: {
    width: '100%',
    paddingHorizontal: 15,
    marginTop: 10
  },
  btnContainer: {
    width: '100%',
    padding: 10,
    backgroundColor: '#0c67a8',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
})