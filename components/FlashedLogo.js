import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const FlashedLogo = () => {
    return (
        <View style={styles.container}>
            <Text style={[styles.setFontSize, styles.setColorPink, styles.shadowProp]}>F</Text>
            <Text style={[styles.setFontSize, styles.setColorGreen, styles.shadowProp]}>L</Text>
            <Text style={[styles.setFontSize, styles.setColorYellow, styles.shadowProp]}>A</Text>
            <Text style={[styles.setFontSize, styles.setColorBlue, styles.shadowProp]}>S</Text>
            <Text style={[styles.setFontSize, styles.setColorOrange, styles.shadowProp]}>H</Text>
            <Text style={[styles.setFontSize, styles.setColorPink, styles.shadowProp]}>E</Text>
            <Text style={[styles.setFontSize, styles.setColorGreen, styles.shadowProp]}>D</Text>
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
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    setColorPink: {
        color: 'rgb(232, 146, 144)',
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

