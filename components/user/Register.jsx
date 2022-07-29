import { Field } from "formik";
import { StyleSheet, Text, View } from "react-native";
import ButtonShared from "../../shared/button/ButtonShared";
import { registerSchema } from "../../validationSchema/register.schema";
import AppForm from "../form/AppForm";
import AppFormField from "../form/AppFormField";
import AppFormSubmitButton from "../form/AppFormSubmitButton";


const Register = ({ navigation, ...props }) => {
  // const state = useSelector(selectUsers);
  // const dispatch = useDispatch();

  // const handleOnSubmitToRegister = async (values: any) => {
  //   await register(dispatch, values);
  //   if (!state.error) {
  //     try {
  //       navigation.navigate("Pagination");
  //     } catch (error) {}
  //   }
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Registro:</Text>
      <AppForm
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={registerSchema}
        onSubmit={(values) => console.log(values)}
      >
        <Field component={AppFormField} name="name" placeholder="Nombre" />
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
          name="confirmPassword"
          placeholder="Confirmar Contraseña"
          secureTextEntry
          textContentType="password"
        />
        <AppFormSubmitButton title="Registrar" />
      </AppForm>
      <ButtonShared
        title="Ir al Login"
        onPress={() => navigation.navigate("Login")}
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
