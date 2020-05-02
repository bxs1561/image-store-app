import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ImageData from './ImageData';
import DataList from './DataList';
const Stack = createStackNavigator();

function Tabs() {
    return (
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={DataList} />
                <Stack.Screen name="image" component={ImageData} />
            </Stack.Navigator>
    );
}
export default Tabs;
