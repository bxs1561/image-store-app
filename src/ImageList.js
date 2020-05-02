import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {Image} from 'react-native-elements';
import {StyleSheet, Text, View, SafeAreaView, Dimensions, ActivityIndicator} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import _ from 'lodash';
import {Count} from './ImageData';

const ImageList = ({data}) => {
  return (
    <Image
      source={{uri: 'http://localhost:3000/' + data.image.url}}
      style={{width: Dimensions.get('window').width, height: 200}}
      PlaceholderContent={<ActivityIndicator />}
    />
  );
};
export default ImageList;
