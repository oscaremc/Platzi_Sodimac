
import React from 'react';
import { Button, TextInput, View } from 'react-native';
import styles from './styles'



function Home({ navigation }) {
  return (
    <View style={styles.Homecontainer}>
      <Button   onPress={() => navigation.navigate('CreateBanners')} title="CreateBarnners"/>
      
      <Button  style= {styles.Button} onPress={() => navigation.navigate('GetBanners')} title="GetBarnners"/>
    </View>
    
    
  );
}

export default Home;