import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Image } from 'react-native';
import { Button } from 'react-native-paper';
import {
  DefaultTheme,
  Provider as PaperProvider,
  Text,
} from 'react-native-paper';
import LogoPayment from './LogoPayment';

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

export default function LogoMap({ navigation }) {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/harta.png')} />
        <Text style={styles.titleText}>Quick Navigation</Text>
        <Text style={styles.innerText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
        <View style={styles.buttonsContainer}> 
                 
          <Button style={styles.Buttons} color="#ABD1C6" onPress={() => navigation.navigate(Login)}>
              Skip
          </Button>

          <View style={styles.dotsContainer}>
          <View style={styles.CircleShape1}></View>
          <View style={styles.CircleShape2}></View>
          <View style={styles.CircleShape3}></View>
          </View>
            <Button style={styles.Buttons} color="#F9BC60" onPress={() => navigation.navigate(LogoPayment)}>
                Next
            </Button>
          </View>
        <StatusBar style="auto" />
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
  titleText: {
    width: '70%',
    height: 44,
    margin: 10,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: 'center',
  },
  innerText: {
    width: '80%',
    fontSize: 15,
    textAlign: 'center',
    color: "#ABD1C6"
  },
  image: {
    marginBottom: 40,
    marginTop:'20%',
    width: '80%',
    resizeMode: "contain",
  }
  ,
  Buttons: {

  },
  buttonsContainer:{
    marginTop:'50%',
    display:'flex',
    flexDirection:'row',
    justifyContent:"space-between",
    width: 320,
    alignItems:'center',
  },
  CircleShape1: {
    width: 8,
    height: 8,
    borderRadius: 8 / 2,
    backgroundColor: '#808080',
    
  },
  CircleShape2: {
    width: 8,
    height: 8,
    borderRadius: 8 / 2,
    backgroundColor: '#FF9800',
  },
  CircleShape3: {
    width: 8,
    height: 8,
    borderRadius: 8 / 2,
    backgroundColor: '#808080',
  },
  dotsContainer: {
    display:'flex',
    flexDirection:'row',
    justifyContent:"space-between",
    width:50,
  },
});

