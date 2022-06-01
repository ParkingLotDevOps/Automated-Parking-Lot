import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import SideMenuBar from '../components/SideMenuBar';
import MainButton from '../components/MainButton';
const AddCard = () => {
			const navigation = useNavigation();
	return (

		<View style={styles.container}>
			<View
				style={{
					paddingVertical: 25,
					width: '85%',
					flexDirection: 'row',
					flexWrap: 'wrap',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<SideMenuBar />
				<Image
					style={{ width: 100, height: 100, resizeMode: 'contain' }}
					source={require('../../assets/smartparking1.png')}
				/>
				<View></View>
			</View>
			<View
				style={{
					width: '100%',
					flex: 1,
					backgroundColor: '#004643',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Text
					style={{
						color: '#FFFFFE',
						fontWeight: '400',
						fontSize: 18,
					}}
				>
					Add Card
				</Text>
				<TextInput
					style={styles.input}
					placeholder='CardNumber'
					placeholderTextColor={'#ABD1C6'}
				></TextInput>
				<TextInput
					style={styles.input}
					placeholder='Exp. date'
					placeholderTextColor={'#ABD1C6'}
				></TextInput>
				<TextInput
					style={styles.input}
					placeholder='Card Holder'
					placeholderTextColor={'#ABD1C6'}
				></TextInput>
				<TextInput
					style={styles.input}
					placeholderTextColor={'#ABD1C6'}
					placeholder='CVV Code'
				></TextInput>
				<MainButton text='Add' onPress={() => navigation.navigate(Location2)}/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#004643',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	input: {
		color: '#ABD1C6',
		width: '90%',
		height: 44,
		borderBottomWidth: 1,
		borderBottomColor: '#A6AAB4',
		margin: 10,
	},
});

export default AddCard;
