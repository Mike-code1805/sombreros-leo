import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import * as eva from "@eva-design/eva";
import * as color from "../../assets/stylesColor";
import * as font from "../../assets/stylesFontFamily";
import { ApplicationProvider, Icon, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { data } from "../../data";
import { useDispatch, useSelector } from "react-redux";
import { getHats } from "../../redux/apiCalls";
import axios from "axios";
import HatContainer from "./HatContainer";

const Sombreros = ({ navigation }) => {
  const gotoAdd = () => {
    navigation.navigate("AddHat");
  };

  const gotoRecicle = async () => {
    navigation.navigate("Recicle");
    const res = await axios.get(`http://192.168.2.43:5000/api/hat`, {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZGM5MDE1ZWVmMzQ3ZmYzMjVhZDBlNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1ODYzMzc3MiwiZXhwIjoxNjU5MjM4NTcyfQ.0xMv6YdVux7444RjiWfUDlZiRgIqqgv1O5RuJD2IEXk",
      },
    });

    console.log(res.data);
  };

  const gotoDetails = () => {
    navigation.navigate("DetailsHat");
  };

  const hat = useSelector((state) => state.hat);
  const dispatch = useDispatch();
  useEffect(() => {
    getHats(dispatch);
  }, [dispatch]);

  console.log(hat);
  return (
    <View style={styles.noteCard}>
      <View style={styles.header}>
        <Text style={styles.header__text}>Hola Leoncio!</Text>
        <View style={styles.header__icons}>
          <View style={styles.header__icons__trash}>
            <TouchableOpacity
              style={styles.header__icons__container}
              onPress={gotoRecicle}
            >
              <IconRegistry icons={EvaIconsPack} />
              <ApplicationProvider {...eva} theme={eva.light}>
                <Icon name="trash-2-outline" fill="white" style={styles.icon} />
              </ApplicationProvider>
            </TouchableOpacity>
          </View>
          <View style={styles.header__icons__plus}>
            <TouchableOpacity
              style={styles.header__icons__container}
              onPress={gotoAdd}
            >
              <IconRegistry icons={EvaIconsPack} />
              <ApplicationProvider {...eva} theme={eva.light}>
                <Icon name="plus-outline" fill="white" style={styles.icon} />
              </ApplicationProvider>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text style={styles.noteCard__text}>Total: 1</Text>
      <View style={styles.noteCard__divider} />
      <View style={styles.noteCard__search}>
        <TextInput
          placeholder="Buscar..."
          style={styles.noteCard__search__input}
        ></TextInput>
        <TouchableOpacity style={styles.noteCard__search__container}>
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider {...eva} theme={eva.light}>
            <Icon name="search" fill="white" style={styles.icon} />
          </ApplicationProvider>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.noteCard__search__container}
          onPress={gotoAdd}
        >
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider {...eva} theme={eva.light}>
            <Icon name="settings-2-outline" fill="white" style={styles.icon} />
          </ApplicationProvider>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.noteCard__scrollView}>
        {data.length === 0 ? (
          <View style={styles.noteCard__scrollView__empty}>
            <Text style={styles.noteCard__scrollView__empty__text}>
              No hay sombreros aún!
            </Text>
          </View>
        ) : (
          data.map((item, index) =>
            item.state_payment == "p" && item.pendiente == true ? (
              <HatContainer
                state={"Pendiente"}
                index={index}
                name={item.name}
                date={item.date}
                onPressDelete={gotoDetails}
                onPressMirar={gotoDetails}
              />
            ) : item.state_payment == "p" && item.pendiente == false ? (
              <HatContainer
                state={"Trabajado"}
                color={"yellow"}
                index={index}
                name={item.name}
                date={item.date}
                onPressDelete={gotoDetails}
                onPressMirar={gotoDetails}
              />
            ) : (
              <HatContainer
                state={"Cancelado"}
                color={"green"}
                index={index}
                name={item.name}
                date={item.date}
                onPressDelete={gotoDetails}
                onPressMirar={gotoDetails}
              />
            )
          )
        )}
      </ScrollView>
    </View>
  );
};

export default Sombreros;

const styles = StyleSheet.create({
  noteCard: {
    padding: 10,
    marginBottom: 40,
    flex: 1,
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
  noteCard__search__text: {
    color: color.white,
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: font.font,
  },
  noteCard__search__input: {
    height: 40,
    width: "65%",
    paddingHorizontal: 10,
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
  noteCard__scrollView__hat__p: {
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
  noteCard__scrollView__hat__p__true: {
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
  noteCard__scrollView__hat__c: {
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
  noteCard__scrollView__hat__note: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  noteCard__scrollView__hat__note__text: {
    flexDirection: "row",
    width: "80%",
  },
  noteCard__scrollView__hat__index: {
    fontWeight: "bold",
    fontSize: 14,
    fontFamily: font.font,
  },
  noteCard__scrollView__hat__text: {
    fontWeight: "bold",
    fontSize: 13,
    fontFamily: font.font,
    marginLeft: 5,
    width: "60%",
  },
  noteCard__scrollView__hat__text__c: {
    fontWeight: "bold",
    fontSize: 13,
    fontFamily: font.font,
    marginLeft: 5,
    color: color.green,
  },
  noteCard__scrollView__hat__text__p: {
    fontWeight: "bold",
    fontSize: 13,
    fontFamily: font.font,
    marginLeft: 5,
    color: color.brown,
  },
  noteCard__scrollView__hat__text__c__true: {
    fontWeight: "bold",
    fontSize: 13,
    fontFamily: font.font,
    marginLeft: 5,
    color: color.yellow,
  },
  noteCard__scrollView__hat__delete__container: {
    justifyContent: "flex-end",
  },
  noteCard__scrollView__hat__delete: {
    color: color.brown,
    fontWeight: "bold",
    fontSize: 18,
    fontFamily: font.font,
  },
  noteCard__scrollView__hat__date: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  noteCard__scrollView__hat__date__text: {
    fontFamily: font.font,
  },
  noteCard__scrollView__hat__date__edit: {
    justifyContent: "center",
  },
  noteCard__scrollView__hat__date__edit__text: {
    color: color.brown,
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: font.font,
  },
});
