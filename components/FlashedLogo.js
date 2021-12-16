import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const FlashedLogo = () => {
    return (
        <View style={styles.container}>
            <Text style={[styles.setFontSize, styles.setColorPink]}>F</Text>
            <Text style={[styles.setFontSize, styles.setColorGreen]}>L</Text>
            <Text style={[styles.setFontSize, styles.setColorYellow]}>A</Text>
            <Text style={[styles.setFontSize, styles.setColorBlue]}>S</Text>
            <Text style={[styles.setFontSize, styles.setColorOrange]}>H</Text>
            <Text style={[styles.setFontSize, styles.setColorPink]}>E</Text>
            <Text style={[styles.setFontSize, styles.setColorGreen]}>D</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    setFontSize: {
        fontSize: 45,
        fontWeight: 'bold'
    },
    setColorPink: {
        color: 'rgb(232, 146, 144)'
    },
    setColorGreen: {
        color: 'rgb(94, 145, 75)'
    },
    setColorYellow: {
        color: 'rgb(244, 210, 93)'
    },
    setColorBlue: {
        color: 'rgb(100, 168, 192)'
    },
    setColorOrange: {
        color: 'rgb(232, 126, 60)'
    },
});

export default FlashedLogo;

