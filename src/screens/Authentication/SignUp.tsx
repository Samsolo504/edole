import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Button, Surface, TextInput, Text} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {Login} from '../../redux/store/actions';
import {loginBg, Colors} from '../../utils/constants';

export default function SignUpScreen() {
  const [username, setUsername] = useState<string>('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useDispatch<any>();
  const submit = () => {
    dispatch(Login(username, password));
  };
  return (
    <View style={styles.container}>
      <Image
        style={StyleSheet.absoluteFillObject}
        source={{uri: loginBg}}
        blurRadius={10}
      />
      <Text style={styles.title}>Sign Up</Text>
      <Surface style={styles.box}>
        <View>
          <TextInput
            label="Name"
            mode="outlined"
            value={name}
            onChangeText={text => setName(text)}
          />
          <TextInput
            label="Username"
            mode="outlined"
            value={username}
            onChangeText={text => setUsername(text)}
          />
          <TextInput
            label="Email"
            mode="outlined"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            label="Password"
            mode="outlined"
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <Button
          mode="contained"
          color={Colors.blue}
          style={{marginTop: 20}}
          onPress={submit}>
          Submit
        </Button>
      </Surface>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 28,
    backgroundColor: Colors.blue,
  },
  box: {
    borderRadius: 10,
    elevation: 5,
    padding: 20,
    height: 350,
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    color: Colors.white,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});
