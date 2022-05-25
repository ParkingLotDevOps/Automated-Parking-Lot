import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import MainButton from "./MainButton";
import {
  DefaultTheme,
  Headline,
  Provider as PaperProvider,
  TextInput,
  Text,
} from "react-native-paper";
import { useRoute } from "@react-navigation/native";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#004643",
    accent: "#E16162",
    background: "#004643",
    surface: "#FCFCFF",
    text: "#FFFFFE",
    placeholder: "#ABD1C6",
  },
};

export default function SignUpPhone({ navigation }) {
  const [firstPassword, setFirstPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");

  const [isDiffrent, setIsDiffrent] = useState(false);

  const route = useRoute();

  const checkPassword = () => {
    if (firstPassword === secondPassword) {
      //TO DO: Make register request

      // email = route.params.email
      // name = route.params.name
      //phoneNumber = route.params.phoneNumber
      //password = firstPassword

      navigation.navigate("SignUpAddCar");
      setIsDiffrent(false);
    } else {
      setIsDiffrent(true);
    }
  };

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Headline style={styles.logo}>LOGO</Headline>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Password"
          value={firstPassword}
          onChangeText={(text) => setFirstPassword(text)}
        ></TextInput>
        <TextInput
          style={[styles.input, styles.input1]}
          secureTextEntry={true}
          placeholder="Confirm password"
          value={secondPassword}
          onChangeText={(text) => setSecondPassword(text)}
        ></TextInput>
        {isDiffrent && (
          <Text style={{ color: "red" }}>Passwords don't match</Text>
        )}
        <MainButton text="Create Account" onPress={() => checkPassword()} />
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#004643",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    color: "#E16162",
    paddingBottom: 80,
  },
  input: {
    width: "90%",
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: "#A6AAB4",
    margin: 10,
  },
  input1: {
    marginBottom: 80,
  },
  linkedText: {
    color: "#F9BC60",
    textAlign: "right",
    marginBottom: 50,
    fontWeight: "700",
  },
});
