import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

const styles = StyleSheet.create({
	googleButton: {
		backgroundColor: '#FFFFFF',
		padding: 5,
		marginBottom: 50,
		width: '85%',
		color: '#001E1D',
		borderRadius: 6,
	},
});

export default function GoogleButton() {
	return (
		<Button style={styles.googleButton}>
			<AntDesign name='google' size={24} color='black' />
			<Text
				style={{
					color: 'rgba(0, 0, 0, 0.54)',
					fontWeight: '700',
				}}
			>
				Log in with google
			</Text>
		</Button>
	);
}
