import React from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MenuBar = () => {
  const icons = ['search-outline', 'help-circle-outline', 'person-outline'];
  return (
    <View style={styles.container}>
      {icons.map(icon => (
        <Icon style={styles.icon} name={icon} size={30} color={'#000'} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    paddingVertical: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default MenuBar;
