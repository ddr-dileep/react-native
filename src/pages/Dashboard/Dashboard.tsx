import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './Profile';
import Settings from './Settings';
import {BottomTab} from './BottomTab';
import TopTabBar from './TopBar/TopTabBar';
import DrawerNavigation from './Drawer';

const Tab = createBottomTabNavigator();

const Dashboard = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomTab {...props} />}>
      <Tab.Screen name="Drawerbar" component={DrawerNavigation} />
      <Tab.Screen name="TopBar" component={TopTabBar} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
