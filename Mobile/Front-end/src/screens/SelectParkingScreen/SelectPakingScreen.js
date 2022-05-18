import { View, Text, StyleSheet, Switch } from 'react-native';
import React, { useState } from 'react';

import ParkDetails from '../../components/ParkDetails';
import SlotSelector from '../../components/SlotSelector';
import MainButton from '../../components/MainButton/mainButton';
import MySwitch from '../../components/MySwitch';
import SideMenuBar from '../../components/SideMenuBar';

const parkingSpots = [
	[
		{ name: '1A', status: 'occupied' },
		{ name: '2A', status: 'occupied' },
		{ name: '3A', status: 'occupied' },
	],
	[
		{ name: '4A', status: 'occupied' },
		{ name: '5A', status: 'free' },
		{ name: '6A', status: 'occupied' },
	],
	[
		{ name: '1B', status: 'occupied' },
		{ name: '2B', status: 'free' },
		{ name: '3B', status: 'free' },
	],
	[
		{ name: '4B', status: 'occupied' },
		{ name: '5B', status: 'free' },
		{ name: '6B', status: 'occupied' },
	],
	[
		{ name: '1C', status: 'occupied' },
		{ name: '2C', status: 'occupied' },
		{ name: '3C', status: 'occupied' },
	],
	[
		{ name: '4C', status: 'occupied' },
		{ name: '5C', status: 'free' },
		{ name: '6C', status: 'occupied' },
	],
	[
		{ name: '1D', status: 'free' },
		{ name: '2D', status: 'free' },
		{ name: '3D', status: 'occupied' },
	],
	[
		{ name: '4D', status: 'occupied' },
		{ name: '5D', status: 'occupied' },
		{ name: '6D', status: 'occupied' },
	],
];

const SelectPakingScreen = () => {
	const [isReserved, setIsReserved] = useState(false);
	const [selected, setSelected] = useState(null);
	const handleSelected = (value) => {
		setSelected(value);
	};
	return (
		<View style={styles.container}>
			<SideMenuBar />
			<ParkDetails
				title='Alexandru Ioan Cuza University of Iasi'
				details='100'
				priceUnit='LEI'
				timeUnit='/ Hr'
			/>
			<Text style={styles.descriptiveText}>Select preferred space</Text>
			<SlotSelector
				parkingSpots={parkingSpots}
				handleSelected={handleSelected}
				value={selected}
			/>
			<View style={styles.rowDisplay}>
				<Text style={styles.descriptiveText}>
					Reserve spot for another time
				</Text>
				<MySwitch value={isReserved} setValue={setIsReserved} />
			</View>
			<MainButton text='continue' />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#004643',
		alignItems: 'center',
		justifyContent: 'center',
	},
	descriptiveText: {
		color: '#ABD1C6',
		fontSize: 16,
		fontWeight: '400',
		lineHeight: 24,
		margin: 10,
	},
	rowDisplay: {
		flexDirection: 'row',
		flexWrap: 'nowrap',
		margin: 10,
	},
});

export default SelectPakingScreen;
