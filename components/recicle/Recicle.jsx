import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import * as color from "../../shared/desing/stylesColor";
import * as font from "../../shared/desing/stylesFontFamily";
import { useDispatch, useSelector } from "react-redux";
import HatContainer from "../hats/HatContainer";
import getHatRecicleByIdService from "../../services/hatRecicle/getHatRecicleByIdService";
import createHatService from "../../services/createHatService";
import deleteHatRecicleService from "../../services/hatRecicle/deleteHatRecicleService";
import { getHats, getHatsRecicle } from "../../redux/apiCalls";
import createHatDeletedPermanently from "../../services/createHatDeletedPermanently/createHatDeletedPermanently";

const Recicle = ({ navigation, ...props }) => {
  const dispatch = useDispatch();
  const hatRecicle = useSelector((state) => state.hatRecicle.hatsRecicle);
  const array = hatRecicle.slice().reverse();
  const handlePressGoBack = () => {
    try {
      Alert.alert(
        "Recuperar TODOS los sombreros",
        "¿Estás seguro que deseas restaurar todos los sombreros?",
        [
          {
            text: "No",
            onPress: () => console.log("cancelado"),
            style: "cancel",
          },
          {
            text: "Si",
            onPress: async () => {
              navigation.navigate("Sombreros");
              const res = await getHatRecicleByIdService(item._id);
              await createHatService(res.data.HatRecicle);
              await deleteHatRecicleService(item._id);
              getHats(dispatch);
            },
          },
        ]
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.r}>
      <View style={styles.reci}>
        <View style={styles.recicle}>
          <View style={styles.recicle__undo}>
            <TouchableOpacity style={styles.recicle__undo__container}>
              <Text style={styles.recicle__undo__text}>Regresar</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.recicle__text}>Total: {array.length}</Text>
          <View style={styles.recicle__undo}>
            <TouchableOpacity style={styles.recicle__undo__container}>
              <Text style={styles.recicle__undo__text}>Recargar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.divider} />
      </View>
      <ScrollView style={styles.re}>
        {array.map((item, index) =>
          item.state_payment == "p" && item.pendiente == true ? (
            <HatContainer
              key={item._id}
              state={"Pendiente"}
              index={index}
              name={item.name}
              date={item.date}
              toSee={false}
              onPressMirar={async () => {
                try {
                  Alert.alert(
                    "Recuperar sombrero",
                    "¿Estás seguro que deseas restaurar el sombrero?",
                    [
                      {
                        text: "No",
                        onPress: () => console.log("cancelado"),
                        style: "cancel",
                      },
                      {
                        text: "Si",
                        onPress: async () => {
                          navigation.navigate("Sombreros");
                          const res = await getHatRecicleByIdService(item._id);
                          await createHatService(res.data.HatRecicle);
                          await deleteHatRecicleService(item._id);
                          getHats(dispatch);
                        },
                      },
                    ]
                  );
                } catch (error) {
                  console.log(error);
                }
              }}
              onPressDelete={async () => {
                try {
                  Alert.alert(
                    "Borrar sombrero permanentemente",
                    "¿Estás seguro que deseas eliminar el sombrero permanentemente?",
                    [
                      {
                        text: "No",
                        onPress: () => console.log("cancelado"),
                        style: "cancel",
                      },
                      {
                        text: "Si",
                        onPress: async () => {
                          const res = await getHatRecicleByIdService(item._id);
                          await createHatDeletedPermanently(
                            res.data.HatRecicle
                          );
                          await deleteHatRecicleService(item._id);
                          getHatsRecicle(dispatch);
                          navigation.navigate("Recicle");
                        },
                      },
                    ]
                  );
                } catch (error) {
                  console.log(error);
                }
              }}
            />
          ) : item.state_payment == "p" && item.pendiente == false ? (
            <HatContainer
              key={item._id}
              state={"Trabajado"}
              color={"yellow"}
              index={index}
              name={item.name}
              date={item.date}
              toSee={false}
              onPressMirar={async () => {
                try {
                  Alert.alert(
                    "Recuperar sombrero",
                    "¿Estás seguro que deseas restaurar el sombrero?",
                    [
                      {
                        text: "No",
                        onPress: () => console.log("cancelado"),
                        style: "cancel",
                      },
                      {
                        text: "Si",
                        onPress: async () => {
                          navigation.navigate("Sombreros");
                          const res = await getHatRecicleByIdService(item._id);
                          await createHatService(res.data.HatRecicle);
                          await deleteHatRecicleService(item._id);
                          getHats(dispatch);
                        },
                      },
                    ]
                  );
                } catch (error) {
                  console.log(error);
                }
              }}
              onPressDelete={async () => {
                try {
                  Alert.alert(
                    "Borrar sombrero permanentemente",
                    "¿Estás seguro que deseas eliminar el sombrero permanentemente?",
                    [
                      {
                        text: "No",
                        onPress: () => console.log("cancelado"),
                        style: "cancel",
                      },
                      {
                        text: "Si",
                        onPress: async () => {
                          const res = await getHatRecicleByIdService(item._id);
                          await createHatDeletedPermanently(
                            res.data.HatRecicle
                          );
                          await deleteHatRecicleService(item._id);
                          getHatsRecicle(dispatch);
                          navigation.navigate("Recicle");
                        },
                      },
                    ]
                  );
                } catch (error) {
                  console.log(error);
                }
              }}
            />
          ) : (
            <HatContainer
              key={item._id}
              state={"Cancelado"}
              color={"green"}
              index={index}
              name={item.name}
              date={item.date}
              toSee={false}
              onPressMirar={async () => {
                try {
                  Alert.alert(
                    "Recuperar sombrero",
                    "¿Estás seguro que deseas restaurar el sombrero?",
                    [
                      {
                        text: "No",
                        onPress: () => console.log("cancelado"),
                        style: "cancel",
                      },
                      {
                        text: "Si",
                        onPress: async () => {
                          navigation.navigate("Sombreros");
                          const res = await getHatRecicleByIdService(item._id);
                          await createHatService(res.data.HatRecicle);
                          await deleteHatRecicleService(item._id);
                          getHats(dispatch);
                        },
                      },
                    ]
                  );
                } catch (error) {
                  console.log(error);
                }
              }}
              onPressDelete={async () => {
                try {
                  Alert.alert(
                    "Borrar sombrero permanentemente",
                    "¿Estás seguro que deseas eliminar el sombrero permanentemente?",
                    [
                      {
                        text: "No",
                        onPress: () => console.log("cancelado"),
                        style: "cancel",
                      },
                      {
                        text: "Si",
                        onPress: async () => {
                          const res = await getHatRecicleByIdService(item._id);
                          await createHatDeletedPermanently(
                            res.data.HatRecicle
                          );
                          await deleteHatRecicleService(item._id);
                          getHatsRecicle(dispatch);
                          navigation.navigate("Recicle");
                        },
                      },
                    ]
                  );
                } catch (error) {
                  console.log(error);
                }
              }}
            />
          )
        )}
      </ScrollView>
    </View>
  );
};

export default Recicle;

const styles = StyleSheet.create({
  r:{
    marginBottom: 150,
  },
  re: {
    padding: 10,
  },
  reci:{
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
    marginBottom: 10,
  },
});
