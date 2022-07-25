import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as color from "../../assets/stylesColor";
import * as font from "../../assets/stylesFontFamily";

const HatContainer = ({
  color,
  state,
  index,
  name,
  date,
  onPressMirar,
  onPressDelete,
}) => {
  return (
    <View>
      <View
        style={
          color === "yellow"
            ? styles.hatContainer__container__yellow
            : color === "green"
            ? styles.hatContainer__container__green
            : styles.hatContainer__container
        }
      >
        <View style={styles.hatContainer__container__note}>
          <View style={styles.hatContainer__container__note__text}>
            <Text style={styles.hatContainer__container__note__text__index}>
              {index + 1}
            </Text>
            <Text style={styles.hatContainer__container__note__text__text}>
              {name}
            </Text>
            <Text
              style={
                state === "Pendiente"
                  ? styles.hatContainer__container__note__text__text__p
                  : state === "Trabajado"
                  ? styles.hatContainer__container__note__text__text__t
                  : state === "Cancelado"
                  ? styles.hatContainer__container__note__text__text__c
                  : null
              }
            >
              {`(${state})`}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.hatContainer__container__note__delete__container}
            onPress={onPressDelete}
          >
            <Text style={styles.hatContainer__container__note__delete}>X</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.hatContainer__container__note__date}>
          <Text style={styles.hatContainer__container__note__date__text}>
            Fecha: {date}
          </Text>
          <TouchableOpacity
            style={styles.hatContainer__container__note__date__edit}
            onPress={onPressMirar}
          >
            <Text
              style={styles.hatContainer__container__note__date__edit__text}
            >
              Mirar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HatContainer;

const styles = StyleSheet.create({
  hatContainer__container: {
    marginBottom: 20,
    padding: 10,
    opacity: 0.8,
    color: color.black,
    shadowColor: color.brown,
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 5,
    borderColor: color.brown,
    borderWidth: 3,
    borderLeftWidth: 15,
  },
  hatContainer__container__yellow: {
    marginBottom: 20,
    padding: 10,
    opacity: 0.8,
    color: color.black,
    shadowColor: color.brown,
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 5,
    borderColor: color.yellow,
    borderWidth: 3,
    borderLeftWidth: 15,
  },
  hatContainer__container__green: {
    marginBottom: 20,
    padding: 10,
    opacity: 0.8,
    color: color.black,
    shadowColor: color.brown,
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 5,
    borderColor: color.green,
    borderWidth: 3,
    borderLeftWidth: 15,
  },
  hatContainer__container__note: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  hatContainer__container__note__text: {
    flexDirection: "row",
    width: "80%",
  },
  hatContainer__container__note__text__index: {
    fontWeight: "bold",
    fontSize: 14,
    fontFamily: font.font,
  },
  hatContainer__container__note__text__text: {
    fontWeight: "bold",
    fontSize: 13,
    fontFamily: font.font,
    marginLeft: 5,
    width: "60%",
  },
  hatContainer__container__note__text__text__p: {
    fontWeight: "bold",
    fontSize: 13,
    fontFamily: font.font,
    marginLeft: 5,
    color: color.brown,
  },
  hatContainer__container__note__text__text__t: {
    fontWeight: "bold",
    fontSize: 13,
    fontFamily: font.font,
    marginLeft: 5,
    color: color.yellow,
  },
  hatContainer__container__note__text__text__c: {
    fontWeight: "bold",
    fontSize: 13,
    fontFamily: font.font,
    marginLeft: 5,
    color: color.green,
  },
  hatContainer__container__note__delete__container: {
    justifyContent: "flex-end",
  },
  hatContainer__container__note__delete: {
    color: color.brown,
    fontWeight: "bold",
    fontSize: 18,
    fontFamily: font.font,
  },
  hatContainer__container__note__date: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  hatContainer__container__note__date__text: {
    fontFamily: font.font,
  },
  hatContainer__container__note__date__edit: {
    justifyContent: "center",
  },
  hatContainer__container__note__date__edit__text: {
    color: color.brown,
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: font.font,
  },
});
