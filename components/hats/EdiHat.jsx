import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppForm from "../form/AppForm";
import { Field } from "formik";
import AppFormField from "../form/AppFormField";
import AppFormSubmitButton from "../form/AppFormSubmitButton";
import ButtonShared from "../../shared/button/ButtonShared";
import { hatSchema } from "../../validationSchema/hat.schema";
import * as color from "../../shared/desing/stylesColor";
import * as font from "../../shared/desing/stylesFontFamily";
import { format } from "date-fns";
import getHatByIdService from "../../services/getHatByIdService";
import editHatService from "../../services/editHatService";
import { useDispatch } from "react-redux";
import { getHats } from "../../redux/apiCalls";

const EdiHat = ({ navigation, ...props }) => {
  const dispatch = useDispatch();

  const handleOnSubmitToEdit = async (values) => {
    if (
      values.name === props.dataCalled.hat.name &&
      values.color_hat === props.dataCalled.hat.color_hat &&
      values.cintillo === props.dataCalled.hat.cintillo &&
      values.tafalete === props.dataCalled.hat.tafalete &&
      values.measure === props.dataCalled.hat.measure &&
      values.color_tape === props.dataCalled.hat.color_tape &&
      values.size === props.dataCalled.hat.size &&
      values.state === props.dataCalled.hat.state &&
      values.price === props.dataCalled.hat.price &&
      values.advancement === props.dataCalled.hat.advancement &&
      values.address === props.dataCalled.hat.address &&
      values.observations === props.dataCalled.hat.observations &&
      values.state_payment === props.dataCalled.hat.state_payment
    ) {
      Alert.alert("Por favor escriba lo que desea editar");
    } else {
      const objectToSent = {
        name: values.name,
        color_hat: values.color_hat,
        cintillo: values.cintillo,
        tafalete: values.tafalete,
        measure: values.measure,
        color_tape: values.color_tape,
        size: values.size,
        state: values.state,
        price: parseFloat(values.price).toFixed(2),
        advancement: parseFloat(values.advancement).toFixed(2),
        address: values.address,
        observations: values.observations,
        state_payment: values.state_payment,
        date: values.date,
        pendiente: true,
      };
      await editHatService(props.id, objectToSent);
      const res = await getHatByIdService(props.id);
      props.setDataCalled(res.data);
      props.setIsDone(res.data.hat.pendiente);
      props.setIsPay(res.data.hat.state_payment);
      getHats(dispatch);
      navigation.navigate("DetailsHat");
    }
  };
  return (
    <ScrollView style={styles.addHat}>
      <AppForm
        initialValues={{
          name: props.dataCalled.hat.name,
          color_hat: props.dataCalled.hat.color_hat,
          cintillo: props.dataCalled.hat.cintillo,
          tafalete: props.dataCalled.hat.tafalete,
          measure: props.dataCalled.hat.measure,
          color_tape: props.dataCalled.hat.color_tape,
          size: props.dataCalled.hat.size,
          state: props.dataCalled.hat.state,
          price: props.dataCalled.hat.price,
          advancement: props.dataCalled.hat.advancement,
          address: props.dataCalled.hat.address,
          observations: props.dataCalled.hat.observations,
          state_payment: props.dataCalled.hat.state_payment,
        }}
        validationSchema={hatSchema}
        onSubmit={handleOnSubmitToEdit}
      >
        <Text style={styles.addHat__text}>Nombre: </Text>
        <Field
          component={AppFormField}
          name="name"
          placeholder={props.dataCalled.hat.name}
        />
        <Text style={styles.addHat__text}>Color de Sombrero: </Text>
        <Field
          component={AppFormField}
          name="color_hat"
          placeholder={props.dataCalled.hat.color_hat}
        />
        <Text style={styles.addHat__text}>Cintillo (si) (no): </Text>
        <Field
          component={AppFormField}
          name="cintillo"
          placeholder={props.dataCalled.hat.cintillo}
        />
        <Text style={styles.addHat__text}>Tafalete (si) (no): </Text>
        <Field
          component={AppFormField}
          name="tafalete"
          placeholder={props.dataCalled.hat.tafalete}
        />
        <Text style={styles.addHat__text}>Medida(cm): </Text>
        <Field
          component={AppFormField}
          name="measure"
          placeholder={`${props.dataCalled.hat.measure}cm`}
        />
        <Text style={styles.addHat__text}>Color de Cinta: </Text>
        <Field
          component={AppFormField}
          name="color_tape"
          placeholder={`${props.dataCalled.hat.color_tape}`}
        />
        <Text style={styles.addHat__text}>Tamaño: </Text>
        <Field
          component={AppFormField}
          name="size"
          placeholder={`${props.dataCalled.hat.size}`}
        />
        <Text style={styles.addHat__text}>Estado (1°) (2°) (3°) (4°): </Text>
        <Field
          component={AppFormField}
          name="state"
          placeholder={`${props.dataCalled.hat.state}°`}
        />
        <Text style={styles.addHat__text}>Precio (S/.): </Text>
        <Field
          component={AppFormField}
          name="price"
          placeholder={`S/.${props.dataCalled.hat.price}`}
        />
        <Text style={styles.addHat__text}>Adelanto (S/.): </Text>
        <Field
          component={AppFormField}
          name="advancement"
          placeholder={`S/.${props.dataCalled.hat.advancement}`}
        />
        <Text style={styles.addHat__text}>Domicilio: </Text>
        <Field
          component={AppFormField}
          name="address"
          placeholder={`${props.dataCalled.hat.color_tape}`}
        />
        <Text style={styles.addHat__text}>Observaciones: </Text>
        <Field
          component={AppFormField}
          name="observations"
          placeholder={`${props.dataCalled.hat.color_tape}`}
        />
        <View style={styles.addHat__container}>
          <Text style={styles.addHat__text}>Estado Pago: </Text>
          <Text style={styles.addHat__text}>Pendiente</Text>
          <Text style={styles.addHat__text__state}>(p)</Text>
          <Text style={styles.addHat__text}> Cancelado</Text>
          <Text style={styles.addHat__text__state}>(c)</Text>
        </View>

        <Field
          component={AppFormField}
          name="state_payment"
          placeholder={`${props.dataCalled.hat.color_tape}`}
        />
        <AppFormSubmitButton title="Editar" />
      </AppForm>
      <View style={styles.addHat__buttonClear}>
        <ButtonShared
          onPress={() => navigation.goBack()}
          title="Cancelar"
          color="red"
        />
      </View>
    </ScrollView>
  );
};

export default EdiHat;

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
