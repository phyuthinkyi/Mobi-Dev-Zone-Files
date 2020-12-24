import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const HomeScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>I'm Home</Text>
      <TouchableOpacity
        style={styles.touchContain}
        onPress={() => { navigation.navigate("Detail") }}>
        <View style={styles.btnContainer}>
          <Text style={styles.btnText}>Go To Detail</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const DetailScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>I'm Detail</Text>
      <TouchableOpacity
        style={styles.touchContain}
        onPress={() => { navigation.navigate("Home") }}>
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