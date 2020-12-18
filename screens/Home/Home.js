
import React, { useState, useEffect } from 'react';
import {  View, Text } from 'react-native';
import firebase from '../../services/firebase';

const Home = () => {
 const [name, SetName ] =  useState('') 

 useEffect(() =>{

(
  async () => {
    try {
      const nameData = await firebase.firebaseService.getUserName();
      SetName(nameData);
    } catch (e) {
      alert(e);
    }
  }
)()
 }, [])
  return (
    <View style={{marginTop: -50}}>
      <Text> Welcome {name}</Text>
    </View>
  )

}
export default Home;