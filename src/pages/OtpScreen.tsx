import {StyleSheet, Text, View} from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import MyButton from '../components/MyButton';
import MyText from '../components/MyText';
import {useState} from 'react';

const OtpScreen = ({navigate}: any) => {
  const [otpValue, setotpValue] = useState('');

  const varifyOtp = () => {
    console.log('OtpScreen', otpValue);
  };

  return (
    <View style={styles.container}>
      <MyText text="Enter Otp" varient="large" style={styles.Heading} />
      <OTPTextInput
        inputCount={6}
        offTintColor="#DCDCDC"
        tintColor="#DCDCDC"
        autoFocus={true}
        containerStyle={styles.containerOTP}
        handleTextChange={e => setotpValue(e)}
        textInputStyle={styles.containerOtpInput}
      />
      <MyButton style={styles.verifyOtpButton} onPress={varifyOtp}>
        <Text style={styles.verifyOtpButtonText}>Verify otp</Text>
      </MyButton>
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DCDCDC',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Heading: {
    marginBottom: 40,
  },
  containerOTP: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  containerOtpInput: {
    backgroundColor: 'aliceblue',
    padding: 5,
    borderRadius: 7,
  },
  verifyOtpButton: {
    backgroundColor: 'skyblue',
    paddingVertical: 8,
    paddingHorizontal: 28,
    marginTop: 25,
  },
  verifyOtpButtonText: {
    fontSize: 20,
    color: '#000',
    fontWeight: '500',
  },
});
