import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native-web';

function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.background} source={require('../assets/screen5.png')}></ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1
    }
    
})

export default WelcomeScreen;