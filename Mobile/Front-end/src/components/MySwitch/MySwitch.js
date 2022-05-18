import { Switch, StyleSheet } from 'react-native';
import React from 'react';

const MySwitch = (props) => {
	const toggleSwitch = () => {
		props.setValue((previousState) => !previousState);
	};

	return (
		<Switch
			style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
			trackColor={{ false: '#767577', true: '#F9BC60' }}
			thumbColor={props.value ? '#f5dd4b' : '#f4f3f4'}
			ios_backgroundColor='#3e3e3e'
			onValueChange={toggleSwitch}
			value={props.value}
		/>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default MySwitch;
