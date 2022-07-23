import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import AddHat from "./components/hats/AddHat";
import Sombreros from "./components/hats/Sombreros";
import Recicle from "./components/recicle/Recicle";

import Login from "./screens/Login";

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
      <Stack.Navigator>
        <Stack.Screen name="Sombreros">
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
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
