import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
	DefaultTheme,
	Provider as PaperProvider,
	TextInput,
    Text
} from 'react-native-paper';
import MainButton from './MainButton';
import ProfilePicture from "react-native-profile-picture";
import { AuthContext } from './auth';
import { useContext } from 'react';
const theme = {
	...DefaultTheme,
	roundness: 2,
	colors: {
		...DefaultTheme.colors,
		primary: '#004643',
		accent: '#E16162',
		background: '#004643',
		surface: '#FCFCFF',
		text: '#FFFFFE',
		placeholder: '#ABD1C6',
	},
};

export default function UserProfile() {
    const navigation = useNavigation();
	const [fullName, inputFullName] = React.useState('');
    const [username, inputUsername] = React.useState('');
    
    let [fullNameDisabled, setFullNameDisabled] = useState(true);
    let [usernameDisabled, setUsernameDisabled] = useState(true);

    const [token, setToken] = useContext(AuthContext);
    console.log("AVEM TOOOOKEN", token);
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
        inputUsername(userData.username);
    }
	return (
		<PaperProvider theme={theme}>
			<View style={styles.container}>
                <View>
                    <ProfilePicture
                        isPicture={true}
                        requirePicture={require("../../assets/masinuta.png")}
                        shape="circle"
                    />
                </View>
                <View style = {styles.inputsContainer}>
                    <View style = {styles.singleInput}>
                        <Text style = {{left: 15}}>Full Name</Text>
                        <View style = {styles.inputField}>
                            <TextInput
                                    style={styles.input}
                                    placeholder=''
                                    value={fullName}
                                    onChangeText={inputFullName}
                                    disabled = {fullNameDisabled}
                            />
                            <Icon.Button
                                name="edit"
                                backgroundColor="#004643"
                                style={{flex: 1}}
                                onPress = {() => setFullNameDisabled(false)}
                            ></Icon.Button>
                        </View>
                    </View>
                    <View style = {styles.singleInput}>
                        <Text style = {{left: 15}}>Username</Text>
                        <View style = {styles.inputField}>
                            <TextInput
                                style={styles.input}
                                placeholder=''
                                value={username}
                                onChangeText={inputUsername}
                                disabled = {usernameDisabled}>
                            </TextInput>
                            <Icon.Button
                                name="edit"
                                backgroundColor="#004643"
                                style={{flex: 1}}
                                onPress = {() => setUsernameDisabled(false)}
                            ></Icon.Button>
                        </View>                        
                    </View>
                    
                </View>
                   
                <View style = {styles.buttonContainer}>
                    <MainButton
                        text='Save'
                        onPress = {() => navigation.navigate("Location2")}
                    />
                </View>

			</View>
		</PaperProvider>
	);
}

const styles = StyleSheet.create({

	container: {
        flex: 1,
		backgroundColor: '#004643',
		alignItems: 'center',
		justifyContent: 'center',
	},
	input: {
		width: '90%',
		height: 44,
		borderBottomWidth: 1,
		borderBottomColor: '#A6AAB4',
		margin: 10,
        position: 'relative'
	},
    buttonContainer: {
        width : '100%',
        justifyContent: 'center',
        alignItems:'center'
    },
    inputsContainer: {
        width: '100%',
        marginBottom: 100,
        marginTop: 100
    },
    inputField: {
        flexDirection: 'row',
        paddingBottom: 10,
        width: '90%',
    },
    singleInput: {
        left: 10,
        width: '100%',
    }
});