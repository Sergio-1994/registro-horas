import {React, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import {USERS} from '../helpers/db';
import {useNavigation} from '@react-navigation/native';
const {SafeAreaView} = require('react-native');

function Login() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (username == '' || password == '') {
      setMessage('Los campos no pueden estar vacios');
      return setError(true);
    }

    USERS.forEach(el => {
      if (username === el.username && password === el.password) {
        navigation.navigate('HomeMenu')
      } else {
        setMessage('Usuario o contraseña incorrectos');
        return setError(true);
      }
      setError(false);
    });
  };

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.img}
        />
        <TextInput
          placeholderTextColor="#000"
          style={styles.input}
          placeholder="username"
          onChangeText={value => setUsername(value)}
        />
        <TextInput
          placeholderTextColor="#000"
          style={styles.input}
          placeholder="password"
          secureTextEntry={true}
          onChangeText={value => setPassword(value)}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.text}>SIGN IN</Text>
        </TouchableOpacity>
        {error && <Text style={{color: 'red'}}>{message}</Text>}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Register');
          }}>
          <Text style={{color: '#222', fontWeight: 'bold', fontSize: 18}}>
            ¿Don't have an account?
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
    height: '100%',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 300,
    height: 300,
  },
  input: {
    width: '80%',
    marginBottom: 30,
    padding: 15,
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomWidth: 0.2,
  },
  button: {
    width: '80%',
    alignItems: 'center',
    padding: 15,
    borderRadius: 30,
    marginBottom: 10,
    backgroundColor: '#333333',
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default Login;
