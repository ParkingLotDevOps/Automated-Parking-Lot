import { View, StyleSheet } from 'react-native';
import React from 'react';
import CreditCard from 'react-native-credit-card-ui';

const MyCreditCard = (props) => {
	return (
		<View style={styles.container}>
			<CreditCard
				type={props.type}
				imageFront={props.imageFront}
				imageBack={props.imageBack}
				shiny={false}
				bar={true}
				focused={true}
				number={props.number}
				name={props.name}
				expiry={props.expiry}
				cvc={props.cvc}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 180,
		margin: 5,
		backgroundColor: '#004643',
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: '#001eff',
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,

		elevation: 24,
	},
});

export default MyCreditCard;
