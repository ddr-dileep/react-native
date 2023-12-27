import { StyleSheet, Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from './chat';
import CallScreen from './call';
import StatusScreen from './status';

const Tab = createMaterialTopTabNavigator();

const TopTabBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Status" component={StatusScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Calls" component={CallScreen} />
    </Tab.Navigator>
  );
}

export default TopTabBar;

const styles = StyleSheet.create({})