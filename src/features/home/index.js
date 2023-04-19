import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Card from './components/card';

const categories = [
  {
    id: 1,
    name: 'Category 1',
    url: require('../../assets/logo.jpeg'),
  },
  {
    id: 2,
    name: 'Category 2',
    url: require('../../assets/logo.jpeg'),
  },
  {
    id: 3,
    name: 'Category 3',
    url: require('../../assets/logo.jpeg'),
  },
  {
    id: 4,
    name: 'Category 4',
    url: require('../../assets/logo.jpeg'),
  },
];

const recommendedProducts = [
  {
    id: 1,
    name: 'Product 1',
    url: require('../../assets/logo.jpeg'),
  },
  {
    id: 2,
    name: 'Product 2',
    url: require('../../assets/logo.jpeg'),
  },
  {
    id: 3,
    name: 'Product 3',
    url: require('../../assets/logo.jpeg'),
  },
  {
    id: 4,
    name: 'Product 4',
    url: require('../../assets/logo.jpeg'),
  },
];

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.categories}>
        <View style={styles.section}>
          <Text style={styles.heading}>Shop by Category</Text>
          <Text>View All Categories</Text>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {categories.map(category => (
            <Card {...category} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.recommended}>
        <View style={styles.section}>
          <Text style={styles.heading}>Recommened for you</Text>
          <Text>View All Products</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {recommendedProducts.map(product => (
            <Card {...product} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  categories: {
    marginTop: 50,
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recommended: {
    marginTop: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Home;
