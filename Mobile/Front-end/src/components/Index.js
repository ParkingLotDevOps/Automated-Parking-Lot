import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import MainButton from './MainButton';
import Car from './Car'
import {
	DefaultTheme,
	Headline,
	Provider as PaperProvider,
	Text,
} from 'react-native-paper';

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

export default function Index({ navigation }) {
	return (
		<PaperProvider theme={theme} onPress={() => navigation.navigate(Index)}>
			<View style={styles.container}>
				<Image style={styles.image} source={require('../../assets/smartparking1.png')} />
                <Headline style={styles.logo}>SMART PARKING LOT</Headline>
                <Text style={styles.text}>A mobile application that helps you find and reserve the perfect parking spot!</Text>
                <MainButton text="Find out more" onPress={() => navigation.navigate(Car)}></MainButton>
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
		paddingBottom: 100
	},
	text: {
		paddingBottom: 100,
		fontSize: 18,
		paddingLeft: 40,
		paddingRight: 40,
		textAlign: 'center',
		color: "#ABD1C6"
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
	}
});