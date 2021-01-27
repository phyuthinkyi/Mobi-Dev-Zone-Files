import React from 'react'
import { View, TouchableOpacity, Text, Image, Dimensions, StyleSheet } from 'react-native'
import color from '../constants/color'

const width = Dimensions.get('screen').width

const CustomDrawerContent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
      onPress={() => {
        navigation.navigate('Profile')
      }}
      style={styles.userContainer}>
        <View style={styles.userImgContainer}>
          <Image style={styles.userImg} source={require('../../assets/images/user_img.jpg')} />
        </View>
        <Text style={styles.userInfo}>Phyu Thin Kyi</Text>
        <Text style={styles.userInfo}>09798882724</Text>
      </TouchableOpacity>
      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Product')
        }} style={styles.labelContainer}>
          <Image style={styles.labelIcon}
            source={require('../../assets/icons/home.png')} />
          <Text style={styles.labelText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          navigation.navigate('Order')
        }} style={styles.labelContainer}>
          <Image style={styles.labelIcon}
            source={require('../../assets/icons/order.png')} />
          <Text style={styles.labelText}>Order List</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          navigation.navigate('Product')
        }} style={styles.labelContainer}>
          <Image style={styles.labelIcon}
            source={require('../../assets/icons/latest_item.png')} />
          <Text style={styles.labelText}>Latest Items</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          navigation.navigate('HottestItems')
        }} style={styles.labelContainer}>
          <Image style={styles.labelIcon}
            source={require('../../assets/icons/hottest_item.png')} />
          <Text style={styles.labelText}>Hottest Items</Text>
        </TouchableOpacity>

        <View style={{ marginLeft: 30, marginVertical: 15, height: 2, backgroundColor: color.primary, width: width / 3 }} />

        <TouchableOpacity onPress={() => {
          navigation.navigate('Product')
        }} style={styles.labelContainer}>
          <Image style={styles.labelIcon}
            source={require('../../assets/icons/about_us.png')} />
          <Text style={styles.labelText}>About Us</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          navigation.navigate('Product')
        }} style={styles.labelContainer}>
          <Image style={styles.labelIcon}
            source={require('../../assets/icons/contact_us.png')} />
          <Text style={styles.labelText}>Contact Us</Text>
        </TouchableOpacity>

        <View style={{ marginLeft: 30, marginVertical: 15, height: 2, backgroundColor: color.primary, width: width / 3 }} />

        <TouchableOpacity onPress={() => {
          navigation.navigate('Product')
        }} style={styles.labelContainer}>
          <Image style={styles.labelIcon}
            source={require('../../assets/icons/logout.png')} />
          <Text style={styles.labelText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CustomDrawerContent

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  userContainer: {
    paddingVertical: 20,
    backgroundColor: color.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userImgContainer: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  userImg: {
    width: '100%',
    height: '100%',
    borderRadius: 40
  },
  userInfo: {
    marginTop: 5,
    color: color.white,
    fontSize: 18,
    textAlign: 'center'
  },
  itemContainer: {
    flex: 1,
    paddingVertical: 15,
  },
  labelContainer: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  labelIcon: {
    width: 25,
    height: 25
  },
  labelText: {
    marginLeft: 10,
    fontSize: 18,
    color: color.textGray
  }
})