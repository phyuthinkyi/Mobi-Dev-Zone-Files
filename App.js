import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
const HomeScreen = ({navigation, route}) => {
return(
  <View style={styles.container}> 
  <Text>I'm Home</Text>
    <TouchableOpacity onPress={() => { navigation.navigate("Detail")}}>
        <View style={{ padding: 10, backgroundColor: '#dd9911', }}>
          <Text style={{ color: '#fff' }}>Go To Detail</Text>
        </View>
      </TouchableOpacity>
  </View>
)
}

const DetailScreen = props => {
  return(
    <View>
      <Text>I'm Detail</Text>
      <TouchableOpacity onPress={() => { props.navigation.navigate("Home")}}>
        <View style={{ padding: 10, backgroundColor: '#dd9911', }}>
          <Text style={{ color: '#fff' }}>Go To Detail</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}
const Stack = createStackNavigator()

const app = () => {
  return(
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
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', },
  text: { color: 'red', fontSize: 16, fontWeight: 'bold' },
})






// import React from 'react'
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'

// const HomeScreen = ({navigation, route}) => {
//  // console.log("Home Props>>>",props)
//   //navigation and route
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text style={{ color: '#aa0022', fontSize: 16, fontWeight: 'bold', marginBottom: 20 }}>Hello!</Text>
      // <TouchableOpacity
      //   onPress={() => {
      //     navigation.navigate("Detail")
      //   }}>
      //   <View style={{ padding: 10, backgroundColor: '#dd9911', }}>
      //     <Text style={{ color: '#fff' }}>Go To Detail</Text>
      //   </View>
      // </TouchableOpacity>

//     </View>
//   )
// }

// const DetailScreen = props => {
//   return (
//     <View style={styles.container} >
//       <Text style={styles.text}>I'm Detail Screen</Text>
//       <TouchableOpacity
//         onPress={() => {
//           props.navigation.navigate("Home")
//         }}>
//         <View style={{ padding: 10, backgroundColor: '#dd9911', }}>
//           <Text style={{ color: '#fff' }}>Go Back To Home</Text>
//         </View>
//       </TouchableOpacity>

//     </View>
//   )
// }

// const Stack = createStackNavigator()

// const app = () => {
//   return (
//   <NavigationContainer>
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="Detail" component={DetailScreen}/>
//     </Stack.Navigator>
//   </NavigationContainer>
//   )
// }

// export default app;















