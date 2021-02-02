import React from 'react'
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import HeaderComponent from '../../components/HeaderComponent'
import BottomTabComponent from '../../components/BottomTabComponent'
import { FlatList } from 'react-native-gesture-handler'
import color from '../../constants/color'

const order_list = [
  {
    date: '15 Jan 2021',
    order_no: 'S001',
    total: 25000
  },
  {
    date: '15 Jan 2021',
    order_no: 'S001',
    total: 25000
  },
  {
    date: '15 Jan 2021',
    order_no: 'S001',
    total: 25000
  },
  {
    date: '15 Jan 2021',
    order_no: 'S001',
    total: 25000
  },
  {
    date: '15 Jan 2021',
    order_no: 'S001',
    total: 25000
  },
  {
    date: '15 Jan 2021',
    order_no: 'S001',
    total: 25000
  },
  {
    date: '15 Jan 2021',
    order_no: 'S001',
    total: 25000
  },
  {
    date: '15 Jan 2021',
    order_no: 'S001',
    total: 25000
  },
  {
    date: '15 Jan 2021',
    order_no: 'S001',
    total: 25000
  },
  {
    date: '15 Jan 2021',
    order_no: 'S001',
    total: 25000
  },
  {
    date: '15 Jan 2021',
    order_no: 'S001',
    total: 25000
  },
  {
    date: '15 Jan 2021',
    order_no: 'S001',
    total: 25000
  }
]

const OrderListScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderComponent navigation={navigation} title="Order List" menu="menu" />
      <View style={{ flex: 1, marginTop: 15 }}>
        <FlatList
          data={order_list}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity 
              onPress={() => {
                navigation.navigate('OrderDetail')
              }}
              style={styles.orderCard}>
                <Text style={styles.date}>{item.date}</Text>
                <Text style={styles.order_no}>{item.order_no}</Text>
                <View style={styles.totalContainer}>
                  <Text style={styles.totalText}>Total - {item.total} MMK</Text>
                 
                  <View style={styles.rightArrowContainer}>
                    <Image style={styles.rightArrowIcon}
                      source={require('../../../assets/icons/right_arrow.png')} />
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <BottomTabComponent navigation={navigation} screenName="OrderList" />
    </SafeAreaView>
  )
}

export default OrderListScreen

const styles = StyleSheet.create({
  orderCard: {
    padding: 10,
    backgroundColor: color.white,
    marginBottom: 5
  },
  date: {
    textAlign: 'right',
    color: color.textGray,
    fontSize: 14
  },
  order_no: {
    color: color.textGray,
    fontWeight: 'bold',
    fontSize: 18
  },
  totalContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  totalText: {
    fontSize: 18
  },
  rightArrowContainer: {
    width:25,
    height: 25,
    borderRadius: 15,
    backgroundColor: color.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightArrowIcon: {
    width: 18,
    height: 18,
    tintColor: color.white
  }
})