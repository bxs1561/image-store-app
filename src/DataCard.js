import React from 'react';
import FetchData from './FetchData';
import {StyleSheet} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import {ListItem, Icon} from 'react-native-elements';
import {Text, TouchableOpacity, View} from 'react-native';
import ShadowCard from './ShadowCard';

const DataCard = ({data, navigation}) => {
  return (
    <ShadowCard>
      <ListItem
        // Component={TouchableScale}
        // friction={90}
        // tension={100}
        // activeScale={0.95}
        title={data.first_name}
        titleStyle={{color: 'black', fontWeight: 'bold'}}
        subtitle={data.category}
        subtitleStyle={{paddingLeft: 15}}
        chevron={{color: 'black'}}
        leftAvatar={{ rounded: true, source: { uri:"http://localhost:3000/" + data.image.url } }}
      />
    </ShadowCard>
  );
};
export default DataCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
