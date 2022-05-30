import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Modal } from 'react-native-paper';
import React, { useState } from 'react';

import BookSpaceOptions from '../../components/BookSpaceOptions';
import MainButton from '../../components/MainButton';
import SideMenuBar from '../../components/SideMenuBar';
import ParkDetails from '../../components/ParkDetails';
import { useNavigation, useRoute } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';

const BookSpace = () => {
	const navigation = useNavigation();
	const route = useRoute();

  const [sliderValue, setSliderValue] = useState(0);
	const [visible, setVisible] = useState(false);
	const [title, setTitle] = useState(route.params.title);
	const [details, setDetails] = useState(route.params.price);
	const [selectedSpace, setSelectedSpace] = useState(
		route.params.selectedSpace
	);

	const wait = () => {
		setVisible(true);

		setTimeout(() => {
			navigation.navigate('QR', {
				title: title,
				selectedSpace: selectedSpace,
				price: details,
        duration: sliderValue,
			});
		}, 3000);
	};

	const showModal = () => setVisible(true);
	const hideModal = () => setVisible(false);
	return (
		<View style={styles.container}>
			<View style={{ width: '85%' }}>
				<SideMenuBar />
			</View>
			<ParkDetails
				title={title}
				details={details}
				priceUnit='LEI'
				timeUnit='/ Hr'
			/>
			<Text style={styles.descriptiveText}> Space {selectedSpace}</Text>
			<BookSpaceOptions sliderValue={sliderValue} setSliderValue={setSliderValue}/>
			<MainButton text='Book Space' onPress={wait} />
			<Modal
				style={styles.modal}
				visible={visible}
				onDismiss={hideModal}
				contentContainerStyle={styles.modalContainer}
			>
				<AntDesign name='checkcircle' size={90} color='#4BD37B' />
				<Text
					style={{
						color: '#3B414B',
						fontSize: 18,
						fontWeight: '600',
						textAlign: 'center',
					}}
				>
					Space Successfully Booked
				</Text>
				<Text
					style={{
						color: '#A6AAB4',
						textAlign: 'center',
						marginTop: 30,
					}}
				>
					Notifying Security Guards
				</Text>
				<ActivityIndicator size='large' color='#E16162' />
			</Modal>
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
		fontWeight: '600',
		fontSize: 18,
		margin: 10,
	},
	modalContainer: {
		marginHorizontal: 'auto',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FFFFFF',
		borderRadius: 10,
		paddingHorizontal: 10,
		paddingTop: 40,
		paddingBottom: 10,
	},
	modal: {
		backgroundColor: 'rgba(196, 196, 196, 0.4)',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default BookSpace;
