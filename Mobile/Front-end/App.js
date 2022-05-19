import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/components/Login";
import SignUp from "./src/components/SignUp";
import SignUpPhone from "./src/components/SignUpPhone";
import SignUpVerification from "./src/components/SignUpVerification";
import SignUpPassword from "./src/components/SignUpPassword";
import SignUpAddCar from "./src/components/SignUpAddCar";
import Car from "./src/components/Car";
import Index from "./src/components/Index";
import LogoMap from "./src/components/LogoMap";
import LogoPayment from "./src/components/LogoPayment";
import Location2 from "./src/components/map/Location2";
import { Map } from "./src/components/map/Map";
import MapScreen from "./src/components/map/MapScreen";
import SelectParkingScreen from "./src/screens/SelectParkingScreen/SelectParkingScreen";
import BookSpace from "./src/screens/BookSpace/BookSpace";
import ActiveBooking from "./src/screens/ActiveBooking/ActiveBooking";
import QR from "./src/screens/QR"
import 'react-native-gesture-handler';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Index"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignUpPhone" component={SignUpPhone} />
        <Stack.Screen name="SignUpVerification" component={SignUpVerification}/>
        <Stack.Screen name="SignUpPassword" component={SignUpPassword} />
        <Stack.Screen name="SignUpAddCar" component={SignUpAddCar} />
        <Stack.Screen name="Car" component={Car} />
        <Stack.Screen name="LogoMap" component={LogoMap} />
        <Stack.Screen name="LogoPayment" component={LogoPayment} />
        <Stack.Screen name="Location2" component={Location2} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
		<Stack.Screen name="SelectParkingScreen" component={SelectParkingScreen}/>
		<Stack.Screen name="BookSpace" component={BookSpace} />
		<Stack.Screen name="QR" component={QR}/>
		<Stack.Screen name="ActiveBooking" component={ActiveBooking}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
