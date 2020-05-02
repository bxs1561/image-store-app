import React, {useEffect, useState} from 'react';
import FetchData from './FetchData';
import {ScrollView, StyleSheet, Text} from 'react-native';
import _ from 'lodash';
import ImageList from './ImageList';
const ImageData = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    FetchData().then((data) => {
      setDatas(data);
    });
  }, []);
  return(
      <ScrollView>
        {_.map(datas, (items) => <ImageList key={items.id} data={items} />)}
      </ScrollView>
  );
};


export default ImageData;


