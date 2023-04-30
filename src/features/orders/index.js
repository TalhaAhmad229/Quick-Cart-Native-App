import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const Orders = () => {
  return (
    <View style={styles.container}>
      <Text>Orders</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});

export default Orders;
