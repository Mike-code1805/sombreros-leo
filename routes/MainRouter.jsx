import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Sombreros from "../components/hats/Sombreros";
import AddHat from "../components/hats/AddHat";
import Recicle from "../components/recicle/Recicle";
import DetailsHat from "../components/hats/DetailsHat";
import EdiHat from "../components/hats/EdiHat";
import Login from "../components/user/Login";
import * as color from "../assets/stylesColor";
import * as font from "../assets/stylesFontFamily";
import Register from "../components/user/Register";
import Welcome from "../components/welcome/Welcome";

const Stack = createNativeStackNavigator();

export const MainRouter = () => {
  const [id, setId] = useState("");
  const [dataCalled, setDataCalled] = useState();
  const [loading, setLoading] = useState(true);
  const [isDone, setIsDone] = useState();
  const [isPay, setIsPay] = useState();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: color.brown_light,
            textDecorationLine: "underline",
            textDecorationStyle: "solid",
          },
          headerTitleStyle: {
            fontFamily: font.font,
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="Login" options={{ title: "Bienvenido...!" }}>
          {(props) => <Login {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Register" options={{ title: "Registrate...!" }}>
          {(props) => <Register {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Welcome" options={{ title: "Bienvenido...!" }}>
          {(props) => <Welcome {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Sombreros" options={{ title: "Sombreros" }}>
          {(props) => (
            <Sombreros
              {...props}
              setId={setId}
              setDataCalled={setDataCalled}
              setLoading={setLoading}
              setIsDone={setIsDone}
              setIsPay={setIsPay}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="AddHat" options={{ title: "Añadir Sombrero" }}>
          {(props) => <AddHat {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="Recicle"
          options={{ title: "Papelera de Sombreros" }}
        >
          {(props) => <Recicle {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="DetailsHat"
          options={{ title: "Detalles del Sombrero" }}
        >
          {(props) => (
            <DetailsHat
              {...props}
              id={id}
              dataCalled={dataCalled}
              setDataCalled={setDataCalled}
              loading={loading}
              setIsDone={setIsDone}
              setIsPay={setIsPay}
              isDone={isDone}
              isPay={isPay}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="EditHat" options={{ title: "Modificar Sombrero" }}>
          {(props) => (
            <EdiHat
              {...props}
              id={id}
              dataCalled={dataCalled}
              setDataCalled={setDataCalled}
              isDone={isDone}
              isPay={isPay}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
