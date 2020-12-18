import React, { useState } from "react";
import { View, Button, TextInput, ScrollView } from "react-native";
import styles from "./styles";
import * as requestApi from "../../services/core";

const CreateBanners = () => {
  const [state, setState] = useState({
    ActionType: "",
    CreatorEmail: "",
    DataAction: "",
    ImageUrl: "",
    StartDate: "",
    EndDate: "",
  });
  const handleChangeText = (CreatorEmail, value) =>
    setState({ ...state, [CreatorEmail]: value });
  const isNullOrEmpty = (value) => {
    return value === "" || value === undefined || value === null;
  };
  const saveNewBanners = async (props) => {
    if (state && isNullOrEmpty(state.CreatorEmail)) {
      alert("Please provide a Email");
    } else {
      try {
        const infoToSend = {
          ActionType: state.ActionType,
          CreatorEmail: state.CreatorEmail,
          DataAction: state.DataAction,
          ImageUrl: state.ImageUrl,
          StartDate: state.StartDate,
          EndDate: state.EndDate,
        };
        const response = await requestApi.postToApi(
          "banners/createBanners",
          infoToSend
        );
        console.warn(response);
        props.navigation.navigate('Home')
      } catch (error) {
        console.log(error);
      }
    }
    
  };
  return (
    <ScrollView>
      <View style={styles.container1}>
        <TextInput
          style={styles.InputText}
          placeholder="ActionType"
          onChangeText={(value) => handleChangeText("ActionType", value)}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.InputText}
          placeholder="CreatorEmail"
          onChangeText={(value) => handleChangeText("CreatorEmail", value)}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.InputText}
          placeholder="DataAction"
          onChangeText={(value) => handleChangeText("DataAction", value)}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.InputText}
          placeholder="ImageUrl"
          onChangeText={(value) => handleChangeText("ImageUrl", value)}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.InputText}
          placeholder="StartDate"
          onChangeText={(value) => handleChangeText("StartDate", value)}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.InputText}
          placeholder="EndDate"
          onChangeText={(value) => handleChangeText("EndDate", value)}
        />
      </View>
      <View style={styles.container3}>
        <Button title="Save" onPress={() => saveNewBanners()} />
      </View>
    </ScrollView>
  );
};

export default CreateBanners;
