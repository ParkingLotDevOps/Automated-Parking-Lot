import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#F9BC60',
		padding: 5,
		marginBottom: 15,
		width: '85%',
		color: '#001E1D',
		borderRadius: 6,
		shadowRadius: 16.0,
		elevation: 24,
	},
});

export default function MainButton(props) {
	return (
		<Button style={styles.button} onPress={props.onPress}>
			<Text style={{ color: '#004643', fontWeight: '700' }}>
				{props.text}
			</Text>
		</Button>
	);
}
