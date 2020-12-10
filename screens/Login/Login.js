import React, { useState } from 'react';
import { Text, View, TouchableHighlight, TextInput } from 'react-native';
import firebaseService from '../../services/firebase';
import styles from './styles'



const Login = ({navigation}) => {
  const [user,setUser] = useState('')
  const [pass, setPass] = useState('')
  const onPressLogin = async () => {
    try{
      await firebaseService.firebaseService.Login(user,pass)
      navigation.navigate('Home')
    } catch (e) {
      alert(e)
    }
  }

  
    return (
      <View style={styles.container}>
        <View>
          <TextInput
          placeholder = "Email"
          style= {styles.InputText}
          value={user}
          onChange={(e) => setUser(e.nativeEvent.text)}
          />
          <TextInput
          placeholder = "Password"
          secureTextEntry={true}
          keyboardType='numeric'
          style= {styles.InputText}
          value={pass}
          onChange={(e) => setPass(e.nativeEvent.text)}
          />
        </View>
        <TouchableHighlight style= {styles.Button} onPress = {onPressLogin}>
          <Text style= {styles.TextButton  }>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight style= {styles.Button1} onPress = {() => navigation.navigate('SingUp')}>
          <Text style= {styles.TextButton }>Sing Up </Text>
        </TouchableHighlight>
      </View>
    );
}


export default Login;