import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Banner from './components/Banner';
import Card from '../../components/Card';
import ProductCard from '../../components/ProductCard';
import MenuBar from './components/MenuBar';
import {FlatList} from 'react-native-gesture-handler';
import COLORS from '../../constants/colors';

const categories = [
  {
    id: 1,
    name: 'Category 1',
    url: 'https://images.faisalburger.com/12-pieces-with-fries-2100.jpg',
  },
  {
    id: 2,
    name: 'Category 2',
    url: 'https://images.faisalburger.com/12-pieces-with-fries-2100.jpg',
  },
  {
    id: 3,
    name: 'Category 3',
    url: 'https://images.faisalburger.com/12-pieces-with-fries-2100.jpg',
  },
  {
    id: 4,
    name: 'Category 4',
    url: 'https://images.faisalburger.com/12-pieces-with-fries-2100.jpg',
  },
  {
    id: 5,
    name: 'Category 5',
    url: 'https://images.faisalburger.com/12-pieces-with-fries-2100.jpg',
  },
  {
    id: 6,
    name: 'Category 6',
    url: 'https://images.faisalburger.com/12-pieces-with-fries-2100.jpg',
  },
  {
    id: 7,
    name: 'Category 7',
    url: 'https://images.faisalburger.com/12-pieces-with-fries-2100.jpg',
  },
  {
    id: 8,
    name: 'Category 8 ',
    url: 'https://images.faisalburger.com/12-pieces-with-fries-2100.jpg',
  },
];

const allProducts = [
  {
    id: 1,
    name: 'Category 1',
    url: 'https://images.faisalburger.com/12-pieces-with-fries-2100.jpg',
    products: [
      {
        id: 1,
        name: 'Product 1',
        url: 'https://images.faisalburger.com/club-sandwich-full-with-fries-4007.jpg',
        price: '600',
        description: '1 pizza with 345ml Drink',
      },
      {
        id: 2,
        name: 'Product 2',
        url: 'https://images.faisalburger.com/chicken-grilled-faisal-special-7963.jpg',
        price: '800',
        description: '1 pizza with 345ml Drink',
      },
      {
        id: 3,
        name: 'Product 3',
        url: 'https://images.faisalburger.com/12-pieces-with-fries-2100.jpg',
        price: '250',
        description: '1 pizza with 345ml Drink',
      },
      {
        id: 4,
        name: 'Product 4',
        url: 'https://images.faisalburger.com/club-sandwich-full-with-fries-4007.jpg',
        price: '500',
        description: '1 pizza with 345ml Drink',
      },
    ],
  },
  {
    id: 2,
    name: 'Category 2',
    url: 'https://images.faisalburger.com/12-pieces-with-fries-2100.jpg',
    products: [
      {
        id: 1,
        name: 'Product 1',
        url: 'https://images.faisalburger.com/chicken-grilled-faisal-special-7963.jpg',
        price: '600',
        description: '1 pizza with 345ml Drink',
      },
      {
        id: 2,
        name: 'Product 2',
        url: 'https://images.faisalburger.com/club-sandwich-full-with-fries-4007.jpg',
        price: '800',
        description: '1 pizza with 345ml Drink',
      },
      {
        id: 3,
        name: 'Product 3',
        url: 'https://images.faisalburger.com/12-pieces-with-fries-2100.jpg',
        price: '250',
        description: '1 pizza with 345ml Drink',
      },
      {
        id: 4,
        name: 'Product 4',
        url: 'https://images.faisalburger.com/club-sandwich-full-with-fries-4007.jpg',
        price: '500',
        description: '1 pizza with 345ml Drink',
      },
    ],
  },
  {
    id: 3,
    name: 'Category 3',
    url: 'https://images.faisalburger.com/12-pieces-with-fries-2100.jpg',
    products: [
      {
        id: 1,
        name: 'Product 1',
        url: 'https://images.faisalburger.com/chicken-grilled-faisal-special-7963.jpg',
        price: '600',
        description: '1 pizza with 345ml Drink',
      },
      {
        id: 2,
        name: 'Product 2',
        url: 'https://images.faisalburger.com/club-sandwich-full-with-fries-4007.jpg',
        price: '800',
        description: '1 pizza with 345ml Drink',
      },
      {
        id: 3,
        name: 'Product 3',
        url: 'https://images.faisalburger.com/12-pieces-with-fries-2100.jpg',
        price: '250',
        description: '1 pizza with 345ml Drink',
      },
      {
        id: 4,
        name: 'Product 4',
        url: 'https://images.faisalburger.com/club-sandwich-full-with-fries-4007.jpg',
        price: '500',
        description: '1 pizza with 345ml Drink',
      },
    ],
  },
  {
    id: 4,
    name: 'Category 4',
    url: 'https://images.faisalburger.com/12-pieces-with-fries-2100.jpg',
    products: [
      {
        id: 1,
        name: 'Product 1',
        url: 'https://images.faisalburger.com/chicken-grilled-faisal-special-7963.jpg',
        price: '600',
        description: '1 pizza with 345ml Drink',
      },
      {
        id: 2,
        name: 'Product 2',
        url: 'https://images.faisalburger.com/club-sandwich-full-with-fries-4007.jpg',
        price: '800',
        description: '1 pizza with 345ml Drink',
      },
      {
        id: 3,
        name: 'Product 3',
        url: 'https://images.faisalburger.com/12-pieces-with-fries-2100.jpg',
        price: '250',
        description: '1 pizza with 345ml Drink',
      },
      {
        id: 4,
        name: 'Product 4',
        url: 'https://images.faisalburger.com/club-sandwich-full-with-fries-4007.jpg',
        price: '500',
        description: '1 pizza with 345ml Drink',
      },
    ],
  },
  {
    id: 5,
    name: 'Category 5',
    url: 'https://images.faisalburger.com/club-sandwich-full-with-fries-4007.jpg',
    products: [
      {
        id: 1,
        name: 'Product 1',
        url: 'https://images.faisalburger.com/chicken-grilled-faisal-special-7963.jpg',
        price: '600',
        description: '1 pizza with 345ml Drink',
      },
      {
        id: 2,
        name: 'Product 2',
        url: 'https://images.faisalburger.com/club-sandwich-full-with-fries-4007.jpg',
        price: '800',
        description: '1 pizza with 345ml Drink',
      },
      {
        id: 3,
        name: 'Product 3',
        url: 'https://images.faisalburger.com/12-pieces-with-fries-2100.jpg',
        price: '250',
        description: '1 pizza with 345ml Drink',
      },
      {
        id: 4,
        name: 'Product 4',
        url: 'https://images.faisalburger.com/club-sandwich-full-with-fries-4007.jpg',
        price: '500',
        description: '1 pizza with 345ml Drink',
      },
    ],
  },
  {
    id: 6,
    name: 'Category 6',
    url: 'https://images.faisalburger.com/club-sandwich-full-with-fries-4007.jpg',
    products: [
      {
        id: 1,
        name: 'Product 1',
        url: 'https://images.faisalburger.com/chicken-grilled-faisal-special-7963.jpg',
        price: '600',
        description: '1 pizza with 345ml Drink',
      },
      {
        id: 2,
        name: 'Product 2',
        url: 'https://images.faisalburger.com/club-sandwich-full-with-fries-4007.jpg',
        price: '800',
        description: '1 pizza with 345ml Drink',
      },
      {
        id: 3,
        name: 'Product 3',
        url: 'https://images.faisalburger.com/12-pieces-with-fries-2100.jpg',
        price: '250',
        description: '1 pizza with 345ml Drink',
      },
      {
        id: 4,
        name: 'Product 4',
        url: 'https://images.faisalburger.com/club-sandwich-full-with-fries-4007.jpg',
        description: '1 pizza with 345ml Drink',
      },
    ],
  },
  {
    id: 7,
    name: 'Category 7',
    url: 'https://images.faisalburger.com/12-pieces-with-fries-2100.jpg',
    products: [
      {
        id: 1,
        name: 'Product 1',
        url: 'https://images.faisalburger.com/chicken-grilled-faisal-special-7963.jpg',
        price: '600',
        description: '1 pizza with 345ml Drink',
      },
      {
        id: 2,
        name: 'Product 2',
        url: 'https://images.faisalburger.com/club-sandwich-full-with-fries-4007.jpg',
        price: '800',
        description: '1 pizza with 345ml Drink',
      },
      {
        id: 3,
        name: 'Product 3',
        url: 'https://images.faisalburger.com/12-pieces-with-fries-2100.jpg',
        price: '250',
        description: '1 pizza with 345ml Drink',
      },
      {
        id: 4,
        name: 'Product 4',
        url: 'https://images.faisalburger.com/club-sandwich-full-with-fries-4007.jpg',
        price: '500',
        description: '1 pizza with 345ml Drink',
      },
    ],
  },
  {
    id: 8,
    name: 'Category 8 ',
    url: 'https://images.faisalburger.com/12-pieces-with-fries-2100.jpg',
    products: [
      {
        id: 1,
        name: 'Product 1',
        url: 'https://images.faisalburger.com/chicken-grilled-faisal-special-7963.jpg',
        price: '600',
        description: '1 pizza with 345ml Drink',
      },
      {
        id: 2,
        name: 'Product 2',
        url: 'https://images.faisalburger.com/club-sandwich-full-with-fries-4007.jpg',
        price: '800',
        description: '1 pizza with 345ml Drink',
      },
      {
        id: 3,
        name: 'Product 3',
        url: 'https://images.faisalburger.com/12-pieces-with-fries-2100.jpg',
        price: '250',
        description: '1 pizza with 345ml Drink',
      },
      {
        id: 4,
        name: 'Product 4',
        url: 'https://images.faisalburger.com/club-sandwich-full-with-fries-4007.jpg',
        price: '500',
        description: '1 pizza with 345ml Drink',
      },
    ],
  },
];

const data = [
  {
    id: 1,
    image:
      'https://images.faisalburger.com/club-sandwich-full-with-fries-4007.jpg',
  },
  {
    id: 2,
    image:
      'https://images.faisalburger.com/chicken-grilled-faisal-special-7963.jpg',
  },
  {
    id: 3,
    image: 'https://images.faisalburger.com/12-pieces-with-fries-2100.jpg',
  },
];

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderCategory = ({item, index}) => {
    return (
      <TouchableOpacity
        key={item.id}
        style={{
          margin: 20,
          borderColor: index === activeIndex ? COLORS.primary : COLORS.white,
          borderBottomWidth: 5,
          paddingBottom: 5,
        }}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderProducts = ({item, index}) => {
    return (
      <View style={styles.productsContainer}>
        <ScrollView showsVerticalScrollIndicator={false} vertical={true}>
          {allProducts[index].products.map(product => (
            <ProductCard {...product} />
          ))}
        </ScrollView>
      </View>
    );
  };

  const scrollToActiveIndex = index => {
    setActiveIndex(index);
  };

  const categoryFlatlistRef = useRef();
  const productsFlatlistRef = useRef();

  return (
    <View style={styles.container}>
      <MenuBar />
      <Banner data={data} />
      <View style={styles.categories}>
        <View style={styles.section}>
          <FlatList
            data={allProducts}
            ref={productsFlatlistRef}
            renderItem={renderProducts}
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            onMomentumScrollEnd={ev => {
              scrollToActiveIndex(
                Math.floor(ev.nativeEvent.contentOffset.x / width),
              );
            }}
          />
          <FlatList
            data={categories}
            ref={categoryFlatlistRef}
            renderItem={renderCategory}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.categoriesContainer}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  section: {
    position: 'relative',
  },
  productsContainer: {
    height: 'auto',
    paddingTop: 60,
    paddingHorizontal: 20,
    width: width,
  },
  categoriesContainer: {
    position: 'absolute',
    top: 0,
  },
});

export default Home;
