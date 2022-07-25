import { StyleSheet, View } from "react-native";
import React from "react";
import AddHat from "../components/hats/AddHat";
import { NavigationContainer } from "@react-navigation/native";

const AddHatScreen = () => {
  return (
    <NavigationContainer>
      <AddHat />
    </NavigationContainer>
  );
};

export default AddHatScreen;

const styles = StyleSheet.create({});
