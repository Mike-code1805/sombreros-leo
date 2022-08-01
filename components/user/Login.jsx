import { useState } from "react";
import { Field } from "formik";
import { Alert, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import ButtonShared from "../../shared/button/ButtonShared";
import { loginSchema } from "../../validationSchema/login.schema";
import AppForm from "../form/AppForm";
import AppFormField from "../form/AppFormField";
import AppFormSubmitButton from "../form/AppFormSubmitButton";
import { StackActions } from "@react-navigation/native";

const Login = ({ navigation, ...props }) => {
  const stateUser = useSelector((state) => state.user);
  const [userState, setUserState] = useState(true);
  const dispatch = useDispatch();
  console.log("stateUser->", stateUser);
  
  const handleOnSubmitToLogin = async (values) => {
    try {
      await login(dispatch, values);
      if (userState) {
        Alert.alert(
          "Error",
          "Verifique que el usuario o la contraseña estén correctos",
          [
            {
              text: "Ok",
              style: "cancel",
            },
          ]
        );
      }
      setUserState(stateUser.error);
      if (!userState) {
        setUserState(stateUser.error);
        navigation.dispatch(StackActions.replace("Welcome"));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnGoSubmit = () => {
    navigation.navigate("Register");
  };

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
