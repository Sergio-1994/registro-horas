import {React, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  Pressable,
  Alert,
} from 'react-native';
import {USERS} from '../helpers/db';
import {useNavigation} from '@react-navigation/native';
const {SafeAreaView} = require('react-native');

function Register() {
  const navigation = useNavigation();
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (username === '' || password === '' || phone === '') {
      setMessage('Los campos no pueden estar vacios');
      return setError(true);
    }
    if (password.length < 8) {
      setMessage('La calve debe tener mas de 8 caracteres');
      return setError(true);
    }

    if (!/[A-Z]/.test(password)) {
      setMessage('La calve debe contener una letra mayuscula');
      return setError(true);
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setMessage('La calve debe contener caracteres especiales');
      return setError(true);
    }

    const s = 8
    if(USERS.findIndex(el => el.username === username) != -1){
      setMessage('El usuario ingresado ya existe');
      return setError(true);
    }
    

    const objUsers = {username, password, phone};
    USERS.push(objUsers);

    Alert.alert('Información', 'Usuario registrado correctamente');
    navigation.navigate('HomeMenu');
    setError(false);
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
          onChangeText={value => setusername(value)}
        />
        <TextInput
          placeholderTextColor="#000"
          style={styles.input}
          placeholder="password"
          secureTextEntry={true}
          onChangeText={value => setPassword(value)}
        />
        <TextInput
          keyboardType="numeric"
          placeholderTextColor="#000"
          style={styles.input}
          placeholder="Phone"
          onChangeText={value => setPhone(value)}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.text}>SIGN UP</Text>
        </TouchableOpacity>
        {error && <Text style={{color: 'red'}}>{message}</Text>}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={{color: '#222', fontWeight: 'bold', fontSize: 18}}>
            I already have an account
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

export default Register;
