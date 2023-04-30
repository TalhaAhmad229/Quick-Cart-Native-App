import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

const CustomPicker = ({types}) => {
  const [selectedValue, setSelectedValue] = useState(types[0]);

  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
  },
  selectedValue: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default CustomPicker;
