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

function validatePhone(phone)
{
  if (/^\d{10}$/.test(phone)) {
    return true; 
  } else {
    return false; 
  }
}

export default function SignUpPhone({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [badAttempt, setBadAttempt] = useState(false);
  const route = useRoute();

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../assets/smartparking1.png')} />
				<Headline style={styles.logo}>SMART PARKING LOT</Headline>
        <TextInput
          style={styles.input}
          keyboardType="phone-pad"
          placeholder="Phone number"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        ></TextInput>
        {badAttempt && (
          <Text style={{ color: "white" }}>Phone must contain 10 digits!</Text>
        )}
        <MainButton
          text="Next"
          onPress={() => {
              if (validatePhone(phoneNumber)) {
                setBadAttempt(false);
                  navigation.navigate("SignUpVerification", {
                    email: route.params.email,
                    name: route.params.name,
                    phoneNumber: phoneNumber,
                  })
              } else {
                setBadAttempt(true);
              }
            }
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
    marginBottom: 80,
    marginTop: 20,
  },
  linkedText: {
    color: "#F9BC60",
    textAlign: "right",
    marginBottom: 50,
    fontWeight: "700",
  },
});
