import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { useFormikContext } from "formik";
import { Text } from "react-native";
import * as color from "../../shared/desing/stylesColor"

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: color.green,
    width: "65%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    fontFamily: "monospace",
  },
});

const AppFormSubmitButton = ({ title }) => {
  const { handleSubmit, isValid } = useFormikContext();
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.7 : 1,
          },
          styles.button,
        ]}
        onPress={handleSubmit}
        disabled={!isValid}
      >
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default AppFormSubmitButton;
