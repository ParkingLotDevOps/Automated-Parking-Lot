import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const BookingDetailsQR = (props) => {
	const date = new Date();
	const [currentTime, setCurrnetTime] = useState(
		`${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`
	);

  date.setTime(date.getTime() + props.timeOut * 60 * 60 * 1000);

  const [timeOut, setTimeOut] = useState(`${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`);
  

	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.CompTitle}>Booking Details</Text>
			</View>
			<View style={styles.row}>
				<Text style={styles.title}>Space:</Text>
				<View style={{ width: '35%' }}>
					<Text style={styles.detail}>{props.selectedSpace}</Text>
				</View>
			</View>
			<View style={styles.row}>
				<Text style={styles.title}>Check-In Time:</Text>
				<View style={{ width: '35%' }}>
					<Text style={styles.detail}>{currentTime}</Text>
				</View>
			</View>
			<View style={styles.row}>
				<Text style={styles.title}>Check-Out Time(Est):</Text>
				<View style={{ width: '35%' }}>
					<Text style={styles.detail}>{timeOut}</Text>
				</View>
			</View>
			<View style={styles.row}>
				<Text style={styles.title}>Specifications:</Text>
				<View style={{ width: '35%' }}>
					<Text style={styles.detail}>{props.specs}</Text>
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		backgroundColor: '#004643',
		width: '85%',
		alignItems: 'center',
		borderRadius: 6,
		padding: 10,
		marginTop: 15,
		marginBottom: 20,
		shadowColor: '#FFFFFF',
		shadowOffset: {
			width: 0,
			height: 6,
		},
		shadowOpacity: 0.24,
		shadowRadius: 8.32,

		elevation: 10,
	},
	CompTitle: {
		color: 'white',
		fontWeight: '600',
		fontSize: 16,
	},
	row: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 5,
	},
	title: {
		fontWeight: '400',
		fontSize: 14,
		color: '#ABD1C6',
	},
	detail: {
		fontWeight: '600',
		fontSize: 14,
		color: '#ABD1C6',
	},
});
export default BookingDetailsQR;
