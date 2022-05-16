import { View, StyleSheet } from 'react-native';
import React from 'react';

import { Ionicons } from '@expo/vector-icons';

const SideMenuBar = () => {
	return (
		<View style={styles.container}>
			<Ionicons name='menu-sharp' size={45} color='#FFFFFE' />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '85%',
		position: 'absolute',
		top: 50,
	},
});

export default SideMenuBar;
