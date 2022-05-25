import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
	DefaultTheme,
	Headline,
	Provider as PaperProvider,
	TextInput,
    Text
} from 'react-native-paper';
import MainButton from './MainButton';
import ProfilePicture from "react-native-profile-picture";

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

export default function UserProfile() {
    const navigation = useNavigation();
	const [fullName, inputFullName] = React.useState('');
    const [email, inputEmail] = React.useState('');
    const [phone, inputPhone] = React.useState('');
	const [password, inputPassword] = React.useState('');
	return (
		<PaperProvider theme={theme}>
			<View style={styles.container}>
                <View>
                    <ProfilePicture
                        isPicture={true}
                        requirePicture={require("../../assets/masinuta.png")}
                        shape="circle"
                    />
                </View>
                <View style = {styles.inputsContainer}>
                    <View style = {styles.singleInput}>
                        <Text style = {{left: 15}}>Full Name</Text>
                        <View style = {styles.inputField}>
                            <TextInput
                                    style={styles.input}
                                    placeholder=''
                                    value={fullName}
                                    onChangeText={inputFullName}
                            />
                            <Icon.Button
                                name="edit"
                                backgroundColor="#004643"
                                style={{flex: 1}}
                            ></Icon.Button>
                        </View>
                    </View>
                    <View style = {styles.singleInput}>
                        <Text style = {{left: 15}}>Email address</Text>
                        <TextInput
                            style={styles.input}
                            placeholder=''
                            value={email}
                            onChangeText={inputEmail}>
                        </TextInput>                        
                    </View>
                    <View style = {styles.singleInput}>
                        <Text style = {{left: 15}}>Phone Number</Text>
                        <TextInput
                                style={styles.input}
                                placeholder=''
                                value={phone}
                                onChangeText={inputPhone}
                        />
                    </View>
                    <View style = {styles.singleInput}>
                        <Text style= {{left: 15}}>Password</Text>
                        <TextInput
                                style={styles.input}
                                placeholder=''
                                value={password}
                                secureTextEntry={true}
                                onChangeText={inputPassword}
                        />
                    </View>

                </View>
                   
                <View style = {styles.buttonContainer}>
                    <MainButton
                        text='Save'
                        onPress = {() => navigation.navigate("MyAccountScreen")}
                    />
                </View>

			</View>
		</PaperProvider>
	);
}

const styles = StyleSheet.create({

	container: {
        flex: 1,
		backgroundColor: '#004643',
		alignItems: 'center',
		justifyContent: 'center',
	},
	input: {
		width: '90%',
		height: 44,
		borderBottomWidth: 1,
		borderBottomColor: '#A6AAB4',
		margin: 10,
        position: 'relative'
	},
    buttonContainer: {
        width : '100%',
        justifyContent: 'center',
        alignItems:'center'
    },
    inputsContainer: {
        width: '100%',
        marginBottom: 100,
        marginTop: 100
    },
    inputField: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        paddingBottom: 10,
        width: '90%'
    },
    singleInput: {
        left: 10,
        width: '100%',
    }
});