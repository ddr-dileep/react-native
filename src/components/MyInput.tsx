import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import MyImage from './MyImage';

const MyInput = ({
  value,
  onChangeText,
  style,
  keyboardType = 'default',
  placeholder,
  icon,
  iconName,
}: any) => {
  return (
    <View style={[styles.inputContainer]}>
      <TextInput
        style={[style, styles.input]}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
      {icon && <MyImage />}
    </View>
  );
};

export default MyInput;

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    padding: 2,
    backgroundColor: 'aliceblue',
    position: 'relative',
    borderRadius: 7,
    marginVertical: 7,
  },
  input: {
    height: 40,
    margin: 12,
    fontSize: 18,
  },
});
