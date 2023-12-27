import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyText = ({varient, text, style}: any) => {
  const textSize =
    varient === 'large'
      ? styles['large']
      : varient === 'medium'
      ? styles['medium']
      : styles['small'];
  return (
    <View>
      <Text style={[textSize, style]}>{text}</Text>
    </View>
  );
};

export default MyText

const styles = StyleSheet.create({
  large: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'green',
  },
  medium: {
    color: 'green',
    fontSize: 22,
    fontWeight: 'bold',
  },
  small: {
    color: 'grey',
  },
});