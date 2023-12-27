import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const MyButton = ({children, onPress, style}: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      {children}
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    textAlign: 'center',
    borderRadius: 10,
    shadowColor: '#0066FF',
  },
});
