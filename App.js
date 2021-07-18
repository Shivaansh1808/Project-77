import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import DailyPicScreen from './screens/DailyPicScreen';
import HomeScreen from './screens/HomeScreen';
import SpaceCraftsScreen from './screens/SpaceCraftsScreen';
import StarMapScreen from './screens/StarMapScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'

const Stack = createStackNavigator();

export default class App extends React.Component {
  render(){
    return(
    
      <NavigationContainer>
        <Stack.Navigator initialRouteName = "Home" screenOptions = {{headerShown: false}}>

          <Stack.Screen name = "Home" component = {HomeScreen}/>
          <Stack.Screen name = "SpaceCrafts" component = {SpaceCraftsScreen}/>
          <Stack.Screen name = "DailyPic" component = {DailyPicScreen}/>
          <Stack.Screen name = "StarMap" component = {StarMapScreen}/>

        </Stack.Navigator>
      </NavigationContainer>
    )
  }  
  }
  