import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'
import  MapScreen from './MapScreen';
import SelectParkingScreen from '../../screens/SelectParkingScreen'
import MyAccountScreen from '../MyAccountScreen';
import CarScreen from '../CarScreen';
function Home() {
  return (
      <MapScreen />
  );
}

function Wallet() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Wallet!</Text>
    </View>
  );
}

function Cars() {
  return (
    <CarScreen/>
    );
}

function MyAccount() {
    return (
      <MyAccountScreen />
    );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#004643'
        },
        headerStyle: { 
          backgroundColor: '#004643'
      },
      headerTitleStyle: {
        color: '#004643'
      },
        tabBarActiveTintColor: '#abd1c6',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name='home' type='font-awesome' color= '#abd1c6' />
          ),
        }}
      />
      <Tab.Screen
        name="Cars"
        component={Cars}
        options={{
          tabBarLabel: 'Cars',
          tabBarIcon: ({ color, size }) => (
            <Icon name='car' type='font-awesome' color= '#abd1c6' />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarLabel: 'Wallet',
          tabBarIcon: ({ color, size }) => (
            <Icon name='money' type='font-awesome' color= '#abd1c6' /> 
          ),
        }}
      />
    <Tab.Screen
        name="My Account"
        component={MyAccount}
        options={{
          tabBarLabel: 'My Account',
          tabBarIcon: ({ color, size }) => (
            <Icon name='user' type='font-awesome' color= '#abd1c6' />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Location2({ navigation }) {
  route = useRoute();
  return (
      <MyTabs/>
  );
}
