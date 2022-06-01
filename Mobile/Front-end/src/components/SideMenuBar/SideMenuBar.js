import { View, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Location2 from '../map/Location2';

import { Ionicons } from '@expo/vector-icons';

const SideMenuBar = () => {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<Ionicons
				name='menu-sharp'
				size={45}
				color='#FFFFFE'
				onPress={() => navigation.navigate(Location2)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		// width: "85%",
		// position: 'absolute',
		// top: 50,
	},
});

export default SideMenuBar;