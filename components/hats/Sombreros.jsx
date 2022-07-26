import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as eva from "@eva-design/eva";
import * as color from "../../assets/stylesColor";
import * as font from "../../assets/stylesFontFamily";
import { ApplicationProvider, Icon, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { data } from "../../data";
import { useDispatch, useSelector } from "react-redux";
import { getHatById, getHats } from "../../redux/apiCalls";
import HatContainer from "./HatContainer";

import getHatByIdService from "../../services/getHatByIdService";

const Sombreros = ({ navigation, ...props }) => {
  const [loading, setLoading] = useState(false);

  const gotoAdd = () => {
    navigation.navigate("AddHat");
  };

  const gotoRecicle = async () => {
    navigation.navigate("Recicle");
  };
  const hat = useSelector((state) => state.hat.hats);
  const dispatch = useDispatch();
  useEffect(() => {
    getHats(dispatch);
  }, [dispatch]);
  const array = hat.slice().reverse();
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
        {loading ? (
          <View style={styles.loader}>
            <ActivityIndicator size={"large"} color={color.brown} />
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
  loader: {
    padding: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
