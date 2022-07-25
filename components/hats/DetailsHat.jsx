import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import * as eva from "@eva-design/eva";
import * as color from "../../assets/stylesColor";
import * as font from "../../assets/stylesFontFamily";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { ApplicationProvider, IconRegistry, Icon } from "@ui-kitten/components";

const DetailsHat = ({ ...props }) => {
  return (
    <ScrollView style={styles.details}>
      {props.loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size={"large"} color={color.brown} />
        </View>
      ) : (
        <View style={styles.detailsHat}>
          <View style={styles.detailsHat__container}>
            <Text style={styles.detailsHat__textData}>Nombre: </Text>
            <Text style={styles.detailsHat__text}>
              {props.dataCalled.hat.name}
            </Text>
          </View>
          <View style={styles.detailsHat__container}>
            <Text style={styles.detailsHat__textData}>Fecha: </Text>
            <Text style={styles.detailsHat__text}>
              {props.dataCalled.hat.date}
            </Text>
          </View>
          <View style={styles.detailsHat__container}>
            <Text style={styles.detailsHat__textData}>Color de Sombrero: </Text>
            <Text style={styles.detailsHat__text}>
              {props.dataCalled.hat.color_hat}
            </Text>
          </View>
          <View style={styles.detailsHat__container}>
            <Text style={styles.detailsHat__textData}>Cintillo: </Text>
            <Text style={styles.detailsHat__text}>
              {props.dataCalled.hat.cintillo}
            </Text>
          </View>
          <View style={styles.detailsHat__container}>
            <Text style={styles.detailsHat__textData}>Tafalete: </Text>
            <Text style={styles.detailsHat__text}>
              {props.dataCalled.hat.tafalete}
            </Text>
          </View>
          <View style={styles.detailsHat__container}>
            <Text style={styles.detailsHat__textData}>Medida: </Text>
            <Text style={styles.detailsHat__text}>
              {props.dataCalled.hat.measure}
            </Text>
          </View>
          <View style={styles.detailsHat__container}>
            <Text style={styles.detailsHat__textData}>Color de Cinta: </Text>
            <Text style={styles.detailsHat__text}>
              {props.dataCalled.hat.color_tape}
            </Text>
          </View>
          <View style={styles.detailsHat__container}>
            <Text style={styles.detailsHat__textData}>Tamaño: </Text>
            <Text style={styles.detailsHat__text}>
              {props.dataCalled.hat.size}cm
            </Text>
          </View>
          <View style={styles.detailsHat__container}>
            <Text style={styles.detailsHat__textData}>Estado: </Text>
            <Text style={styles.detailsHat__text}>
              {props.dataCalled.hat.state}°
            </Text>
          </View>
          <View style={styles.detailsHat__container}>
            <Text style={styles.detailsHat__textData}>Precio: </Text>
            <Text style={styles.detailsHat__text}>
              S/.{props.dataCalled.hat.price}
            </Text>
          </View>
          <View style={styles.detailsHat__container}>
            <Text style={styles.detailsHat__textData}>Adelanto: </Text>
            <Text style={styles.detailsHat__text}>
              S/.{props.dataCalled.hat.advancement}
            </Text>
          </View>
          <View style={styles.detailsHat__container}>
            <Text style={styles.detailsHat__textData}>Domicilio: </Text>
            <Text style={styles.detailsHat__text}>
              {props.dataCalled.hat.address}
            </Text>
          </View>
          <View style={styles.detailsHat__container}>
            <Text style={styles.detailsHat__textData}>Observaciones: </Text>
            <Text style={styles.detailsHat__text}>
              {props.dataCalled.hat.observations}
            </Text>
          </View>
          {props.dataCalled.hat.pendiente ? (
            <View style={styles.detailsHat__container}>
              <Text style={styles.detailsHat__textData__worked}>
                Pendiente De Trabajarlo
              </Text>
            </View>
          ) : null}
          {props.dataCalled.hat.state_payment === "c" ? (
            <View style={styles.detailsHat__container}>
              <Text style={styles.detailsHat__textData}>
                Sombrero Pagado y Entregado
              </Text>
            </View>
          ) : (
            <View style={styles.detailsHat__container}>
              <Text style={styles.detailsHat__textData__pendiente}>
                Sombrero Pendiente de Pago y Entrega
              </Text>
            </View>
          )}
        </View>
      )}

      <View style={styles.detailsButtons}>
        <TouchableOpacity
          style={styles.prdetailsButtons__edit}
          // onPress={gotoDetails}
        >
          <Text style={styles.detailsButtons__style__text}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.prdetailsButtons__pay}
          // onPress={gotoDetails}
        >
          <Text style={styles.detailsButtons__style__text}>Entregado</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.prdetailsButtons__work}
          // onPress={gotoDetails}
        >
          <Text style={styles.detailsButtons__style__text}>Trabajado</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.prdetailsButtons__delete}
          // onPress={gotoDetails}
        >
          <Text style={styles.detailsButtons__style__text}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DetailsHat;

const styles = StyleSheet.create({
  loader: {
    padding: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  details: {
    padding: 10,
  },
  detailsHat: {
    padding: 10,
    color: color.black,
    shadowColor: color.brown,
    shadowOpacity: 0.8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    backgroundColor: color.white,
    borderColor: color.brown,
    borderWidth: 3,
    borderRadius: 5,
  },
  detailsHat__container: {
    flexDirection: "row",
  },
  detailsHat__text: {
    fontSize: 18,
    fontFamily: font.font,
    fontWeight: "bold",
  },
  detailsHat__textData: {
    color: color.brown,
    fontFamily: font.font,
    fontWeight: "bold",
    fontSize: 18,
  },
  detailsHat__textData__pendiente: {
    color: color.green,
    fontFamily: font.font,
    fontWeight: "bold",
    fontSize: 18,
  },
  detailsHat__textData__worked: {
    color: color.yellow,
    fontFamily: font.font,
    fontWeight: "bold",
    fontSize: 18,
  },
  detailsButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  prdetailsButtons__edit: {
    width: 120,
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: color.brown,
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
  prdetailsButtons__pay: {
    width: 120,
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: color.green,
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
  prdetailsButtons__work: {
    width: 120,
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: color.yellow,
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
  prdetailsButtons__delete: {
    width: 120,
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: color.red,
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
  detailsButtons__style__text: {
    marginLeft: "auto",
    marginRight: "auto",
    color: color.white,
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: font.font,
    marginTop: "auto",
    marginBottom: "auto",
  },
});
