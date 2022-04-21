<<<<<<< Updated upstream
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button,
    useWindowDimensions } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';

import colors from './app/config/colors.js';

const useOrientation = () => {
  const height = useWindowDimensions().height;
  const width = useWindowDimensions().width;

  return { isPortrait: height > width };
};

export { useOrientation };

export default function App() {
  console.log("App executed");
  console.log(useOrientation());

  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.logoContainer}>
            <Image source={require("./assets/logo.png")} fadeDuration={1000}/>
            <Text style={styles.textStyle}>Smart Parking Lot</Text>
        </View>

        <View style={styles.buttonContainer}>
            <Button title="Skip" style={styles.buttonStyleLeft} onPress={() => {return <WelcomeScreen/>}}>
            </Button>
            <Button title="Next" style={styles.buttonStyle} onPress={() => {return <WelcomeScreen/>}}>
            </Button>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
      //padding: 60,
      alignItems: 'center',
      justifyContent: 'flex-end',
  },
    buttonContainer: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
  textStyle: { color: 'white',
        alignSelf: 'center',
        fontSize: 28,
      },
  buttonStyle: { backgroundColor: colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        width: 343,
        height: 56
    },
  buttonStyleLeft: { backgroundColor: colors.secondary,
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: 343,
        height: 56
    },
});
=======
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
			</Stack.Navigator>
		</NavigationContainer>
	);
}
>>>>>>> Stashed changes
