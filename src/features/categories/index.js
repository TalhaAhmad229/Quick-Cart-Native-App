import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Card from '../../components/Card';

const categories = [
  {
    id: 1,
    name: 'Promotions',
    data: [
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
    ],
  },
  {
    id: 1,
    name: 'New Arrivals',
    data: [
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
    ],
  },
  {
    id: 1,
    name: 'Cosmetics',
    data: [
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
    ],
  },
  {
    id: 1,
    name: 'Mobile Phone',
    data: [
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
    ],
  },
  {
    id: 1,
    name: 'Watches',
    data: [
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
    ],
  },
  {
    id: 1,
    name: 'Laptops',
    data: [
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
    ],
  },
  {
    id: 1,
    name: 'Food',
    data: [
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
    ],
  },
];

const Categories = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {categories.map(category => (
          <View style={styles.category}>
            <Text style={styles.heading}>{category.name}</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {category.data.map(element => (
                <Card {...element} />
              ))}
            </ScrollView>
          </View>
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

export default Categories;
