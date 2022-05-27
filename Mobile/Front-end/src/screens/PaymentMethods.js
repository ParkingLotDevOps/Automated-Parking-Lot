import { View, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import SideMenuBar from '../components/SideMenuBar';
import MainButton from '../components/MainButton';
import MyCreditCard from '../components/MyCreditCard';

const PaymentMethods = () => {
  const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<View
				style={{
					width: '85%',
					flexDirection: 'row',
					flexWrap: 'wrap',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<SideMenuBar />
				<Image
					style={{ width: 100, height: 100, resizeMode: 'contain' }}
					source={require('../../assets/smartparking1.png')}
				/>
				<View></View>
			</View>
			<View style={{ height: '70%', marginBottom:10, }}>
				<ScrollView>
					<MyCreditCard
						type='visa'
						imageFront={require('../../assets/creditcard1.png')}
						imageBack={require('../../assets/creditcard1.png')}
						shiny={false}
						bar={true}
						focused={true}
						number='************3456'
						name='Radu CHelaru'
						expiry='1212'
						cvc='121'
					/>

					<MyCreditCard
						type='visa'
						imageFront={require('../../assets/creditcard3.png')}
						imageBack={require('../../assets/creditcard3.png')}
						shiny={false}
						bar={true}
						focused={true}
						number='************3456'
						name='Radu CHelaru'
						expiry='1212'
						cvc='121'
					/>

					<MyCreditCard
						type='visa'
						imageFront={require('../../assets/creditcard2.png')}
						imageBack={require('../../assets/creditcard2.png')}
						shiny={false}
						bar={true}
						focused={true}
						number='************3456'
						name='Radu CHelaru'
						expiry='1212'
						cvc='121'
					/>
				</ScrollView>
			</View>

			<MainButton text='Add new card' onPress={() => navigation.navigate("AddCard")} />
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
});

export default PaymentMethods;
