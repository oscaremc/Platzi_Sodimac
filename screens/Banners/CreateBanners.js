
import React, { useState, State  } from 'react';
import { View, Button, TextInput, ScrollView } from 'react-native';
import firebase from '../../services/firebase'
import styles from './styles'

const CreateBanners = () => {

  const [state, setState] = useState({
    ActionType: '',
    DataAction: '',
    Id: '',
    ImageUrl: '',
    NumberOrder: '',
    Active: '',
    StartDate: '',
    EndDate: '',
  })

  const handleChangeText = (ActionType = value) => {
    setState({ ...state, [ActionType]: value })
  }

  const NewBanners = async () => {
      if (state.NumberOrder === '') {
        alert('Please provide a Number')
      } else {
         await firebase.db.collection('Banners').add({
          ActionType: state.ActionType,
          DataAction:  state.DataAction,
          Id:          state.Id,
          ImageUrl:     state.ImageUrl,
          NumberOrder: state.NumberOrder,
          Active:       state.Active,
          StartDate:    State.StartDate,
          EndDate:      state.EndDate
         })
         alert('saved')
      }
  }
  return (
    <ScrollView>      
      <View style={styles.container1}>
        <TextInput style={styles.InputText} placeholder="ActionType" onChangeText={(value) => handleChangeText('ActionType', value)} />
      </View>
      <View style={styles.container}>
        <TextInput style={styles.InputText} placeholder="DataAction" onChangeText={(value) => handleChangeText('DataAction', value)} />
      </View>
      <View style={styles.container}>
        <TextInput style={styles.InputText} placeholder="Id" onChangeText={(value) => handleChangeText('Id', value)} />
      </View>
      <View style={styles.container}>
        <TextInput style={styles.InputText} placeholder="ImageUrl" onChangeText={(value) => handleChangeText('ImageUrl', value)} />
      </View>
      <View style={styles.container}>
        <TextInput style={styles.InputText} placeholder="NumberOrder" onChangeText={(value) => handleChangeText('NumberOrder', value)} />
      </View>
      <View style={styles.container}>
        <TextInput style={styles.InputText} placeholder="Active" onChangeText={(value) => handleChangeText('Active', value)} />
      </View>
      <View style={styles.container}>
        <TextInput style={styles.InputText} placeholder="StartDate" onChangeText={(value) => handleChangeText('StartDate', value)} />
      </View>
      <View style={styles.container}>
        <TextInput style={styles.InputText} placeholder="EndDate" onChangeText={(value) => handleChangeText('EndDate', value)} />
      </View>
      <View style={styles.container3}>
        <Button title="Save" onPress={() => NewBanners()} />
      </View>
    </ScrollView>
  );
}
export default CreateBanners;