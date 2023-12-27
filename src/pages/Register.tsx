import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';
import MyText from '../components/MyText';
import {CONSTANTS} from '../utils/constants';
import MyInput from '../components/MyInput';
import MyButton from '../components/MyButton';
import AsyncStorage from '@react-native-async-storage/async-storage';


const image = {uri: CONSTANTS.defaultImage};

const Register = ({navigation}: any) => {

  const onhandleChange = async (event: Event) => {
    try {
      await AsyncStorage.setItem('my-key', 'value');
    } catch (e) {
      // saving error
    }
  };

  const onRegisterPress = (event: Event) => {
    // const storage = AsyncStorage;
    navigation.navigate('OtpScreen');
  };

  const goToLoginScreen = () => {
    navigation.navigate('Login');
  };

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.imageBG}>
      <ScrollView>
        <View style={styles.registerTop}>
          <MyText
            text="Welcome to register"
            style={styles.headingText}
            varient="large"
          />
        </View>
        <View style={styles.registerForm}>
          <MyInput placeholder="Enter email" onChangeText={onhandleChange} />
          <MyInput placeholder="Enter username" onChangeText={onhandleChange} />
          <MyInput placeholder="Enter password" onChangeText={onhandleChange} />
          <MyButton onPress={onRegisterPress} style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Register</Text>
          </MyButton>
        </View>
        <View style={styles.registerArea}>
          <Text style={styles.dontHaveAccountText}>Already have accoun?</Text>
          <MyButton onPress={goToLoginScreen}>
            <Text style={styles.dontHaveAccountButton}>Login</Text>
          </MyButton>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  registerContainer: {
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
  registerTop: {
    display: 'flex',
    alignItems: 'center',
  },
  registerImage: {
    width: 200,
    height: 150,
    marginHorizontal: 'auto',
    display: 'flex',
  },
  imageBG: {
    flex: 1,
  },
  registerForm: {},
  registerButton: {
    backgroundColor: 'green',
    borderRadius: 22,
    paddingVertical: 15,
    marginVertical: 10,
  },
  registerButtonText: {
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

export default Register;
