import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppForm from "../form/AppForm";
import { hatSchema } from "../../validationSchema/hat.schema";
import { Field } from "formik";
import AppFormField from "../form/AppFormField";
import AppFormSubmitButton from "../form/AppFormSubmitButton";
import ButtonShared from "../../shared/button/ButtonShared";
import * as color from "../../assets/stylesColor";
import * as font from "../../assets/stylesFontFamily";

const AddHat = ({ navigation, ...props }) => {
  const handleOnSubmitToLogin = (values) => {
    if (values.name === "") {
      Alert.alert("Por favor escribe algo");
    } else {
      console.log(values);
      navigation.navigate("Sombreros");
    }
  };

  const gotoAdd = ()  => {
    navigation.navigate("Sombreros")
  };

  return (
    <ScrollView style={styles.addHat}>
      <AppForm
        initialValues={{
          name: "",
          color_hat: "",
          cintillo: "",
          tafalete: "",
          measure: "",
          color_tape: "",
          size: "",
          state: "",
          price: "",
          advancement: "",
          address: "",
          observations: "",
          state_payment: "",
        }}
        validationSchema={hatSchema}
        onSubmit={handleOnSubmitToLogin}
      >
        <Text style={styles.addHat__text}>Nombre: </Text>
        <Field component={AppFormField} name="name" placeholder="Nombre" />
        <Text style={styles.addHat__text}>Color de Cinta: </Text>
        <Field component={AppFormField} name="color_hat" placeholder="Color de Cinta" />
        <Text style={styles.addHat__text}>Cintillo (si) (no): </Text>
        <Field
          component={AppFormField}
          name="cintillo"
          placeholder="Cintillo"
        />
        <Text style={styles.addHat__text}>Tafalete (si) (no): </Text>
        <Field
          component={AppFormField}
          name="tafalete"
          placeholder="Tafalete"
        />
        <Text style={styles.addHat__text}>Medida(cm): </Text>
        <Field
          component={AppFormField}
          name="measure"
          placeholder="Medida(cm)"
        />
        <Text style={styles.addHat__text}>Color de Cinta: </Text>
        <Field
          component={AppFormField}
          name="color_tape"
          placeholder="Color de Cinta"
        />
        <Text style={styles.addHat__text}>Tamaño: </Text>
        <Field
          component={AppFormField}
          name="size"
          placeholder="Tamaño"
        />
        <Text style={styles.addHat__text}>Estado (1°) (2°) (3°) (4°): </Text>
        <Field component={AppFormField} name="state" placeholder="Estado" />
        <Text style={styles.addHat__text}>Precio (S/.): </Text>
        <Field component={AppFormField} name="price" placeholder="Precio" />
        <Text style={styles.addHat__text}>Adelanto (S/.): </Text>
        <Field
          component={AppFormField}
          name="advancement"
          placeholder="Adelanto"
        />
        <Text style={styles.addHat__text}>Domicilio: </Text>
        <Field
          component={AppFormField}
          name="address"
          placeholder="Domicilio"
        />
        <Text style={styles.addHat__text}>Observaciones: </Text>
        <Field
          component={AppFormField}
          name="observations"
          placeholder="Observaciones"
        />
        <View style={styles.addHat__container}>
          <Text style={styles.addHat__text}>Estado Pago: </Text>
          <Text style={styles.addHat__text}>Pendiente</Text>
          <Text style={styles.addHat__text__state}>
            (p)
          </Text>
          <Text style={styles.addHat__text}> Cancelado</Text>
          <Text style={styles.addHat__text__state}>
           (c)
          </Text>
        </View>

        <Field
          component={AppFormField}
          name="state_payment"
          placeholder="Estado de Pago"
        />
        <AppFormSubmitButton title="Agregar" />
      </AppForm>
      <View style={styles.addHat__buttonClear}>
        <ButtonShared onPress={gotoAdd} title="Cancelar" color="red" />
      </View>
    </ScrollView>
  );
};

export default AddHat;

const styles = StyleSheet.create({
  addHat: {
    padding: 10,
    marginBottom: 50,
  },
  addHat__buttonClear: {
    marginBottom: 20,
  },
  addHat__container: {
    flexDirection: "row",
    textAlign: "center",
  },
  addHat__text: {
    fontSize: 14,
    color: color.brown,
    fontFamily: font.font,
    marginTop: "auto",
    marginBottom: "auto",
  },
  addHat__text__state: {
    fontSize: 16,
    color: color.brown,
    fontFamily: font.font,
    fontWeight: "bold",
  },
});
