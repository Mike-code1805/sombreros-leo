import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import ButtonShared from "../../shared/button/ButtonShared";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackActions } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import * as color from "../../shared/desing/stylesColor";
import * as font from "../../shared/desing/stylesFontFamily";

const Welcome = ({ navigation }) => {
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
    navigation.dispatch(StackActions.replace("Sombreros"));
  };

  return (
    <View style={styles.wel}>
      <View style={styles.image}>
        <LinearGradient
          // Background Linear Gradient
          colors={[color.brown_lighter, color.yellow]}
          style={styles.linear}
        >
          <Image
            style={styles.logo}
            source={require("../../shared/desing/hat.png")}
          />
        </LinearGradient>
      </View>
      <View style={styles.welcome}>
        <Text style={styles.welcome__text}>
          Hola, ¿cómo estás? Soy Sombrerito, una App que te ayudará a trabajar
          con tus clientes registrando sus pedidos y dándote esa facilidad de
          manejo para una mejor experiencia... Sombrerito versión--1.0.0
        </Text>
        <ButtonShared
          title="Ir a los Sombreros"
          onPress={handleOnGoSubmitGo}
          isValid={true}
          color={"black"}
        />
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  wel: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.brown_lighter,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  welcome: {
    padding: 10,
    paddingBottom: 25,
    position: "absolute",
    width: "80%",
    height: "80%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  linear: {
    width: "100%",
    height: "100%",
  },
  welcome__text: {
    fontFamily: font.font,
    color: color.white,
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  logo: {
    position: "relative",
    width: "100%",
    height: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
    opacity: 0.7,
  },
});
