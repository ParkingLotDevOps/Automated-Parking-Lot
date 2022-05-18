import React from 'react'
import { StyleSheet,Button, View,Text} from 'react-native';
import { StatusBar } from 'expo-status-bar';
// import { Icon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { IconButton} from 'react-native-paper';
import MainButton from '../src/components/MainButton';
import ProfilePicture from 'react-native-profile-picture';
import { inlineStyles } from 'react-native-svg';
import Login from './Login';

const MyAccountScreen = () => {
    return (
        <View style={styles.container} forceInset = {{ top: 'always'}}>

            <ProfilePicture  
                isPicture={true}
                requirePicture={require('../assets/masinuta.png')}
                shape='circle'
            />
            <Text style={{marginVertical:20,fontSize:16,color:"#abd1c6"}}>UserName</Text>
    <View>
    <Icon.Button
      name="edit"
      backgroundColor="#004643"
      onPress={console.log("setting preshtgrfdsed")}
    >
      <Text style={{color:"#abd1c6"}}>Edit profile</Text>
    </Icon.Button>
    </View>

  <View style={styles.options}>
    <View style={styles.appButtonContainer}>
    <Icon.Button
      name="car"
      backgroundColor="#004643"
    //   onPress={console.log("setting pretressed")}
    >
      <Text style={{color:"#abd1c6"}}>See cars</Text>
    </Icon.Button>
    </View>
    <View style={styles.appButtonContainer}>
    <Icon.Button
      name="money"
      backgroundColor="#004643"
    //   onPress={console.log("setting presstrewed")}
    >
      <Text style={{color:"#abd1c6"}}>Payment methods</Text>
    </Icon.Button>
    </View>
    
      <View style={styles.appButtonContainer}>
    <Icon.Button
      name="history"
      backgroundColor="#004643"
    //   onPress={console.log("setting preshtgrfdsed")}
    >
      <Text style={{color:"#abd1c6"}}>Parking history</Text>
    </Icon.Button>
    </View>
    <View style={styles.appButtonContainer}>
    <Icon.Button
      name="edit"
      backgroundColor="#004643"
    //   onPress={console.log("setting preshtgrfdsed")}
    >
      <Text style={{color:"#abd1c6"}}>Settings</Text>
    </Icon.Button>
    </View>
    <View style={styles.appButtonContainer}>
    <Icon.Button
      name="info"
      backgroundColor="#004643"
    //   onPress={console.log("setting preshtgrfdsed")}
    >
      <Text style={{color:"#abd1c6"}}>How it works</Text>
    </Icon.Button>
    </View>
    <MainButton
					text='Logout'
					// onPress={() => navigation.navigate('Login')}
				/>
</View>
		<StatusBar style='auto' />
        </View>
    )
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#004643',
		alignItems: 'center',
		justifyContent: 'center',
	},
    options:{
        justifyContent:'flex-start'
    },
    appButtonContainer:{
        marginVertical:20
    },
    
})

export default MyAccountScreen