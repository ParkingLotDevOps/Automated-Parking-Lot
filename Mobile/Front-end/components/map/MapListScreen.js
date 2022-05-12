import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import { Icon } from 'react-native-elements'

const MapListScreen = ({ navigation }) => {
    return (
        <SafeAreaView forceInset = {{ top: 'always'}}>
            <Text style={{ fontSize: 50 }}>Parking List</Text>
            <Icon name='home' type='font-awesome' />
            <Icon name='money' type='font-awesome' /> 
            <Icon name='car' type='font-awesome' />
            <Icon name='gear' type='font-awesome' />  
        </SafeAreaView>
    )
}

export default MapListScreen