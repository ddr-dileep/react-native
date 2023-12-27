import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import MyText from '../components/MyText'
import { CONSTANTS } from '../utils/constants';
import MyInput from '../components/MyInput';
import MyButton from '../components/MyButton';

const image = {uri: CONSTANTS.defaultImage};

const Login = ({navigation}: any) => {
  const onhandleChange = () => {
  };

  const onLoginPress = () => {
    navigation.navigate('Dashboard');
  };

  const goToRegisterScreen = () => {
    navigation.navigate('Register');
  };

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.imageBG}>
      <ScrollView>
        <View style={styles.loginTop}>
          <MyText
            text="Welcome to login"
            style={styles.headingText}
            varient="large"
          />
        </View>
        <View style={styles.loginForm}>
          <MyInput placeholder="Enter email" onChangeText={onhandleChange} />
          <MyInput placeholder="Enter password" />
          <MyButton onPress={onLoginPress} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </MyButton>
          <View style={styles.registerArea}>
            <Text style={styles.dontHaveAccountText}>Don't have accoun?</Text>
            <MyButton onPress={goToRegisterScreen}>
              <Text style={styles.dontHaveAccountButton}>Register</Text>
            </MyButton>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  headingText: {
    textAlign: 'center',
    paddingVertical: 25,
    borderRadius: 12,
    color: 'white',
  },
  loginTop: {
    display: 'flex',
    alignItems: 'center',
  },
  loginImage: {
    width: 200,
    height: 150,
    marginHorizontal: 'auto',
    display: 'flex',
  },
  imageBG: {
    flex: 1,
  },
  loginForm: {
    padding: 12,
  },
  loginButton: {
    backgroundColor: 'green',
    borderRadius: 22,
    paddingVertical: 15,
    marginVertical: 10,
  },
  loginButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  dontHaveAccountText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
  },
  dontHaveAccountButton: {
    color: 'aliceblue',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  registerArea: {
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});

export default Login;

