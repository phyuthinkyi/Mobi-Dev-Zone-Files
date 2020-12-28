import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, Dimensions, Image } from 'react-native'
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
const HomeScreen = props => {
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')
  const [phone, setPhone] = useState('')
  const [numCount, setNumberCount] = useState(1)

  useEffect(() => {
    //calling Api
    console.log("Number Count is ", numCount)
  }, [name, pass, phone, numCount])

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, width: width, padding: 20, justifyContent: 'center', alignItems: 'center', }}>
      <Image style={{width: 50, height: 50}} source={require('../assets/person.png')} />
      <Image style={{width: 50, height: 50}} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png' }} />
        <Text style={styles.text}>Hello React Native</Text>
        {props.route.params != undefined && <Text style={styles.text}>{props.route.params.wherefrom}</Text>}
        <TextInput
          style={styles.inputStyle}
          placeholder="Name"
          onChangeText={myText => setName(myText)}
          value={name}
        />

        <TextInput
          style={styles.inputStyle}
          placeholder="Phone"
          keyboardType="numeric"
          onChangeText={myText => setPhone(myText)}
          value={phone}
        />

        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          secureTextEntry
          onChangeText={myText => setPass(myText)}
          value={pass}
        />

        <TouchableOpacity onPress={() => {
          setName('')
          setPhone('')
          setPass('')
          props.navigation.navigate('Detail', {
            wherefrom: "I'm from Home",
            name: name,
            password: pass
          })
        }} style={styles.btnContainer}>
          <Text style={styles.btnText}>Go To Detail</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setNumberCount(numCount + 1)} style={styles.btnProfile}>
          <Text style={styles.btnTxtProfile}>Plus</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    justifyContent: 'center',
    alignItems: 'center'
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
    alignItems: 'center',
  },
  btnProfile: {
    marginTop: 5,
    width: '100%',
    height: 40,
    //backgroundColor: '#0c67a8',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  btnTxtProfile: {
    color: '#0c67a8',
    fontWeight: 'bold'
  },
  inputStyle: {
    marginTop: 15,
    width: '100%',
    height: 50,
    // borderColor: '#333333',
    // borderWidth: 0.3,
    backgroundColor: '#fff',
    paddingLeft: 8,
    borderRadius: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
  },
})

