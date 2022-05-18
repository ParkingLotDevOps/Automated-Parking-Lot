import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import { Ionicons } from '@expo/vector-icons';

const Chunk = (props) => {
	const spots = props.spots.map((element) => {
		if (element.status === 'occupied')
			return (
				<Ionicons
					name='car-sharp'
					size={30}
					color='#FFFFFF'
					style={{ marginHorizontal: 2 }}
				/>
			);
		else {
			return (
				<View
					style={[
						styles.freeSpot,
						{
							backgroundColor:
								props.value === element.name
									? '#4BD37B'
									: '#F9BC60',
						},
					]}
				>
					<Text
						style={styles.freeSpotText}
						onPress={() => props.handleSelected(element.name)}
					>
						{element.name}
					</Text>
				</View>
			);
		}
	});

	return <View style={styles.container}>{spots}</View>;
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#E16162',
		borderRadius: 6,
		padding: 5,
		margin: 5,
	},
	freeSpot: {
		backgroundColor: '#F9BC60',
		marginHorizontal: 2,
		width: 30,
		height: 30,
		borderRadius: 6,
		justifyContent: 'center',
	},
	freeSpotText: {
		color: '#3B414B',
		textAlign: 'center',
		fontSize: 14,
		fontWeight: '600',
	},
});

export default Chunk;
