/* eslint-disable prettier/prettier */
import * as React from 'react';
import { TouchableOpacity, View, Text, TextInput, Button } from 'react-native';
import { useState } from 'react';
import styles from './styles';


function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  const handleEmailChange = (text) => {
    setEmail(text);
    // Check if the input follows the email format using regex
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setIsValidEmail(emailPattern.test(text));
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.rowContainer}>
        <Text style={styles.labelText}>Email:</Text>
        <View style={styles.inputView}>
          <TextInput style={[styles.inputText, !isValidEmail && styles.invalidInput]} value={email} onChangeText={handleEmailChange} keyboardType="email-address" placeholder="Enter email" />
        </View>
      </View>
      <View>
        {!isValidEmail && <Text style={styles.errorText}>Invalid email format, Please Enter Your E-mail </Text>}
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.labelText}>Password:</Text>
        <View style={styles.inputView}>
          <TextInput style={[styles.inputText]} value={password} onChangeText={handlePasswordChange} secureTextEntry={!isChecked}  placeholder="Enter password" />
        </View>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={toggleCheckbox}>
          <View style={styles.checkboxContainer}>
            <View style={styles.checkbox}>
              {isChecked && <View style={styles.checkboxInner} />}
            </View>
            <Text>Show Password</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('ToDo',{ email })}>
        <Text style={styles.textBtn}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.textRead}>Forgot Username / Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.textRead}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
