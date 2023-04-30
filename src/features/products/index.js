import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Card from '../../components/Card';

const products = [
  {
    id: 1,
    name: 'Product 1',
    url: require('../../assets/logo.jpeg'),
    price: '600',
    sales: '202',
    types: '500 gm',
  },
  {
    id: 2,
    name: 'Product 2',
    url: require('../../assets/logo.jpeg'),
    price: '800',
    sales: '275',
    types: '500 gm',
  },
  {
    id: 3,
    name: 'Product 3',
    url: require('../../assets/logo.jpeg'),
    price: '250',
    sales: '180',
    types: '500 gm',
  },
  {
    id: 4,
    name: 'Product 4',
    url: require('../../assets/logo.jpeg'),
    price: '500',
    sales: '100',
    types: '500 gm',
  },
];

const Products = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {products.map(product => (
          <Card {...element} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 60,
  },
  category: {
    marginTop: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Products;
