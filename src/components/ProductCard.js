import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, View, Animated, Image} from 'react-native';
import AddToCartButton from './AddToCartButton';
import CustomPicker from './CustomPicker';
import PriceButton from './PriceButton';

const ProductCard = ({name, url, price, description}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [animatedValue]);

  const cardStyle = {
    opacity: animatedValue,
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0.5, 1],
        }),
      },
    ],
  };

  return (
    <Animated.View style={[styles.card, cardStyle]}>
      <Image source={{uri: url}} style={styles.image} />
      <View style={styles.descriptionSection}>
        <View>
          <Text style={styles.text}>{name}</Text>
          <Text>{description}</Text>
        </View>
        <View style={{position: 'absolute', bottom: 0, left: 5}}>
          <PriceButton price={price} />
          <AddToCartButton />
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#A9A9A9',
    padding: 8,
    shadowColor: '#000',
    marginVertical: 10,
    marginStart: 0,
    minWidth: 100,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    width: '40%',
    height: 150,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  descriptionSection: {
    padding: 5,
    position: 'relative',
  },
});
export default ProductCard;
