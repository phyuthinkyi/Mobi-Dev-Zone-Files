import React from 'react'
import { SafeAreaView, View, Text, Image, ScrollView, StyleSheet} from 'react-native'
import BottomTabComponent from '../../components/BottomTabComponent'
import HeaderComponent from '../../components/HeaderComponent'
import color from '../../constants/color'

const ProductDetailScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent navigation={navigation} title="Product Detail" menu="back" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.context}>
          <View style={styles.imgContainer}>
            <Image source={require('../../../assets/images/pumpkin_soup.jpg')} 
            style={styles.img} />
          </View>

          <View style={styles.cardContainer}>
            <View style={styles.addToCartContainer}>
              <Text style={styles.title}>Pumpkin Soup</Text>
              <Image style={styles.heatIcon} source={require('../../../assets/icons/heart.png')} />
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.normalPriceText}>2500 MMK</Text>
              <Text style={styles.discPrice}>1500 MMK</Text>
            </View>
          </View>

          <View style={styles.cardContainer}>
            <Text style={styles.descTitle}>Description</Text>
            <Text style={styles.descText}>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.
            A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.
            A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.
            </Text>
          </View>

          <View style={[styles.addToCartContainer,styles.cardContainer ]}>
            <View style={styles.qtyContainer}>
              <Image style={styles.increaseIcon} source={require('../../../assets/icons/minus.png')} />
              <Text style={styles.qtyText}>1</Text>
              <Image style={styles.increaseIcon} source={require('../../../assets/icons/plus.png')} />
            </View>
            <View style={styles.btnCartContainer}>
              <Text style={styles.cartText}>Add to Cart</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
  container: { flex: 1 },
  context: { flex: 1 },
  imgContainer: { width: '100%', height: 200 },
  img: { width: '100%', height: '100%' },
  cardContainer: { backgroundColor: color.white, borderRadius: 10, padding: 15, marginTop: 15, marginHorizontal: 15 },
  title: { color: color.primary, fontSize: 18, fontWeight: 'bold' },
  heatIcon: { width: 25, height: 25, tintColor: color.primary },
  priceContainer: { flexDirection: 'row', marginTop: 10 },
  normalPriceText: { color: color.textGray, fontSize: 16, textDecorationLine: 'line-through' },
  discPrice: { marginLeft: 10, color: color.textGray, fontSize: 16 },
  descTitle: { fontSize: 18, color: color.textGray, fontWeight: 'bold' },
  descText: { fontSize: 14, color: color.textGray, marginTop: 5 },
  addToCartContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  qtyContainer: { flexDirection: 'row', alignItems: 'center' },
  increaseIcon: { width: 30, height: 30, tintColor: color.primary },
  qtyText: { marginHorizontal: 10, fontSize: 16, color: color.textGray, fontWeight: 'bold' },
  btnCartContainer: { backgroundColor: color.primary, borderRadius: 5, paddingVertical: 3, paddingHorizontal: 15, justifyContent: 'center', alignItems: 'center' },
  cartText: { color: color.white, fontSize: 16, fontWeight: 'bold' },
})