import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import {
	DefaultTheme,
	Headline,
	Provider as PaperProvider,
	TextInput,
    Text
} from 'react-native-paper';
import MainButton from './MainButton';
import Location2 from './map/Location2';

const theme = {
	...DefaultTheme,
	roundness: 2,
	colors: {
		...DefaultTheme.colors,
		primary: '#004643',
		accent: '#E16162',
		background: '#004643',
		surface: '#FCFCFF',
		text: '#FFFFFE',
		placeholder: '#ABD1C6',
	},
};

export default function AddCar() {
    const navigation = useNavigation();
	const [number, inputNumber] = React.useState('');
    const [category, inputCategory] = React.useState('');
	return (
		<PaperProvider theme={theme}>
			<View style={styles.container}>
            <Headline style={styles.logo}>LOGO</Headline>
            <Text>Add a car</Text>
                <View style = {styles.inputsContainer}>
                    <View style = {styles.singleInput}>
                            <Text style = {{left: 15}}>Registration Number</Text>
                            <TextInput
                                    style={styles.input}
                                    placeholder=''
                                    value={number}
                                    onChangeText={inputNumber}
                            />
                    </View>
                    <View style = {styles.singleInput}>
                        <Text style = {{left: 15}}>Category</Text>
                        <TextInput
                                style={styles.input}
                                placeholder=''
                                value={category}
                                onChangeText={inputCategory}
                        />
                    </View>
                </View>
                   
                <View style = {styles.buttonContainer}>
                    <MainButton
                        text='Save'
                        onPress={() => navigation.navigate(Location2)}
                    />
                </View>
				{/* <StatusBar style='auto' /> */}
			</View>
		</PaperProvider>
	);
}

const styles = StyleSheet.create({
	container: {
        flex: 1,
		backgroundColor: '#004643',
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
    logo: {
		color: '#E16162',
		paddingTop: 20
	},
	input: {
		width: '90%',
		height: 44,
		borderBottomWidth: 1,
		borderBottomColor: '#A6AAB4',
		margin: 10,
	},
    buttonContainer: {
        width : '100%',
        justifyContent: 'center',
        alignItems:'center'
    },
    inputsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    singleInput: {
        left: 10,
        width: '100%',
    }
});