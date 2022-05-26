import React, { useState } from "react";
import { StyleSheet, Image, View } from "react-native";
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

function validatePassword(firstPassword, secondPassword)
{
  if ((firstPassword === secondPassword) && firstPassword.length>5) {
    return true; 
  } else {
    return false; 
  }
}

export default function SignUpPassword({ navigation }) {
  const [firstPassword, setFirstPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");

  const [isAccount, setIsAccount] = useState(false);
  const [badAttempt, setBadAttempt] = useState(false);

  const route = useRoute();

  const checkPassword = () => {
    if (validatePassword(firstPassword, secondPassword)) {   
      const http = new XMLHttpRequest()
      console.log(route.params);
      http.open("POST", "https://automated-parking-lot.herokuapp.com/api/user/save", true)
      http.setRequestHeader("Content-Type", "application/json");
      // const message = {
      //   "username": route.params.name,
      //   "password": firstPassword,
      //   "name": route.params.name,
      //   "email": route.params.email
      // }
      http.send(JSON.stringify({
        username: route.params.name,
        password: firstPassword,
        name: route.params.name,
        email: route.params.email
      }));

      // http.send(message)
      http.onload = () => {
        console.log(http.responseText);
        if (http.status == 201) {
          navigation.navigate("SignUpAddCar");
          // navigation.navigate(Location2);          
        } else {
          setIsAccount(true);
          setBadAttempt(false);
        }
      }      
      setIsAccount(false);
      setBadAttempt(false);
    } else {
      setIsAccount(false);
      setBadAttempt(true);
    }
  };

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../assets/smartparking1.png')} />
				{/* <Headline style={styles.logo}>SMART PARKING LOT</Headline> */}
        {badAttempt && (
          <Text style={{ color: "white" }}>Passwords do not match or have less than 6 chars!</Text>
        )}
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
        {isAccount && (
          <Text style={{ color: "red" }}>User already exists!</Text>
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
  image : {
    marginBottom : 80
  }
});
