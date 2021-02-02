import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native'
import color from '../../constants/color'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: color.primary, justifyContent: 'center', alignItems: 'center'}}>
        <TextInput
          style={{marginTop: 10, height: 50, backgroundColor: color.white, paddingLeft: 5, borderRadius: 10 }}
          placeholder="email"
        />
        <TextInput
          style={{ height: 50, backgroundColor: color.white, paddingLeft: 5, borderRadius: 10 }}
          placeholder="password"
        />
        <TouchableOpacity 

        style={{height: 50, backgroundColor: color.white, justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginTop: 10}}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen