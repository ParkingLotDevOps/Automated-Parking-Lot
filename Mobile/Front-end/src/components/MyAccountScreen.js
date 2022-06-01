import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/FontAwesome";
import MainButton from "./MainButton/mainButton";
import ProfilePicture from "react-native-profile-picture";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from './auth';
import { useContext } from 'react';
``
const MyAccountScreen = () => {
  const [token, setToken] = useContext(AuthContext);
  const [fullName, inputFullName] = React.useState('');
  const http = new XMLHttpRequest();
  http.open(
      "GET",
      "https://automated-parking-lot.herokuapp.com/api/user/profile",
      true
  );
  http.setRequestHeader("Authorization", `Bearer ${token}`);
  http.send();
  http.onload = () => {
      const userData = JSON.parse(http.responseText);
      console.log(userData);
      inputFullName(userData.name);
  }

  const navigation = useNavigation();
  return (
    <View style={styles.container} forceInset={{ top: "always" }}>
      <ProfilePicture
        isPicture={false}
        user={JSON.stringify(fullName).replace('"', '')}
        shape='rounded'
      />

      <Text style={{ marginVertical: 20, fontSize: 16, color: "#abd1c6" }}>
        {fullName}
      </Text>

      <View style={styles.options}>
        <View>
          <Icon.Button
            name="edit"
            backgroundColor="#004643"
            onPress={() => navigation.navigate("UserProfile")}
          >
            <Text style={{ color: "#abd1c6" }}>Edit profile</Text>
          </Icon.Button>
        </View>

        <View style={styles.appButtonContainer}>
          <Icon.Button
            name="money"
            backgroundColor="#004643"
            onPress={() => navigation.navigate("PaymentMethods")}
          >
            <Text style={{ color: "#abd1c6" }}>Payment methods</Text>
          </Icon.Button>
        </View>
{/* 
        <View style={styles.appButtonContainer}>
          <Icon.Button
            name="history"
            backgroundColor="#004643"
            onPress={() => console.log("Parking history")}
          >
            <Text style={{ color: "#abd1c6" }}>Parking history</Text>
          </Icon.Button>
        </View> */}
        <View style={styles.appButtonContainer}>
          <Icon.Button
            name="edit"
            backgroundColor="#004643"
            onPress={() => navigation.navigate("Settings")}
          >
            <Text style={{ color: "#abd1c6" }}>Settings</Text>
          </Icon.Button>
        </View>
        <View style={styles.appButtonContainer}>
          <Icon.Button
            name="info"
            backgroundColor="#004643"
            onPress={() => console.log("How it Works")}
          >
            <Text style={{ color: "#abd1c6" }}>How it works</Text>
          </Icon.Button>
        </View>
        <MainButton
          text="Logout"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#004643",
    alignItems: "center",
    justifyContent: "center",
  },
  options: {
    justifyContent: "flex-start",
  },
  appButtonContainer: {
    marginVertical: 20,
  },
});

export default MyAccountScreen;
