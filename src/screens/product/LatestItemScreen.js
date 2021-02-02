import React from 'react'
import { SafeAreaView, View, Text, Image, TouchableOpacity, FlatList, StyleSheet, Dimensions } from 'react-native'
import HeaderComponent from '../../components/HeaderComponent'
import color from '../../constants/color'
const width = Dimensions.get('screen').width
const ProdList = [
  {
    name: 'Pumpkin Soup (Popular Sale Product)',
    made_in: 'Made in Myanmar',
    price: 1500,
    img: require('../../../assets/images/pumpkin_soup.jpg')
  },
  {
    name: 'Vegetable Soup',
    made_in: 'Made in Myanmar ("Prototypes are a low-risk way to show proof of concept")',
    price: 1500,
    img: require('../../../assets/images/picone.jpg')
  },
  {
    name: 'Soup Two',
    made_in: 'Made in Myanmar',
    price: 1500,
    img: require('../../../assets/images/pictwo.jpg')
  },
  {
    name: 'Soup Three',
    made_in: 'Made in Myanmar',
    price: 1500,
    img: require('../../../assets/images/picone.jpg')
  },
  {
    name: 'Soup Four',
    made_in: 'Made in Myanmar',
    price: 1500,
    img: require('../../../assets/images/pictwo.jpg')
  }
]
const LatestItemsScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderComponent navigation={navigation} menu="back" title="Latest Items" />
      <View style={{ flex: 1 }}>
        <FlatList
          numColumns={2}
          data={ProdList}
          renderItem={({ item, index }) => {
            return (
              <View style={{ width: width / 2 - 20, backgroundColor: color.white, margin: 10 }}>
                <View style={{ flex: 1, alignItems: 'center', padding: 10, justifyContent: 'center' }}>
                  <View style={{ width: 100, height: 80 }}>
                    <Image style={{ width: '100%', height: '100%' }} source={item.img} />
                  </View>

                  <Text style={{ textAlign: 'center', marginTop: 10, color: color.textGray, fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
                  <Text style={{ textAlign: 'center', marginTop: 10, color: color.textGray, fontSize: 14 }}>{item.price} MMK</Text>

                  <View style={styles.qtyContainer}>
                    <Image style={styles.increaseIcon} source={require('../../../assets/icons/minus.png')} />
                    <Text style={styles.qtyText}>1</Text>
                    <Image style={styles.increaseIcon} source={require('../../../assets/icons/plus.png')} />
                  </View>
                </View>
                <View style={{ backgroundColor: color.primary, justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                  <Text style={{ color: color.white }}>Add to Cart</Text>
                </View>
              </View>
            )
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  )
}

export default LatestItemsScreen

const styles = StyleSheet.create({
  qtyContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  increaseIcon: { width: 30, height: 30, tintColor: color.primary },
  qtyText: { marginHorizontal: 10, fontSize: 16, color: color.textGray, fontWeight: 'bold' },
})
