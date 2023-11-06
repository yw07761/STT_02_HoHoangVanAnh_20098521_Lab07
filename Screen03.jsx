import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'
  
  const Screen03 = (props) => {
    // Lấy navigate và route từ props
    const { navigation, route } = props
    const { navigate, goBack } = navigation
  
    const { item } = route.params

    // Lấy kích thước toàn màn hình
    const screenWidth = Dimensions.get('window').width
    const screenHeight = Dimensions.get('window').height
    
    return (
      <View
        style={{
          height: screenHeight,
          width: screenWidth,
          backgroundColor: 'white',
        }}
      >
        <View
          style={{
            width: 356,
            height: 388,
            marginTop: 30,
            marginLeft: 31,
            borderRadius: 50,
            backgroundColor: '#E941411A',
          }}
        >
          <Image 
            source={item.image}
            style={{
              width: 292,
              height: 270,
              marginTop: 80,
              marginLeft: 26,
              position: "absolute",
            }} 
          />
        </View>
      </View>
          
    )
  }
  


export default Screen03;