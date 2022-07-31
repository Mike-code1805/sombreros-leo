import { Field } from "formik";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import { logout } from "../../redux/userRedux";
import ButtonShared from "../../shared/button/ButtonShared";
import { loginSchema } from "../../validationSchema/login.schema";
import AppForm from "../form/AppForm";
import AppFormField from "../form/AppFormField";
import AppFormSubmitButton from "../form/AppFormSubmitButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { StackActions } from "@react-navigation/native";

const Login = ({ navigation, ...props }) => {
  const stateUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  // console.log("stateUser:", stateUser);

  const handleOnSubmitToLogin = (values) => {
    login(dispatch, values);
    // if (!stateUser.error) {
    //   try {
    //     navigation.dispatch(StackActions.replace("Sombreros", stateUser.user));
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  };

  const handleOnGoSubmit = async () => {
    // dispatch(logout());
    navigation.navigate("Sombreros");
    // const date = await AsyncStorage.getItem("token");console.log(date);
  };

  // console.log(user.token.authToken)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login:</Text>
      <AppForm
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={handleOnSubmitToLogin}
      >
        <Field component={AppFormField} name="username" placeholder="Nombre" />
        <Field
          component={AppFormField}
          name="password"
          placeholder="Contraseña"
          secureTextEntry
          textContentType="password"
        />
        <AppFormSubmitButton title="Ingresar" />
      </AppForm>
      <ButtonShared
        title="Regístrate"
        onPress={handleOnGoSubmit}
        isValid={true}
        color={"brown"}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 60,
    padding: 10,
  },
  text: {
    textDecorationLine: "underline",
    fontWeight: "bold",
    fontFamily: "monospace",
    fontSize: 20,
  },
});
