import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import * as color from "../../assets/stylesColor";
import * as font from "../../assets/stylesFontFamily";

const AppFormField = (props) => {
  const {
    placeholder,
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        {...inputProps}
        
      />
      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
    </View>
  );
};

export default AppFormField;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 5,
  },
  input: {
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: color.white,
    borderColor: color.brown,
    padding: 10,
    fontSize: 18,
    fontFamily: font.font,
    shadowRadius: 10,
    color: color.black,
    shadowColor: color.brown,
    shadowOpacity: 0.4,
    elevation: 10,
  },
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "monospace",
  },
});
