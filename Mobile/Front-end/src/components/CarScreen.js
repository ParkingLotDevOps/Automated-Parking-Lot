import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/FontAwesome";
import MainButton from "./MainButton/mainButton";
import { useNavigation } from "@react-navigation/native";
import AddCar from "./AddCar";

const CarScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container} forceInset={{ top: "always" }}>

      <View >

        <Text>List of cars</Text>

        <MainButton
          text="Add new car"
          onPress={() => navigation.navigate(AddCar)}
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
  appButtonContainer: {
    marginVertical: 20,
  },
});

export default CarScreen;