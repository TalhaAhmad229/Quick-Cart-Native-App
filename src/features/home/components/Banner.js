import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Banner = ({message}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8d7da',
    padding: 10,
  },
  text: {
    color: '#721c24',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
