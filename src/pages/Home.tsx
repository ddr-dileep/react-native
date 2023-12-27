import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MyText from '../components/MyText';
import MyImage from '../components/MyImage';
import MyButton from '../components/MyButton';

export default function Home({navigation}: any) {
  const goToLoginScreen = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headingTop}>
          <MyText text="Welcome to myApp" varient="large" />
          <MyImage
            style={styles.image}
            src="https://e7.pngegg.com/pngimages/154/803/png-clipart-computer-icons-user-profile-avatar-blue-heroes.png"
          />
          <MyButton onPress={goToLoginScreen} style={styles.homeButton}>
            <Text style={styles.homeButtonText}>check this </Text>
          </MyButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 7,
  },
  headingTop: {
    paddingVertical: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginVertical: 50,
  },
  homeButton: {
    backgroundColor: '#0066FF',
  },
  homeButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});
