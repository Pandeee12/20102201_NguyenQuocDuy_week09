import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList, Dimensions,ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import {AntDesign} from '@expo/vector-icons';
import x1 from '../assets/x1.png';
import x2 from '../assets/x2.png';
import x3 from '../assets/x3.png';
import x4 from '../assets/x4.png';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export default function Sc02({navigation} ) {
  const [data, setData] = useState([]);

  // Mảng chứa các ảnh
  const images = [x1, x2, x3, x4];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://65658a50eb8bb4b70ef1c04b.mockapi.io/api/items');
        const result = await response.json();

        console.log("Fetched data:", result);

        if (Array.isArray(result)) {
          setData(result);
        } else {
          console.error("Unexpected data format:", result);
          setData([]);
        }
      } catch (error) {
        console.error('Error fetching food data:', error);
      }
    };
  
    fetchData();
  }, []);

  const renderItem = ({ item, index }) => (
  <TouchableOpacity 
    style={styles.itemContainer}
    onPress={() => navigation.navigate('Details', { 
      item: { ...item, image: images[index % images.length] }
    })} 
    // onPress={() => navigation.navigate('Details', { item })} 
  >
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <AntDesign name="heart" size={18} style={styles.heartIcon} />
      <Image 
        source={images[index % images.length]} 
        style={styles.itemImage} 
        resizeMode="cover" 
      />
    </View>
    <View style={{ alignItems: 'center' }}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>${item.price}</Text>
    </View>
  </TouchableOpacity>
);


  return (
    <ScrollView style={styles.container}>
      <View style={{ margin: '2%' }}>
        <Text style={styles.title}>The World’s Best Bike</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Mountain</Text>
        </TouchableOpacity>
      </View>

      {Array.isArray(data) && data.length > 0 ? (
        <FlatList 
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id || index.toString()} 
          contentContainerStyle={{ marginTop: '10%' }}
          numColumns={2}
        />
      ) : (
        <Text style={{ textAlign: 'center', marginTop: 20 }}>No items to display</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    fontFamily: 'Ubuntu',
    color: '#E94141',
    fontSize: 25,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '10%',
  },
  button: {
    borderRadius: 5,
    width: '28%',
    height: 40,
    borderColor: '#E9414187',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Voltaire',
    fontSize: 20,
    fontWeight: '400',
  },
  itemContainer: {
    justifyContent: 'center',
    width: '45%',
    height: 230,
    margin: '2%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    padding: 10,
  },
  heartIcon: {
    margin: '5%',
    position: 'absolute',
    top: 5,
    right: 5,
  },
  itemImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  itemName: {
    fontWeight: '400',
    fontSize: 18,
    marginTop: 10,
  },
  itemPrice: {
    fontFamily: 'Voltaire',
    fontWeight: '400',
    fontSize: 18,
    marginTop: 5,
  },
});
