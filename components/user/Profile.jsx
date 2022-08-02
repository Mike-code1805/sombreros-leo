import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ButtonShared from "../../shared/button/ButtonShared";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userRedux";
import * as color from "../../shared/desing/stylesColor";
import * as font from "../../shared/desing/stylesFontFamily";
import { LinearGradient } from "expo-linear-gradient";

const Profile = ({ navigation, ...props }) => {
  const dispatch = useDispatch();
  const stateUser = useSelector((state) => state.user.currentUser);

  const handlePressLogout = () => {
    dispatch(logout());
  };
  return (
    <View style={styles.profile}>
      <LinearGradient
        // Background Linear Gradient
        colors={[color.brown_lighter, color.yellow]}
        style={styles.linear}
      ></LinearGradient>
      <View style={styles.profile__container}>
        <Text style={styles.profile__text}>
          Hola {stateUser.token.username} este será tu perfil que muy pronto irá
          mejorando...
        </Text>
        <ButtonShared
          title="Cerrar Sesión"
          onPress={handlePressLogout}
          isValid={true}
          color={"black"}
        />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profile: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.brown_lighter,
    width: "100%",
    height: "100%",
  },
  profile__container: {
    padding: 10,
    paddingBottom: 25,
    position: "absolute",
    width: "100%",
    height: "30%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  profile__text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: font.font,
    color: color.white,
  },
  linear: {
    width: "100%",
    height: "100%",
  },
});
