import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

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
    backgroundColor: "black",
    width: "65%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  buttonRed:{
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "red",
    width: "65%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  text: {
    display: "flex",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "monospace",
    color: "white",
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    alignSelf: "center",
  },
});

const ButtonShared = ({
  title,
  onPress,
  isValid,
  color = false
}) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.7 : 1,
          },
          color ? (styles.buttonRed) : (styles.button)         
        ]}
        onPress={onPress}
        disabled={!isValid}
      >
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default ButtonShared;
