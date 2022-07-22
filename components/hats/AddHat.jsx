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
  const handleOnSubmitToLogin = async (values) => {
    await props.setHat(values);
    if (values.name === "") {
      Alert.alert("Por favor escribe algo");
    } else {
      console.log(values);
      await props.handleHat();
      navigation.navigate("Hats");
    }
  };

  return (
    <ScrollView style={styles.addHat}>
      <AppForm
        initialValues={{
          name: "",
          color: "",
          state: "",
          tafalete: "",
          cintillo: "",
          measure: "",
          color_tape: "",
          advancement: "",
          price: "",
          address: "",
          shape_or_pattern: "",
          state_payment: "",
        }}
        validationSchema={hatSchema}
        onSubmit={handleOnSubmitToLogin}
      >
        <Text style={styles.addHat__text}>Nombre: </Text>
        <Field component={AppFormField} name="name" placeholder="Nombre" />
        <Text style={styles.addHat__text}>Color: </Text>
        <Field component={AppFormField} name="color" placeholder="Color" />
        <Text style={styles.addHat__text}>Estado: </Text>
        <Field component={AppFormField} name="state" placeholder="Estado" />
        <Text style={styles.addHat__text}>Tafalete: </Text>
        <Field
          component={AppFormField}
          name="tafalete"
          placeholder="Tafalete"
        />
        <Text style={styles.addHat__text}>Cintillo: </Text>
        <Field
          component={AppFormField}
          name="cintillo"
          placeholder="Cintillo"
        />
        <Text style={styles.addHat__text}>Color de Cinta: </Text>
        <Field
          component={AppFormField}
          name="color_tape"
          placeholder="Color de Cinta"
        />
        <Text style={styles.addHat__text}>Adelanto: </Text>
        <Field
          component={AppFormField}
          name="advancement"
          placeholder="Adelanto"
        />
        <Text style={styles.addHat__text}>Precio: </Text>
        <Field component={AppFormField} name="price" placeholder="Precio" />
        <Text style={styles.addHat__text}>Domicilio: </Text>
        <Field
          component={AppFormField}
          name="address"
          placeholder="Domicilio"
        />
        <Text style={styles.addHat__text}>Forma o Modelo: </Text>
        <Field
          component={AppFormField}
          name="shape_or_pattern"
          placeholder="Forma o Modelo"
        />
        <Text style={styles.addHat__text}>Estado de Pago: </Text>
        <Field
          component={AppFormField}
          name="state_payment"
          placeholder="Estado de Pago"
        />
        <AppFormSubmitButton title="Agregar" />
      </AppForm>
      <View style={styles.addHat__buttonClear}>
        <ButtonShared title="Limpiar" color="green" />
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
  addHat__text: {
    color: color.brown,
    fontFamily: font.font,
  },
});
