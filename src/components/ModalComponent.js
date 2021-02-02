import React from 'react'
import {View, Text, TouchableOpacity, Modal} from 'react-native'
import color from '../constants/color'

const ModalComponent = ({cancelHandler, visible}) => {
  return(
    <Modal
    transparent={true}
    animationType="none "
    visible={visible}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.6)' }}>
      <View style={{ width: '95%', borderRadius: 10, padding: 15, backgroundColor: color.white, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: color.primary, fontSize: 18, fontWeight: 'bold' }}>Come Back Soon!</Text>
        <Text style={{ fontSize: 16, color: color.textGray, marginTop: 10 }}>Are you sure want to exit?</Text>
        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
          <TouchableOpacity 
          style={{ width: '40%', backgroundColor: color.primary, padding: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 10}}>
            <Text style={{color: color.white, fontWeight: 'bold'}}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: '40%', backgroundColor: color.primary, padding: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 10}}
            onPress={cancelHandler}
          >
            <Text style={{color: color.white, fontWeight: 'bold'}}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
  )
}

export default ModalComponent