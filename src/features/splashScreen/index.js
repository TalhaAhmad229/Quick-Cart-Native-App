import React, {useEffect} from 'react';
import {Image, StyleSheet, View, Animated, Dimensions} from 'react-native';

const SplashScreen = () => {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoContainer, {opacity: fadeAnim}]}>
        <Image source={require('../../assets/logo.jpeg')} style={styles.logo} />
      </Animated.View>
    </View>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: width,
    height: height / 2,
  },
});

export default SplashScreen;
