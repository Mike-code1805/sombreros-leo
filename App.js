import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import AddHat from "./components/hats/AddHat";
import DetailsHat from "./components/hats/DetailsHat";
import Sombreros from "./components/hats/Sombreros";
import Recicle from "./components/recicle/Recicle";
import Login from "./screens/Login";
import * as color from "./assets/stylesColor";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const Stack = createNativeStackNavigator();

export default function App() {
  const [hat, setHat] = useState({});
  const [hats, setHats] = useState([]);

  const handleHat = () => {
    let newHat = hat;
    let newHats = [newHat, ...hats];
    console.log("newHats: ", newHats);
    setHats(newHats);
    console.log("newHats: ", newHats);
  };
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
            fontFamily: "monospace",
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="Sombreros" options={{ title: "Sombreros" }}>
          {(props) => (
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <Sombreros {...props} />
              </PersistGate>
            </Provider>
          )}
        </Stack.Screen>
        <Stack.Screen name="AddHat" options={{ title: "Añadir Sombrero" }}>
          {(props) => (
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <AddHat
                  {...props}
                  hat={hat}
                  setHat={setHat}
                  handleHat={handleHat}
                />
              </PersistGate>
            </Provider>
          )}
        </Stack.Screen>
        <Stack.Screen name="Recicle">
          {(props) => (
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <Recicle {...props} />
              </PersistGate>
            </Provider>
          )}
        </Stack.Screen>
        <Stack.Screen
          name="DetailsHat"
          options={{ title: "Detalles del Sombrero" }}
        >
          {(props) => (
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <DetailsHat {...props} />
              </PersistGate>
            </Provider>
          )}
        </Stack.Screen>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
