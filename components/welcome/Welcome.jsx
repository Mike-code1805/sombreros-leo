import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ButtonShared from "../../shared/button/ButtonShared";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Welcome = ({ navigation }, props) => {
  const stateUserAuth = useSelector((state) => state.user.currentUser);

  console.log("stateUserAuth-> ", stateUserAuth);
  useEffect(() => {
    sendUser();
  }, []);

  const sendUser = async () => {
    console.log("sendUser");
    await AsyncStorage.setItem("token", stateUserAuth.token.authToken);
  };
  console.log("stateUserAuth-> ", stateUserAuth);

  const handleOnGoSubmitGo = () => {
    navigation.navigate("Sombreros");
  };
  const handleOnGoSubmitGoBack = () => {
    navigation.navigate("Login");
  };
  return (
    <View>
      <Text>Welcome</Text>
      <ButtonShared
        title="Sombreros"
        onPress={handleOnGoSubmitGo}
        isValid={true}
        color={"brown"}
      />
      <ButtonShared
        title="Back"
        onPress={handleOnGoSubmitGoBack}
        isValid={true}
        color={"brown"}
      />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
