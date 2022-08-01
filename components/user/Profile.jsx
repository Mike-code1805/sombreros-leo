import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ButtonShared from "../../shared/button/ButtonShared";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userRedux";

const Profile = ({ navigation, ...props }) => {
  const dispatch = useDispatch();

  const handlePressLogout = () => {
    dispatch(logout());
  };
  return (
    <View>
      <Text>Profile</Text>
      <ButtonShared
        title="Cerrar Sesión"
        onPress={handlePressLogout}
        isValid={true}
        color={"black"}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
