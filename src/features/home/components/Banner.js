import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const Banner = ({data}) => {
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Image
        source={{
          uri: item.image,
        }}
        style={styles.image}
      />
    </View>
  );
  const containerStyle = {
    width: '100%',
  };
  const containerWidth = Dimensions.get('window').width * 1;
  const width = containerWidth;

  const activeSlideAlignment = 'start';
  const inactiveSlideScale = 1;

  return (
    <View>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width}
        loop={true}
        autoplay={true}
        autoplayInterval={3000}
        containerStyle={containerStyle}
        activeSlideAlignment={activeSlideAlignment}
        inactiveSlideScale={inactiveSlideScale}
      />
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 200,
    width: '100%',
    resizeMode: 'stretch',
  },
});
