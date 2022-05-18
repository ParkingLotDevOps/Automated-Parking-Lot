import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import {
	DefaultTheme,
	Provider as PaperProvider,
	Text,
} from 'react-native-paper';
import MainButton from '../../components/MainButton/mainButton';
import { Ionicons } from '@expo/vector-icons';

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

export default class Succes extends React.Component {
	render() {
		return (
			<PaperProvider theme={theme}>
				<View style={styles.container}>
					<View style={{ width: '85%' }}>
						<Ionicons name='menu-sharp' size={45} color='white' />
					</View>
					<Text style={styles.text1}>Payment succesful!</Text>
					<Text style={styles.text2}>
						Your payment transaction was successful. You will
						recieve an email confirmation containing your invoice.
					</Text>
					<Image
						style={styles.image}
						source={require('../../../assets/Done.png')}
					/>
					<MainButton
						style={styles.buttons}
						text='Go Back To Home Screen'
						onPress={() =>
							this.props.navigation.navigate('MakePayment')
						}
					></MainButton>
					<StatusBar style='auto' />
				</View>
			</PaperProvider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#004643',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttons: {
		marginTop: 21,
	},
	image: {
		marginBottom: 50,
		marginTop: 22,
		width: '40%',
		resizeMode: 'contain',
	},
	text1: {
		width: 181,
		marginTop: 5,
		fontSize: 20,
		fontWeight: '400',
		color: '#F9BC60',
		textAlign: 'center',
	},
	text2: {
		width: 262,
		marginTop: 18,
		fontSize: 14,
		fontWeight: '400',
		color: '#ABD1C6',
		textAlign: 'center',
	},
});
