import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
      marginHorizontal: 10,
      justifyContent: 'center'
    },
    InputText: {
      height: 50,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 20,
      color: 'black',
      backgroundColor: 'white',
      borderRadius: 20,
      marginBottom: 10,
      textAlign: 'center'

    },
    Button:{
      paddingVertical: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      marginTop: 10,
      width: 180,
      borderRadius: 20,
      backgroundColor: 'white',
      color: 'black',
      right: -115,
    },

    TextButton:{
      textAlign: 'center',
    },
    
    
  });

  export default styles;