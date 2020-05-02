import 'react-native-gesture-handler';
import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import {ScrollView} from 'react-native';
import {useScrollToTop} from '@react-navigation/native';
import _ from 'lodash';
import DataCard from './DataCard';
import ImageList from './ImageList';

const FetchData = async () => {
  return await axios
    .get('http://localhost:3000/api/v1/image-store')
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      return [];
    });
};

// function DataList() {
//   const [datas, setDatas] = useState([]);
//
//   useEffect(() => {
//     FetchData().then((data) => {
//       setDatas(data);
//     });
//   }, []);
//   // const ref = useRef(null);
//   // useScrollToTop(ref);
//
//   return (
//     <ScrollView>
//       <ScrollView
//         vertical
//         showsVerticalScrollIndicator={false}
//         style={{paddingTop: 100}}>
//         {_.map(
//           datas,
//           (items) => (
//             (<DataCard key={items.id} data={items} />),
//             (<ImageList key={items.id} data={items} />)
//           ),
//         )}
//       </ScrollView>
//     </ScrollView>
//   );
// }
// export default DataList;
export default FetchData
