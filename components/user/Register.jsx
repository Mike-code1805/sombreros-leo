import { Field } from "formik";
import { Alert, StyleSheet, Text, View } from "react-native";
import ButtonShared from "../../shared/button/ButtonShared";
import { registerSchema } from "../../validationSchema/register.schema";
import AppForm from "../form/AppForm";
import AppFormField from "../form/AppFormField";
import AppFormSubmitButton from "../form/AppFormSubmitButton";
import { register } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Register = ({ navigation, ...props }) => {
  const stateUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleOnSubmitToRegister = async (values) => {
    try {
      await register(dispatch, values);
      if (!stateUser.error) {
        Alert.alert("Éxito", "El usuario se ha creado exitósamente", [
          {
            text: "Ok",
            onPress: () => {
              
              navigation.navigate("Login");
            },
          },
        ]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnGoLogin = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Registro:</Text>
      <AppForm
        initialValues={{
          username: "",
          email: "",
          password: "",
          passwordConfirmation: "",
        }}
        validationSchema={registerSchema}
        onSubmit={handleOnSubmitToRegister}
      >
        <Field component={AppFormField} name="username" placeholder="Nombre" />
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
        <Field
          component={AppFormField}
          name="passwordConfirmation"
          placeholder="Confirmar Contraseña"
          secureTextEntry
          textContentType="password"
        />
        <AppFormSubmitButton title="Registrar" />
      </AppForm>
      <ButtonShared
        title="Ir al Login"
        onPress={handleOnGoLogin}
        isValid={true}
      />
    </View>
  );
};

export default Register;

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
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     padding: 10,
//     fontSize: 18,
//     borderRadius: 6,
//   },
//   errorText: {
//     color: 'crimson',
//     fontWeight: 'bold',
//     marginBottom: 10,
//     marginTop: 6,
//     textAlign: 'center',
//   },

// });
