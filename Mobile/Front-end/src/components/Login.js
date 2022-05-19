import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
	DefaultTheme,
	Headline,
	Provider as PaperProvider,
	TextInput,
	Text,
} from 'react-native-paper';
import MainButton from './MainButton';
import FbButton from './FbButton';
import GoogleButton from './GoogleButton';
import SignUp from './SignUp';
import Location2  from './map/Location2';

var XMLHttpRequest = require('xhr2');
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

export default function Login({ navigation }) {
	const [username, inputUsername] = React.useState('');
	const [password, inputPassword] = React.useState('');
	return (
		<PaperProvider theme={theme}>
			<View style={styles.container}>
				<Headline style={styles.logo}>LOGO</Headline>
					<TextInput
						style={styles.input}
						placeholder='Username'
						value={username}
						onChangeText={inputUsername}
					></TextInput>
					<TextInput
						style={styles.input}
						placeholder='Password'
						value={password}
						onChangeText={inputPassword}
					></TextInput>
				<View
					style={{
						width: '90%',
						alignItems: 'stretch',
					}}
				>
					<Text style={styles.linkedText}>Forgot Password?</Text>
				</View>
				<MainButton
					text='Login'
					
					onPress = { () => {
							const http = new XMLHttpRequest()
							var params = 'username=map&password=1234';
							http.open("POST", "https://fierce-oasis-90524.herokuapp.com/api/login", true)
							http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
							http.send(params)
							http.onload = () => {
								console.log(http.responseText);
								navigation.navigate(Location2);
							}
						}
					}

				/>
				<FbButton/>
				<GoogleButton/>
				<View>
					<Text>
						or <Text style={styles.linkedText} onPress={() => navigation.navigate(SignUp)}>SignUp</Text>
					</Text>
				</View>
				<StatusBar style='auto' />
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
	logo: {
		color: '#E16162',
	},
	input: {
		width: '90%',
		height: 44,
		borderBottomWidth: 1,
		borderBottomColor: '#A6AAB4',
		margin: 10,
	},
	linkedText: {
		color: '#F9BC60',
		textAlign: 'right',
		marginBottom: 50,
		fontWeight: '700',
	},
});