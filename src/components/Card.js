import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, Animated, Image} from 'react-native';

const Card = ({name, url}) => {
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
      <Image source={url} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
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
    margin: 10,
    marginStart: 0,
    minWidth: 100,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
  image: {
    width: '100%',
    height: 80,
    resizeMode: 'cover',
    // marginBottom: 5,
    // borderRadius: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Card;
