import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import calculator from '../../assets/calculator.png';
const IntroScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Image style={styles.logo} source={calculator} />

            </View>
        </View>
    )
}

export default IntroScreen

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%',
        width: '100%', 
        backgroundColor: '#fff57575',
        justifyContent: 'center',
        alignItems: 'center',

    },
    inner: {
        height: 100,
        width: 100,
        backgroundColor: 'inherit',
    },
    logo: {
        width: 100,
        height: 100,
    },
})