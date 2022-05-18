import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Image } from 'react-native';
import { Button } from 'react-native-paper';
import {
	DefaultTheme,
	Headline,
	Provider as PaperProvider,
	TextInput,
	Text,
} from 'react-native-paper';
import MainButton from '../src/components/MainButton';
import Login from './Login';

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

export default function LogoPayment({ navigation }) {
	return (
		<PaperProvider theme={theme}>
			<View style={styles.container}>
				<Image
					style={styles.image}
					source={require('../assets/payment.png')}
				/>
				<Text style={styles.titleText}>Easy Payment</Text>
				<Text style={styles.innerText}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elitt
				</Text>
				<MainButton
					text='Get started'
					onPress={() => navigation.navigate(Login)}
				>
					{' '}
				</MainButton>
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
	titleText: {
		width: '70%',
		height: 44,
		margin: 10,
		fontSize: 25,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	innerText: {
		width: '80%',
		fontSize: 15,
		textAlign: 'center',
		color: '#ABD1C6',
		marginBottom: 25,
	},
	image: {
		marginBottom: 40,
		marginTop: '20%',
		width: '80%',
		resizeMode: 'contain',
	},
});
