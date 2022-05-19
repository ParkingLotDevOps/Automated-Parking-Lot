import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
	facebookButton: {
		backgroundColor: '#1877F2',
		padding: 5,
		marginBottom: 15,
		width: '85%',
		color: '#001E1D',
		borderRadius: 6,
	},
});

export default function FbButton() {
	return (
		<Button style={styles.facebookButton}>
			<MaterialCommunityIcons name='facebook' size={24} color='#FFFFFF' />
			<Text
				style={{
					color: '#FFFFFF',
					fontWeight: '700',
				}}
			>
				Log in with Facebook
			</Text>
		</Button>
	);
}
