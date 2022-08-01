import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as color from "../../shared/desing/stylesColor";
import * as font from "../../shared/desing/stylesFontFamily";
import { useDispatch, useSelector } from "react-redux";
import { getHats, getHatsRecicle } from "../../redux/apiCalls";
import HatContainer from "./HatContainer";
import getHatByIdService from "../../services/getHatByIdService";
import deleteHatService from "../../services/deleteHatService";
import createHatRecicleService from "../../services/hatRecicle/createHatRecicleService";
import ButtonShared from "../../shared/button/ButtonShared";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

const Sombreros = ({ navigation, ...props }) => {
  const hat = useSelector((state) => state.hat.hats);
  const stateUser = useSelector((state) => state.user.currentUser);
  const [loading, setLoading] = useState(true);
  const [loadingComponent, setLoadingComponent] = useState(false);
  const [searchField, setSearchField] = useState("");
  const [active, setActive] = useState(false);
  const [array, setArray] = useState([]);

  console.log("hat from Sombreros ->", hat);
  const gotoAdd = () => {
    navigation.navigate("AddHat");
  };

  const gotoRecicle = () => {
    navigation.navigate("Recicle");
    getHatsRecicle(dispatch);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    getHats(dispatch);
    getHatsRecicle(dispatch);
    setArray(hat.slice().reverse());
  }, [dispatch]);

  console.log("searchField-> ", searchField);
  const handlePressSearch = () => {
    const filteredHats = array.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchField.toLowerCase()) ||
        item.date.toLowerCase().includes(searchField.toLowerCase())
      );
    });
    setArray(filteredHats);
    console.log("filteredHats-> ", filteredHats);
  };

  const seeHats = () => {
    getHats(dispatch);
    setArray(hat.slice().reverse());
    setLoading(false);
  };
  console.log("array -> ", array);
  return (
    <View style={styles.noteCard}>
      {loadingComponent ? (
        <View style={styles.loader}>
          <ActivityIndicator size={"large"} color={color.brown} />
        </View>
      ) : (
        <>
          <View style={styles.header}>
            <Text
              style={styles.header__text}
              onPress={() => navigation.navigate("Profile")}
            >
              Hola {stateUser.token.username}!
            </Text>
            <View style={styles.header__icons}>
              <View style={styles.header__icons__trash}>
                <TouchableOpacity
                  style={styles.header__icons__container}
                  onPress={gotoRecicle}
                >
                  <MaterialIcons name="delete" size={25} style={styles.icon} />
                </TouchableOpacity>
              </View>
              <View style={styles.header__icons__plus}>
                <TouchableOpacity
                  style={styles.header__icons__container}
                  onPress={gotoAdd}
                >
                  <AntDesign name="plus" size={25} style={styles.icon} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Text style={styles.noteCard__text}>Total: {hat.length}</Text>
          <View style={styles.noteCard__divider} />
          <View style={styles.noteCard__search}>
            <View style={styles.noteCard__search__input__container}>
              <TextInput
                placeholder="Buscar..."
                style={styles.noteCard__search__input}
                onChangeText={(text) => {
                  setSearchField(text);
                  setActive(true);
                }}
                value={searchField}
              />

              <TouchableOpacity
                style={styles.noteCard__search__button}
                onPress={() => {
                  setActive(false);
                  setSearchField("");
                  setArray(hat.slice().reverse());
                }}
              >
                <Text
                  style={
                    active
                      ? styles.noteCard__search__button__text__active
                      : styles.noteCard__search__button__text__inactive
                  }
                >
                  X
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.noteCard__search__container}
              onPress={handlePressSearch}
            >
              <AntDesign name="search1" size={25} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.noteCard__search__container}
              onPress={() => {
                getHats(dispatch);
                setArray(hat.slice().reverse());
              }}
            >
              <MaterialIcons name="refresh" size={25} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.noteCard__scrollView}>
            {loading ? (
              <View style={styles.loaderHats}>
                <ButtonShared
                  title="Ver Sombreros"
                  onPress={seeHats}
                  isValid={true}
                  color={"blue"}
                />
              </View>
            ) : array.length === 0 ? (
              <View style={styles.noteCard__scrollView__empty}>
                <Text style={styles.noteCard__scrollView__empty__text}>
                  No hay sombreros aún!
                </Text>
              </View>
            ) : (
              array.map((item, index) =>
                item.state_payment == "p" && item.pendiente == true ? (
                  <HatContainer
                    key={item._id}
                    state={"Pendiente"}
                    index={index}
                    name={item.name}
                    date={item.date}
                    onPressMirar={async () => {
                      try {
                        navigation.navigate("DetailsHat");
                        const res = await getHatByIdService(item._id);
                        props.setIsDone(item.pendiente);
                        props.setIsPay(item.state_payment);
                        props.setDataCalled(res.data);
                        props.setId(item._id);
                        props.setLoading(false);
                      } catch (error) {
                        console.log(error);
                      }
                    }}
                    onPressDelete={async () => {
                      try {
                        Alert.alert(
                          "Borrar sombrero",
                          "¿Estás seguro que deseas llevar el sombrero a la papelera de reciclaje?",
                          [
                            {
                              text: "No",
                              onPress: () => console.log("cancelado"),
                              style: "cancel",
                            },
                            {
                              text: "Si",
                              onPress: async () => {
                                const res = await getHatByIdService(item._id);
                                await createHatRecicleService(res.data.hat);
                                await deleteHatService(item._id);
                                getHats(dispatch);
                                navigation.navigate("Sombreros");
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
                    onPressMirar={async () => {
                      try {
                        navigation.navigate("DetailsHat");
                        props.setIsDone(item.pendiente);
                        props.setIsPay(item.state_payment);
                        props.setId(item._id);
                        const res = await getHatByIdService(item._id);
                        props.setDataCalled(res.data);
                        props.setLoading(false);
                      } catch (error) {
                        console.log(error);
                      }
                    }}
                    onPressDelete={async () => {
                      try {
                        Alert.alert(
                          "Borrar sombrero",
                          "¿Estás seguro que deseas llevar el sombrero a la papelera de reciclaje?",
                          [
                            {
                              text: "No",
                              onPress: () => console.log("cancelado"),
                              style: "cancel",
                            },
                            {
                              text: "Si",
                              onPress: async () => {
                                const res = await getHatByIdService(item._id);
                                await createHatRecicleService(res.data.hat);
                                await deleteHatService(item._id);
                                getHats(dispatch);
                                navigation.navigate("Sombreros");
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
                    onPressMirar={async () => {
                      try {
                        navigation.navigate("DetailsHat");
                        const res = await getHatByIdService(item._id);
                        props.setIsDone(item.pendiente);
                        props.setIsPay(item.state_payment);
                        props.setDataCalled(res.data);
                        props.setId(item._id);
                        props.setLoading(false);
                      } catch (error) {
                        console.log(error);
                      }
                    }}
                    onPressDelete={async () => {
                      try {
                        Alert.alert(
                          "Borrar sombrero",
                          "¿Estás seguro que deseas llevar el sombrero a la papelera de reciclaje?",
                          [
                            {
                              text: "No",
                              onPress: () => console.log("cancelado"),
                              style: "cancel",
                            },
                            {
                              text: "Si",
                              onPress: async () => {
                                const res = await getHatByIdService(item._id);
                                await createHatRecicleService(res.data.hat);
                                await deleteHatService(item._id);
                                getHats(dispatch);
                                navigation.navigate("Sombreros");
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
              )
            )}
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default Sombreros;

const styles = StyleSheet.create({
  loader: {
    padding: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  noteCard: {
    padding: 10,
    marginBottom: 40,
    flex: 1,
    justifyContent: "center",
  },
  noteCard__text: {
    fontSize: 15,
    fontWeight: "bold",
    color: color.brown,
    marginTop: 0,
    fontFamily: font.font,
  },
  noteCard__divider: {
    width: "100%",
    height: 2,
    backgroundColor: color.brown,
    marginTop: 5,
    marginBottom: 5,
  },
  noteCard__search: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  noteCard__search__container: {
    backgroundColor: color.brown,
    width: 50,
    height: 45,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  noteCard__search__input__container: {
    height: 40,
    width: "65%",
    flexDirection: "row-reverse",
  },
  noteCard__search__input: {
    height: 40,
    width: "100%",
    paddingLeft: 10,
    paddingRight: 60,
    fontWeight: "bold",
    opacity: 0.8,
    fontSize: 18,
    color: color.black,
    shadowColor: color.brown,
    shadowOpacity: 0.4,
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
    fontFamily: font.font,
  },
  noteCard__search__button: {
    zIndex: 1,
    position: "absolute",
    width: "15%",
    height: 40,
    flexDirection: "row-reverse",
    paddingHorizontal: 5,
  },
  noteCard__search__button__text__inactive: {
    color: color.brown,
    fontWeight: "bold",
    fontSize: 28,
    fontFamily: font.font,
    width: "90%",
    height: 40,
    marginTop: "auto",
    marginBottom: "auto",
    opacity: 0,
  },
  noteCard__search__button__text__active: {
    color: color.brown,
    fontWeight: "bold",
    fontSize: 28,
    fontFamily: font.font,
    width: "90%",
    height: 40,
    marginTop: "auto",
    marginBottom: "auto",
    opacity: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 55,
  },
  header__text: {
    fontSize: 25,
    fontWeight: "bold",
    color: color.brown,
    marginTop: "auto",
    marginBottom: "auto",
    fontFamily: font.font,
    textDecorationLine: "underline",
  },
  header__icons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header__icons__trash: {
    justifyContent: "center",
    alignItems: "center",
  },
  header__icons__container: {
    backgroundColor: color.brown,
    width: 45,
    height: 45,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  header__icons__plus: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginTop: 10,
    marginBottom: 10,
    width: 25,
    height: 25,
    color: color.white,
  },
  noteCard__scrollView: {
    marginBottom: 50,
  },
  noteCard__scrollView__empty: {
    alignItems: "center",
    marginTop: 200,
  },
  noteCard__scrollView__empty__text: {
    fontSize: 25,
    fontWeight: "bold",
    color: color.brown,
    fontFamily: font.font,
  },
  loaderHats: {
    paddingVertical: 130,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
