import {StyleSheet, View} from 'react-native';
import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerHome from './DrawerHome';
import DrawerAbout from './DrawerAbout';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
      <Drawer.Navigator>
        <Drawer.Screen name="SideHome" component={DrawerHome} />
        <Drawer.Screen name="SideDrawerAbout" component={DrawerAbout} />
      </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const DrawerNavigation = () => {
//   return (
//     <View>
//       <Text>dfgbfdsafgb</Text>
//     </View>
//   )
// }

// export default DrawerNavigation;

// const styles = StyleSheet.create({})