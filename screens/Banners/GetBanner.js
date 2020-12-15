
import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles'

const GetBanner = () => {

//   //   const GetById = async (id) => {
//   //   const datosId = await fetch('https://qa-apphc-cdn-hc.azureedge.net/api/banners/GetById/')
//   //    const banner = await datosId.get();
//   //     const banners = banner.data();
//   // useEffect(() => {
//   //   // console.log('useEffect')
//   //   GetById(id)

//   }, [])

  return (   
      <View style={styles.container1}>
        <TextInput style={styles.InputText} placeholder="Id" onChangeText={(value) => handleChangeText('id', value)} />
      </View>

  )

}
// }
export default GetBanner;