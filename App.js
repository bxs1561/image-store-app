import React from 'react';
import {View} from 'react-native';
import ImageData from './src/ImageData';
import DataList from './src/DataList';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/Tabs';
const App = () => {
  return (
    // <View>
    //     <DataList/>
    //  </View>
      <NavigationContainer>
      <Tabs/>
          </NavigationContainer>

          );
};
export default App;
