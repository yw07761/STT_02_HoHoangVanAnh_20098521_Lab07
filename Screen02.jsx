import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    ScrollView,
    Image,
    TouchableOpacity,
  } from 'react-native'
  import React, { useState } from 'react'
  
  const Screen02 = (props) => {
    const { navigation, route } = props
    const { navigate, goBack } = navigation
  
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
  
    const [typeBike, setTypeBike] = useState([
      {
        id: 1,
        name: 'All',
        isSelected: true,
      },
      {
        id: 2,
        name: 'RoadBike',
        isSelected: false,
      },
      {
        id: 3,
        name: 'Mountain',
        isSelected: false,
      },
    ]);
  
    const [data, setData] = useState([
      {
        id: 1,
        name: 'Pinarello',
        price: '$1800',
        image: require('./assets/Xexanh.png'),
      },
      {
        id: 2,
        name: 'Pina Mountai',
        price: '$1700',
        image: require('./assets/xe_e.png'),
      },
      {
        id: 3,
        name: 'Pina Bike',
        price: '$1500',
        image: require('./assets/Xe_tim.png'),
      },
      {
        id: 4,
        name: 'Pinarello',
        price: '$1900',
        image: require('./assets/Xe_do.png'),
      },
      {
        id: 5,
        name: 'Pinarello',
        price: '$2700',
        image: require('./assets/Xe_tim.png'),
      },
      {
        id: 6,
        name: 'Pinarello',
        price: '$1350',
        image: require('./assets/xe_e.png'),
      },
    ]);
    const [searchText, setSearchText] = useState('')
    
    const filteredData = data.filter((item) => {
      if (searchText.toLowerCase() === 'all') {
        return true;
      } else if (searchText.toLowerCase() === 'roadbike') {
        return item.name.toLowerCase().includes('roadbike');
      } else if (searchText.toLowerCase() === 'mountain') {
        return item.name.toLowerCase().includes('mountain');
      }
      return false;
    });
    
    return (
      <View
            style={{
                height: screenHeight,
                width: screenWidth,
                backgroundColor: '#fff',
            }}>
        <Text
            style={{
                fontFamily: 'Ubuntu',
                fontSize: 25,
                fontWeight: '700',
                lineHeight: 29,
                textAlign: 'center',
                color: '#E94141',
                marginTop: 47,
            }}>The world’s Best Bike
        </Text>
        <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 15 }}>
            {typeBike.map((item, index) => (
                <TouchableOpacity
                onPress={() => {
                    let newItems = typeBike.map((itemN) => {
                        item.id == itemN.id ? setSearchText(itemN.name) : null
                        return { ...itemN, isSelected: item.id == itemN.id }
                    });
                setTypeBike(newItems)
                }}
                key={index}
                style={{
                    width: 99,
                    height: 32,
                    borderWidth: 1,
                    borderColor: '#E9414187',
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text
                    style={{
                        fontFamily: "Voltaire",
                        fontSize: 20,
                        alignContent: 'center',
                        color: item.isSelected ?'#E94141' : '#BEB6B6'  ,
                    }}
                >{item.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
        <ScrollView
          style={{
              marginBottom: 30,
          }}>
        {data
    .filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    )
    .reduce((rows, item, index) => {
      if (index % 2 === 0) {
        // Bắt đầu một hàng mới
        rows.push([item]);
      } else {
        // Thêm mục vào hàng hiện tại
        rows[rows.length - 1].push(item);
      }
      return rows;
    }, [])
    .map((row, rowIndex) => (
      <View
        key={rowIndex}
        style={{
          flex: 1,
          flexDirection: 'row',
          marginBottom: 20, // Điều chỉnh khoảng cách giữa các hàng
        }}
      >
        {row.map((item, itemIndex) => (
          <TouchableOpacity
            key={itemIndex}
            onPress={() => {
              navigate('Screen03', {
                item: item,
              })
            }}
            style={{
              flex: 1,
              marginTop:30,
              marginHorizontal: 78,
              width: screenHeight * 0.005,
              height: screenHeight * 0.46,
              backgroundColor: '#F7BA8326',
              borderRadius: 10,
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Image
              source={require('./assets/icons_heart.png')}
              style={{
                width: 25,
                height: 25,
                position: 'absolute',
                top: 10,
                left: 10, 
              }}
            /> 
            <View
              style={{
                position: 'relative',
                height: 19,
                marginTop: 10, // Điều chỉnh khoảng cách giữa ảnh và văn bản
                alignItems: 'center',
              }}
            >
            <Image
              source={item.image}
              style={{
                width: 180,
                height: 250,
              }}
              resizeMode="contain"
            /> 
            <View
              style={{
                height: 19,
                marginTop: 5, // Điều chỉnh khoảng cách giữa ảnh và văn bản
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 19,
                  color: '#000000',
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  fontSize: 19,
                  fontWeight: 'bold',
                  color: '#000',
                }}
              >
                {item.price}
              </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    ))}
</ScrollView>
      </View>
    
        
            
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: '#f0f0f0',
      borderRadius: 20,
      overflow: 'hidden',
    },
    tab: {
      flex: 1,
      paddingVertical: 10,
      alignItems: 'center',
    },
    activeTab: {
      backgroundColor: '#E94141',
    },
    tabText: {
      color: '#000',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  
  export default Screen02;
  