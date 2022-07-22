import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import * as color from "../../assets/stylesColor";
import * as font from "../../assets/stylesFontFamily";

const Recicle = () => {
  return (
    <ScrollView>
      <View style={styles.reci}>
        <View style={styles.recicle}>
          <View style={styles.recicle__undo}>
            <TouchableOpacity style={styles.recicle__undo__container}>
              <Text style={styles.recicle__undo__text}>Recuperar</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.recicle__text}>Total: 0</Text>
          <View style={styles.recicle__undo}>
            <TouchableOpacity style={styles.recicle__undo__container}>
              <Text style={styles.recicle__undo__text}>Vaciar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.divider} />
      </View>
    </ScrollView>
  );
};

export default Recicle;

const styles = StyleSheet.create({
  reci: {
    padding: 10,
  },
  recicle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  recicle__text: {
    marginTop: "auto",
    marginBottom: "auto",
    fontSize: 15,
    fontWeight: "bold",
    color: color.brown,
    fontFamily: font.font,
  },
  recicle__undo: {},
  recicle__undo__container: {
    backgroundColor: color.brown,
    width: 80,
    height: 35,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  recicle__undo__text: {
    color: color.white,
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: font.font,
  },
  divider: {
    width: "100%",
    height: 2,
    backgroundColor: color.brown,
    marginTop: 5,
    marginBottom: 5,
  },
});
