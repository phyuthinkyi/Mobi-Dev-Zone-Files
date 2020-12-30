import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width
const ButtonScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.btnContainer}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Left</Text>
        </View>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Right</Text>
        </View>
      </View>
    </View>
  );
}

export default ButtonScreen;

const styles = StyleSheet.create({
  btnContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 15,
    //backgroundColor: '#55aa',
    justifyContent: 'space-between'
    //justifyContent: 'flex-start'
  },
  btn: {
    backgroundColor: '#0c67a8',
    width: width / 2 - 40,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    //marginLeft: 20
  },
  btnText: {
    color: '#fff'
  }
})


