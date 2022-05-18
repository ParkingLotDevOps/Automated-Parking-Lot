import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import SignUp from './components/SignUp';
import SignUpPhone from './components/SignUpPhone';
import SignUpVerification from './components/SignUpVerification';
import SignUpPassword from './components/SignUpPassword';
import SignUpAddCar from './components/SignUpAddCar';
import Car from './components/Car';
import Index from './components/Index';
import LogoMap from './components/LogoMap';
import LogoPayment from './components/LogoPayment';
import Location2 from './components/map/Location2';
const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Index'  screenOptions={{headerShown: false}}>
				<Stack.Screen name='Index' component={Index}/>
				<Stack.Screen name='Login' component={Login} />
				<Stack.Screen name='SignUp' component={SignUp} />
				<Stack.Screen name='SignUpPhone' component={SignUpPhone} />
				<Stack.Screen name='SignUpVerification' component={SignUpVerification} />
				<Stack.Screen name='SignUpPassword' component={SignUpPassword} />
				<Stack.Screen name='SignUpAddCar' component={SignUpAddCar} />
				<Stack.Screen name='Car' component={Car}/>
				<Stack.Screen name='LogoMap' component={LogoMap}/>
				<Stack.Screen name='LogoPayment' component={LogoPayment}/>
				<Stack.Screen name='Location2' component={Location2}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}