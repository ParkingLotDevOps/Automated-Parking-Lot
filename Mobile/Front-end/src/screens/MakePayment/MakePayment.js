import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import {
	DefaultTheme,
	Provider as PaperProvider,
	TextInput,
} from 'react-native-paper';
import MainButton from '../../components/MainButton';
import ParkDetails from '../../components/ParkDetails';
import OTP from '../OTP';
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

export default function MakePayment({ navigation }) {
	return (
		<PaperProvider theme={theme}>
			<View style={styles.container}>
				<View style={{ width: '85%' }}>
					<Ionicons name='menu-sharp' size={45} color='white' />
				</View>
				<ParkDetails
					title='Alexandru Ioan Cuza University of Iasi'
					details='Space 4c'
				></ParkDetails>
				<Text style={styles.text1}>Total fee = 100</Text>
				<Text style={styles.text2}>Select preffered Card</Text>
				<Image
					style={styles.image}
					source={require('../../../assets/Cards.png')}
				/>
				<Text style={styles.text2}>Input New Card Details</Text>
				<TextInput
					style={styles.input}
					placeholder='Card number'
					keyboardType='numeric'
				></TextInput>
				<View style={styles.line}>
					<TextInput
						style={styles.input2}
						placeholder='MM/YY'
						keyboardType='numeric'
					></TextInput>
					<TextInput
						style={styles.input2}
						placeholder='CVV'
						keyboardType='numeric'
					></TextInput>
				</View>
				<MainButton
					style={styles.buttons}
					text='Make Payment'
					onPress={() => navigation.navigate(OTP)}
				></MainButton>
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
	buttons: {
		marginTop: 10,
	},
	menu: {
		marginLeft: '6%',
		marginRight: '87.73%',
		marginTop: '9%',
		marginBottom: '87.81%',
	},
	text1: {
		color: '#F9BC60',
		textAlign: 'center',
		marginTop: 21,
		fontSize: 17,
	},
	line: {
		flexDirection: 'row',
	},
	text2: {
		width: 262,
		marginTop: 18,
		marginBottom: 10,
		fontSize: 16,
		fontWeight: '400',
		color: '#ABD1C6',
		textAlign: 'center',
	},
	text3: {
		width: 231,
		marginTop: 18,
		marginBottom: 50,
		fontSize: 14,
		fontWeight: '400',
		color: '#ABD1C6',
		textAlign: 'center',
	},
	input: {
		width: '85%',
		height: 44,
		borderBottomWidth: 1,
		borderBottomColor: '#A6AAB4',
		margin: 10,
		marginTop: 10,
	},
	input2: {
		width: '40%',
		height: 44,
		borderBottomWidth: 1,
		borderBottomColor: '#A6AAB4',
		marginBottom: 30,
		margin: 10,
		marginTop: 10,
	},
});
