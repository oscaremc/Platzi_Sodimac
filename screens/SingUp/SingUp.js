
import React, { useState} from 'react';
import { Text, View, TouchableHighlight, TextInput } from 'react-native';
import firebaseService from '../../services/firebase';
import styles from './styles'



const SingUp = ({navigation}) => {
  const [name,setName] = useState('')
  const [user,setUser] = useState('')
  const [pass, setPass] = useState('')
const createUser  = async () => {
  try {
    await firebaseService.firebaseService.createUser(name, user, pass)
    navigation.navigate('Home')
  }catch (e) {
    alert (e)
  }
}

    return (
      <View style={styles.container}>
        <View>
        <TextInput
          placeholder = "Name"
          style= {styles.InputText}
          value={name}
          onChange={(e) => setName(e.nativeEvent.text)}
          />
          <TextInput
          placeholder = "Email"
          style= {styles.InputText}
          value={user}
          onChange={(e) => setUser(e.nativeEvent.text)}
          />
          <TextInput
          placeholder = "Password"
          style= {styles.InputText}
          value={pass}
          onChange={(e) => setPass(e.nativeEvent.text)}
          />
        </View>
        <TouchableHighlight style= {styles.Button} onPress = {createUser}>
          <Text style= {styles.TextButton}>Register</Text>
        </TouchableHighlight>

      </View>
    );
}

export default SingUp;