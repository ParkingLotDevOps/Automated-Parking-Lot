import React, { useState } from "react";

import { StyleSheet, Button, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import MainButton from "./MainButton";

import {
  DefaultTheme,
  Headline,
  Provider as PaperProvider,
  TextInput,
  Text,
} from "react-native-paper";

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

export default function SignUp({ navigation }) {
  // state = {
  //     email: 'demo',
  // };

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Headline style={styles.logo}>LOGO</Headline>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Email adress"
          value={email}
          onChangeText={(text) => setEmail(text)}
        ></TextInput>
        <TextInput
          style={[styles.input, { marginBottom: 200 }]}
          autoCapitalize="none"
          placeholder="Full Name"
          value={name}
          onChangeText={(text) => setName(text)}
        ></TextInput>
        <MainButton
          text="Next"
          title="Sign Up"
          onPress={() =>
            navigation.navigate("SignUpPhone", { email: email, name: name })
          }
        />
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
    // marginBottom: 80,
    marginTop: 20,
  },
  linkedText: {
    color: "#F9BC60",
    textAlign: "right",
    marginBottom: 50,
    fontWeight: "700",
  },
});
