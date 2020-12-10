import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 10,
      marginBottom: 0,
      marginHorizontal: 10,
      justifyContent: 'center',
      paddingBottom: -80
      
    },
    container1:{
    paddingTop: 130,
    marginHorizontal: 10,
    },
    container3:{
      marginTop: 50,
      marginBottom: 90,
      marginHorizontal: 80,
      borderColor: '#ccc',
      borderRadius: 24,
      backgroundColor: 'red',
      color: 'black',
      
    },

    InputText: {
      height: 50,
      borderBottomWidth: 3,
      borderColor: '#ccc',
      paddingHorizontal: 50,
      color: 'black',
      backgroundColor: 'white',
      borderRadius: 20,
      textAlign: 'center'
    }
   
  });

  export default styles;