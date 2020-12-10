
import React from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native';
import styles from './styles'

const louder = ({ navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress = {() => navigation.navigate('Login')}>
        <Image style={styles.centercontainer} source={ require('../../assets/icon1.png')}/>
      </TouchableHighlight>
    </View>
  );
}
export default louder;