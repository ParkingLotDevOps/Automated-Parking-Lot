
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
import MainButton from './mainButton';
import FbButton from './FbButton';
import GoogleButton from './GoogleButton';
import SignUp from './SignUp';

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
	return (
		<PaperProvider theme={theme}>
			<View style={styles.container}>
				<Headline style={styles.logo}>LOGO</Headline>
					<TextInput
						style={styles.input}
						placeholder='Phone number or mail address'
					></TextInput>
					<TextInput
						style={styles.input}
						placeholder='Password'
					></TextInput>
				<View
					style={{
						width: '90%',
						alignItems: 'stretch',
					}}
				>
					<Text style={styles.linkedText}>Forgot Password?</Text>
				</View>
				<MainButton text='Login'></MainButton>
				<FbButton></FbButton>
				<GoogleButton></GoogleButton>
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