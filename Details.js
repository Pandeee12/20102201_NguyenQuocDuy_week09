// Details.js
import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const Details = ({ route }) => {
  const { item } = route.params; // Nhận item từ route.params

  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} /> 
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.price}>${item.price}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ecf0f1',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    color: '#E94141',
    marginVertical: 8,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
});

export default Details;
