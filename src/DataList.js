import React, {useEffect, useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import _ from 'lodash';
import {Button} from 'react-native-elements';

import DataCard from './DataCard';
import ImageList from './ImageList';
import FetchData from './FetchData';
import ImageData from './ImageData';

function DataList({navigation}) {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    FetchData().then((data) => {
      setDatas(data);
    });
  }, []);
  // const ref = useRef(null);
  // useScrollToTop(ref);

  return (
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        style={{paddingTop: 20}}>
        {/*<Button onPress={()=>{("click")}}/>*/}

        {_.map(datas, (items) => (
            <TouchableOpacity onPress={()=> navigation.navigate('image')}>
            <DataCard key={items.id} data={items}   />
            </TouchableOpacity>

          ))}
      </ScrollView>
  );
}
export default DataList;
