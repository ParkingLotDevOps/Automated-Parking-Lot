import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import Chunk from '../Chunk';

const SlotSelecor = (props) => {
	let freeSpots = 0;

	props.parkingSpots.forEach((element) => {
		element.forEach((e) => {
			if (e.status === 'free') freeSpots++;
		});
	});

	const Chunks = props.parkingSpots.map((element) => (
		<Chunk
			spots={element}
			handleSelected={props.handleSelected}
			value={props.value}
		/>
	));
	return (
		<View style={styles.container}>
			<Text style={styles.header}> {freeSpots} slots Avalible</Text>
			<View
				style={{
					width: '100%',
					flexDirection: 'row',
					justifyContent: 'space-between',
					flexWrap: 'wrap',
				}}
			>
				{Chunks}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 15,
		width: '85%',
		backgroundColor: '#FFFFFF',
		borderRadius: 6,
	},
	header: {
		fontWeight: '600',
		fontSize: 16,
	},
});

export default SlotSelecor;
