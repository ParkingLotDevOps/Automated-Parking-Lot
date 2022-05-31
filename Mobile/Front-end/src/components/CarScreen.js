import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/FontAwesome";
import MainButton from "./MainButton/mainButton";
import { useNavigation } from "@react-navigation/native";
import AddCar from "./AddCar";
import { AuthContext } from './auth';
import { useContext } from 'react';
import { useState, useEffect } from "react";


let showMyCars = (cars) => {
    return cars.map((car) => (
        <View style={{flexDirection:"row", left:30}}>
           <Icon name='car' type='font-awesome' color= '#abd1c6' />
            <Text style={{color:"#abd1c6"}}>
                {car.licensePlate}
            </Text>
      </View>
    ));
}

const CarScreen = () => {
    const [cars, setCars] = useState([]);
    const navigation = useNavigation();
    const [token, setToken] = useContext(AuthContext);
    const http = new XMLHttpRequest();
    http.open(
        "GET",
        "https://automated-parking-lot.herokuapp.com/api/user/cars",
        true
    );
    http.setRequestHeader("Authorization", `Bearer ${token}`);
    http.send();
    http.onload = () => {
    //   console.log(http.responseText);
      setCars(JSON.parse(http.responseText));
    }
    
  return (

    <View style={styles.container} forceInset={{ top: "always" }}>

      <View >
        <View style={styles.cars}>
            {showMyCars(cars)}
        </View>

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
cars:{
    marginBottom:200
}
});

export default CarScreen;