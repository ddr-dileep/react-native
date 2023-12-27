import {Image, StyleSheet} from 'react-native';
import React from 'react';
import { CONSTANTS } from '../utils/constants';

const MyImage = ({src, style}: any) => {
  return (
    <Image
      source={{
        uri: src || CONSTANTS.defaultImage,
      }}
      style={[style, styles.image]}
    />
  );
};

export default MyImage;

const styles = StyleSheet.create({
  image: {
    minHeight: 60,
    minWidth: 60,
  },
});
