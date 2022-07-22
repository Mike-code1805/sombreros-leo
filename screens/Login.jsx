// import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import { Field } from "formik";
// import AppForm from "./components/form/AppForm";
// import AppFormField from "./components/form/AppFormField";
// import AppFormSubmitButton from "./components/form/AppFormSubmitButton";
// import loginValidation from "./validator/loginValidation";
// import ButtonShared from "./components/button/ButtonShared";
// import { useDispatch, useSelector } from "react-redux";
// import { selectUsers } from "../redux/store";
// import { register } from "../redux/apiCall";
// import { StackActions } from "@react-navigation/native";

import { Field } from "formik";
import { StyleSheet, Text, View } from "react-native";
import ButtonShared from "../shared/button/ButtonShared";
import AppForm from "../components/form/AppForm";
import AppFormField from "../components/form/AppFormField";
import AppFormSubmitButton from "../components/form/AppFormSubmitButton";
import { loginSchema } from "../validationSchema/login.schema";

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
const Login = ({ navigation }) => {

  const handleOnSubmitToLogin = (values) => {
    console.log(values);
  };

  const handleOnGoSubmit = () => {
    navigation.navigate("Register");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login:</Text>
      <AppForm
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={handleOnSubmitToLogin}
      >
        <Field
          component={AppFormField}
          name="email"
          placeholder="Email"
          autoCompleteType="email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
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
