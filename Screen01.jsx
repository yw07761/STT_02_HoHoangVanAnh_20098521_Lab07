import React from 'react';
import { View, Text, Dimensions , Image, Pressable, TouchableOpacity, StyleSheet } from 'react-native';


const Screen01 = (props) => {
    // Lấy navigate và route từ props
    const { navigation, route } = props
    const { navigate, goBack } = navigation
  
    // Lấy kích thước toàn màn hình
    const screenWidth = Dimensions.get('window').width
    const screenHeight = Dimensions.get('window').height
    
    return (
        <View 
            style={{ 
            width: screenWidth, 
            height: screenHeight, 
            backgroundColor: "#fff" 
        }}>
          <Text
            style={{
                fontFamily: 'VT323',
                fontWeight: '400',
                fontSize: 26,
                lineHeight: 26,
                textAlign: 'center',
                width: 351,
                height: 87,
                marginToptop: 61,
                marginLeft: 26,
            }}
          >
            A premium online store for {"\n"}
            sporter and their stylish choice
          </Text>
          <View style={{
                width: 356,
                height: 388,
                marginTop: 30,
                marginLeft: 31,
                borderRadius: 50,
                backgroundColor: '#E941411A',
            }}>
                <Image
                    source={require("./assets/xe_xanh.png")}
                    style={{
                        width: 292,
                        height: 270,
                        marginTop: 80,
                        marginLeft: 26,
                        position: "absolute",
                  }}/> 
            </View>
            <Text
            style={{
                fontFamily: 'Ubuntu',
                fontWeight: '700',
                fontSize: 26,
                lineHeight: 26,
                textAlign: 'center',
                width: 351,
                height: 61,
                marginTop: 31,
                marginLeft: 26,
            }}
          >
            POWER BIKE {"\n"}
            SHOP
          </Text>
          <TouchableOpacity
            onPress={() => {
                navigate('Screen02')
            }}
                style={{
                    width: 341,
                    height: 61,
                    top: 692,
                    left: 35,
                    borderRadius: 30,
                    position: "absolute",
                    background: '#E94141',
                    
                }}   
          >
            <Text 
                style={{
                    fontFamily: "VT323",
                    fontSize: 27,
                    fontWeight: "400",
                    lineHeight: 27,
                    textAlign: "center", 
                    color: "#FEFEFE",
                    marginTop: 15,
                }}
            >Get Started
            </Text>
          </TouchableOpacity>
        </View>
      );
    };
    
    export default Screen01;