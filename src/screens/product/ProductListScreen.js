
import React, {useEffect, useState} from 'react'
import { SafeAreaView, View, Text, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import color from '../../constants/color'
import HeaderComponent from '../../components/HeaderComponent'
import BottomTabComponent from '../../components/BottomTabComponent'
const width = Dimensions.get('screen').width

const ProdList = [
  {
    name: 'Pumpkin Soup (Popular Sale Product)',
    made_in: 'Made in Myanmar',
    price: 1500,
    img: require('../../../assets/images/pumpkin_soup.jpg')
  },
  {
    name: 'Soup One',
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

const ProductListScreen = ({navigation, route}) => {
    const [products, setProducts] = useState([])
  useEffect(() => {
    const getProductList = async () => {
      const response = await fetch('https://restaurant-1dc68-default-rtdb.firebaseio.com/Product.json')
      const resData = await response.json();
      const Products = [];
      //console.log("RES PONS", resData)

      for(const key in resData){
        console.log("API Product", resData[key])
        Products.push(resData[key])
        //catProducts.push(new Category(key, resData[key].id, resData[key].name))
      }

      console.log("CAT PROD", Products)
      setProducts(Products)
      
    }
    getProductList()
  }, [])

  return (
    <SafeAreaView style={{flex: 1}}>
      <HeaderComponent navigation={navigation} title="Product List" menu="menu" />
      <View style={{flex: 1}}>
      <Text style={{margin: 10, fontSize: 20, color: '#C95227', fontWeight: 'bold'}}>Popular Items</Text>
        <FlatList
          data={products}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
              onPress={()=> {navigation.navigate('ProductDetail', {
                product: item,
              })}}
               key={index} style={{marginHorizontal: 10, marginVertical: 6, backgroundColor: '#fff', borderRadius: 15, padding: 10, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ width: width/3 - 10, height: width/3 - 20, borderRadius: 10 }}>
                  <Image style={{ width: '100%', height: '100%', borderRadius: 10 }} source={{uri: item.image}} />
                </View>
                <View style={{flex: 1, marginBottom: 20, paddingLeft: 10}}>
                  <Text style={{fontSize: 18, color: '#5F5D5C', fontWeight: 'bold'}}>{item.name} Made in Myanmar</Text>
                  <Text style={{marginTop: 3, color: '#C95227', fontSize: 14}}>( {item.made_in} )</Text>
                  <Text style={{marginTop: 10, color: '#C95227', fontSize: 16}}>{item.price} MMK</Text>
                </View>
                <View style={{position: 'absolute', marginTop: 10, bottom: 0, right: 0, backgroundColor: '#C95227', justifyContent: 'center', alignItems: 'center', paddingVertical: 7, paddingHorizontal: 15, borderBottomRightRadius: 10, borderTopLeftRadius: 10,}}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 14}}>စျေး၀ယ်မည်</Text>
                  </View>
              </TouchableOpacity>
            )
          }}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <BottomTabComponent navigation={navigation} screenName="Product" />
    </SafeAreaView>
  )
}

export default ProductListScreen












// import React from 'react'
// import { SafeAreaView, View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
// import styles from '../../constants/styles'
// import color from '../../constants/color'
// import HeaderComponent from '../../components/HeaderComponent'
// const catArr = [
//   {
//     image: require('../../../assets/coffee_cup.png'),
//     catName: 'Coffee'
//   },
//   {
//     image: require('../../../assets/coffee_cup.png'),
//     catName: 'Cake'
//   },
//   {
//     image: require('../../../assets/coffee_cup.png'),
//     catName: 'Burger'
//   },
//   {
//     image: require('../../../assets/coffee_cup.png'),
//     catName: 'Juices'
//   },
//   {
//     image: require('../../../assets/coffee_cup.png'),
//     catName: 'Bread'
//   },
//   {
//     image: require('../../../assets/coffee_cup.png'),
//     catName: 'Candy'
//   },
//   {
//     image: require('../../../assets/coffee_cup.png'),
//     catName: 'Juices'
//   },
//   {
//     image: require('../../../assets/coffee_cup.png'),
//     catName: 'Bread'
//   },
//   {
//     image: require('../../../assets/coffee_cup.png'),
//     catName: 'Candy'
//   }
// ]


// const ProductListScreen = ({ navigation, route }) => {
//   return (
    // <SafeAreaView style={styles.container}>
    //   <HeaderComponent navigation={navigation} title="Product Detail" menu="back" />
//       <View style={[styles.content]}>
//         <FlatList
//           style={{ marginVertical: 5 }}
//           data={catArr}
//           renderItem={({ item, index }) => {
//             return (
//               <TouchableOpacity
//                 style={{
//                   flexDirection: 'row',
//                   justifyContent: 'space-between',
//                   borderRadius: 10,
//                   backgroundColor: color.white,
//                   shadowColor: color.black,
//                   elevation: 5,
//                   shadowRadius: 10,
//                 }}>
//                 <View>
//                   <Text>Name</Text>
//                   <Text>$20</Text>
//                 </View>
//                 <View style={{ width: 50, height: 50 }}>
//                   <Image style={{ width: '100%', height: '100%' }} resizeMode="contain" source={require('../../../assets/burger.png')} />
//                 </View>
//               </TouchableOpacity>



//             )
//           }}
//           keyExtractor={(item, index) => index.toString()}
//           showsVerticalScrollIndicator={false}
//         />
//       </View>
//     </SafeAreaView>
//   )
// }

// export default ProductListScreen;





// import React from 'react'
// import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native'
// import HeaderComponent from '../../components/HeaderComponent'
// import BottomTabComponent from '../../components/BottomTabComponent'

// const ProductListScreen = ({navigation, route}) => {
//   return(
//     <SafeAreaView style={{flex: 1}}>
//       <HeaderComponent navigation={navigation} title="Product List" menu="menu"/>
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//           <TouchableOpacity onPress={() => {
//               navigation.navigate('ProductDetail')
//           }}>
        
//           </TouchableOpacity>
//       </View>
//       <BottomTabComponent navigation={navigation} screenName="Product"/>
//     </SafeAreaView>
//   )
// }

// export default ProductListScreen