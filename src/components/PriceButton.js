import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import COLORS from '../constants/colors';

const PriceButton = ({price}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Rs. {price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 5,
    backgroundColor: COLORS.primary,
    padding: 5,
    borderRadius: 5,
    width: 100,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default PriceButton;
