import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import AddHat from "./components/hats/AddHat";
import DetailsHat from "./components/hats/DetailsHat";
import Sombreros from "./components/hats/Sombreros";
import Recicle from "./components/recicle/Recicle";

import Login from "./screens/Login";
import * as color from "./assets/stylesColor";

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
          {(props) => <Sombreros {...props} />}
        </Stack.Screen>
        <Stack.Screen name="AddHat">
          {(props) => (
            <AddHat
              {...props}
              hat={hat}
              setHat={setHat}
              handleHat={handleHat}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Recicle">
          {(props) => <Recicle {...props} />}
        </Stack.Screen>
        <Stack.Screen name="DetailsHat">
          {(props) => <DetailsHat {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
