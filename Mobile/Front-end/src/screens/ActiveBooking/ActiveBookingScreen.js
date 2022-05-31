import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { ActiveBooking } from './ActiveBooking';

const ActiveBookingScreen = ({ navigation }) => {
	return (
		<SafeAreaView forceInset={{ top: 'always' }}>
			<ActiveBooking />
		</SafeAreaView>
	);
};

export default ActiveBookingScreen;
