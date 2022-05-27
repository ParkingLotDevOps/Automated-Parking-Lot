import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import SideMenuBar from '../../components/SideMenuBar';
import QRCode from 'react-native-qrcode-svg';
import ParkDetails from '../../components/ParkDetails';
import MainButton from '../../components/MainButton';
import BookingDetailsQR from '../../components/BookingDetailsQR/BookingDetailsQR';
import { useNavigation } from '@react-navigation/native';
import Location2 from '../../components/map/Location2';
import ActiveBooking from '../ActiveBooking';

const QrPage = () => {
	const navigation = useNavigation();
	const [visible, setVisible] = useState(false);
	const [title, setTitle] = useState('Alexand Ioan Cuza University of Iasi');
	const [details, setDetails] = useState('100');
	const [time, setTime] = useState('11:00 AM');
	const [timeOut, setTimeOut] = useState('05:00 PM');
	const [specs, setSpecs] = useState('No specs');
	return (
		<View style={styles.container}>
					<View style={{ width: '85%' }}>
						<SideMenuBar />
					</View>
			<View style={styles.wrapperContainer}>
					<View style={styles.drept}>
						<ParkDetails
							title={title}
							details={details}
							priceUnit='LEI'
							timeUnit='/ Hr'
						/>
					</View>
					<View style={styles.qr_wrapper}>
						<View style={styles.qr_square}>
							<View style={styles.qr}>
								<QRCode value='http://awesome.link.qr' />
							</View>

							<Text> Unique ID: 1234 </Text>
						</View>
						<BookingDetailsQR
							time={time}
							timeOut={timeOut}
							specs={specs}
						/>
					</View>
					<View style={styles.dirr}>
						<Text style={styles.route}>Don't know the route?</Text>
						<Text style={styles.directions}> Get Directions</Text>
					</View>
					<View style={styles.button}>
						<MainButton
							text='Go Back To Home Screen'
							onPress={() => {
								navigation.navigate(ActiveBooking);
							}}
						></MainButton>
					</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#004643',
    justifyContent:"center",
		alignItems: 'center',
		width: '100%',
	},
	wrapperContainer: {
		width: '95%',
	},
	qr_wrapper: {
		alignItems: 'center',
	},
	qr_square: {
		width: 150,
		height: 150,
		backgroundColor: 'white',
		borderRadius: 7,
		borderWidth: 1,
	},
	qr: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10,
		marginTop: 10,
	},
	booking: {
		alignItems: 'center',
		lineHeight: 40,
		color: 'white',
		fontSize: 16,
	},
	drept: {
		alignItems: 'center',
	},
	info: {
		padding: 7,
		alignItems: 'center',
		width: '90%',
		shadowColor: 'white',
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,

		elevation: 24,
	},
	checkInOut: {
		width: '90%',
		alignItems: 'center',
	},
	innerText: { color: '#ABD1C6', lineHeight: 30 },
	route: { color: '#ABD1C6' },
	directions: { color: '#F9BC60' },
	dirr: {
    width: "100%",
    flexDirection: "row",
		alignItems: 'center',
		justifyContent: 'center',
    paddingBottom: 12,
	},
	button: {
		alignItems: 'center',
	},
});
export default QrPage;
