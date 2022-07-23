import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { data } from "../../data";
import * as color from "../../assets/stylesColor";
import * as font from "../../assets/stylesFontFamily";

const DetailsHat = () => {
  return (
    <ScrollView style={styles.details}>
      <View style={styles.detailsHat}>
        <View style={styles.detailsHat__container}>
          <Text style={styles.detailsHat__textData}>Nombre: </Text>
          <Text style={styles.detailsHat__text}>{data[0].name}</Text>
        </View>
        <View style={styles.detailsHat__container}>
          <Text style={styles.detailsHat__textData}>Fecha: </Text>
          <Text style={styles.detailsHat__text}>{data[0].date}</Text>
        </View>
        <View style={styles.detailsHat__container}>
          <Text style={styles.detailsHat__textData}>Color de Cinta: </Text>
          <Text style={styles.detailsHat__text}>{data[0].color_hat}</Text>
        </View>
        <View style={styles.detailsHat__container}>
          <Text style={styles.detailsHat__textData}>Cintillo: </Text>
          <Text style={styles.detailsHat__text}>{data[0].cintillo}</Text>
        </View>
        <View style={styles.detailsHat__container}>
          <Text style={styles.detailsHat__textData}>Tafalete: </Text>
          <Text style={styles.detailsHat__text}>{data[0].tafalete}</Text>
        </View>
        <View style={styles.detailsHat__container}>
          <Text style={styles.detailsHat__textData}>Medida: </Text>
          <Text style={styles.detailsHat__text}>{data[0].measure}</Text>
        </View>
        <View style={styles.detailsHat__container}>
          <Text style={styles.detailsHat__textData}>Color de Cinta: </Text>
          <Text style={styles.detailsHat__text}>{data[0].color_tape}</Text>
        </View>
        <View style={styles.detailsHat__container}>
          <Text style={styles.detailsHat__textData}>Tamaño: </Text>
          <Text style={styles.detailsHat__text}>{data[0].size}cm</Text>
        </View>
        <View style={styles.detailsHat__container}>
          <Text style={styles.detailsHat__textData}>Estado: </Text>
          <Text style={styles.detailsHat__text}>{data[0].state}°</Text>
        </View>
        <View style={styles.detailsHat__container}>
          <Text style={styles.detailsHat__textData}>Precio: </Text>
          <Text style={styles.detailsHat__text}>S/.{data[0].price}</Text>
        </View>
        <View style={styles.detailsHat__container}>
          <Text style={styles.detailsHat__textData}>Adelanto: </Text>
          <Text style={styles.detailsHat__text}>S/.{data[0].advancement}</Text>
        </View>
        <View style={styles.detailsHat__container}>
          <Text style={styles.detailsHat__textData}>Domicilio: </Text>
          <Text style={styles.detailsHat__text}>{data[0].address}</Text>
        </View>
        <View style={styles.detailsHat__container}>
          <Text style={styles.detailsHat__textData}>Observaciones: </Text>
          <Text style={styles.detailsHat__text}>{data[0].observations}</Text>
        </View>
        <View style={styles.detailsHat__container}>
          <Text style={styles.detailsHat__textData}>Estado de Pago: </Text>
          <Text style={styles.detailsHat__text}>{data[0].state_payment}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailsHat;

const styles = StyleSheet.create({
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
});
