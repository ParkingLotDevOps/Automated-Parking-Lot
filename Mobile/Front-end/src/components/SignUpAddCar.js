import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MainButton from './MainButton';
import Location2 from './map/Location2';
import {
	DefaultTheme,
	Headline,
	Provider as PaperProvider,
	TextInput,
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

export default function SignUpAddCar({ navigation }) {
	const [number, inputNumber] = React.useState('');
	return (
		<PaperProvider theme={theme}>
		<View style={styles.container}>
			<Headline style={styles.logo}>LOGO</Headline>
            <Text>Add a car</Text>
			<View style = {styles.singleInput}>
                            <TextInput
                                    style={styles.input}
                                    placeholder='Registration number'
                                    value={number}
                                    onChangeText={inputNumber}
                            />
                    </View>
			<MainButton text='Add'    onPress={ () => {
							const http = new XMLHttpRequest()
							// let params = `licensePlate=${number}`;
							http.open("POST", "https://automated-parking-lot.herokuapp.com/api/user/car", true)
							http.setRequestHeader("Content-Type", "application/json");
							http.send(JSON.stringify({licensePlate:number}));
							http.onload = () => {
								console.log(http.responseText);
								navigation.navigate(Location2);
							}
						}}
						/>
            <View>
                <Text>
                    or <Text style={styles.linkedText} onPress={() => navigation.navigate(Login)}>Skip</Text>
					{/* <Text style={styles.linkedText} >Skip</Text> */}
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
		paddingBottom: 80
	},
	input: {
		width: '90%',
		height: 44,
		borderBottomWidth: 1,
		borderBottomColor: '#A6AAB4',
		margin: 10,
	},
	input1: {
		marginBottom: 80
	},
	linkedText: {
		color: '#F9BC60',
		textAlign: 'right',
		marginBottom: 50,
		fontWeight: '700',
	},
	singleInput: {
        left: 10,
        width: '100%',
    }
});