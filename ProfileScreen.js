import React from 'react'
import { SafeAreaView, View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import HeaderComponent from '../../components/HeaderComponent'
import BottomTabComponent from '../../components/BottomTabComponent'
import color from '../../constants/color'

const width = Dimensions.get('screen').width

const ProfileScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderComponent navigation={navigation} title="Profile" menu="menu" />
      <ScrollView style={{marginBottom: 10}} showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1 }}>
          <View
            onPress={() => {
              navigation.navigate('Profile')
            }}
            style={styles.userContainer}>
            <View style={styles.userImgContainer}>
              <Image style={styles.userImg} source={require('../../../assets/images/user_img.jpg')} />
            </View>
            <Text style={styles.userInfo}>Phyu Thin Kyi (University of Computer Studies, Meiktila)</Text>
            <Text style={styles.userInfo}>09798882724</Text>
          </View>

          <View style={styles.profileCard}>
            <View style={styles.phoneContainer}>
              <Text style={styles.phoneLabel}>Phone</Text>
              <Text style={styles.phoneValue}>09xxxxxxxxx</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.phoneContainer}>
              <Text style={styles.phoneLabel}>Email</Text>
              <Text style={styles.phoneValue}>phyuthinkyicu@gmail.com</Text>
            </View>
          </View>

          <View style={styles.profileCard}>
            <Text style={styles.phoneLabel}>Address</Text>
            <Text style={{ marginTop: 10, fontSize: 16, color: color.textGray }}>Diamond Condo, Tower A, 4th Floor, No. 403, Kamayut Township, Yangon, Myanmar</Text>
          </View>

          <View style={styles.profileCard}>
            <TouchableOpacity onPress={() => {
              console.log("Click")
              navigation.navigate('Order')
            }} style={styles.labelContainer}>
              <Image style={styles.labelIcon}
                source={require('../../../assets/icons/order.png')} />
              <Text style={styles.labelText}>My Order</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              console.log("Click")
            }} style={styles.labelContainer}>
              <Image style={{ width: 25, height: 30, tintColor: color.primary }}
                source={require('../../../assets/icons/heart.png')} />
              <Text style={styles.labelText}>My Wishlist</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              console.log("Click")
            }} style={styles.labelContainer}>
              <Image style={styles.labelIcon}
                source={require('../../../assets/icons/logout_circle.png')} />
              <Text style={styles.labelText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <BottomTabComponent navigation={navigation} screenName="Profile" />
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  userContainer: {
    paddingVertical: 10,
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
    width: 80,
    height: 80,
    borderRadius: 40
  },
  userInfo: {
    marginTop: 5,
    color: color.white,
    fontSize: 16,
    textAlign: 'center'
  },
  profileCard: {
    marginHorizontal: 10,
    marginTop: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    justifyContent: 'center'
  },
  phoneContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  phoneLabel: {
    fontSize: 18,
    color: color.textGray,
    fontWeight: 'bold'
  },
  phoneValue: {
    fontSize: 18,
    color: color.textGray
  },
  divider: {
    marginVertical: 10,
    width: '100%', height: 1,
    backgroundColor: color.darkLight
  },
  labelContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  labelIcon: {
    width: 25,
    height: 25,
    tintColor: color.primary
  },
  labelText: {
    marginLeft: 13,
    fontSize: 18,
    color: color.textGray
  }
})