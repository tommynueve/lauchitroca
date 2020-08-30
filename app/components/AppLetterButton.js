import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import defaultStyles from '../config/styles';

function AppLetterButton({ letter, onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPressIn={onPress}>
            <Text style={styles.text}>{letter}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: defaultStyles.colors.dark,
        borderRadius: 3,
        margin: 3,
        justifyContent: 'center',
        alignItems: 'center',
        width: 45,
        height: 55,
    },
    text: {
        color: defaultStyles.colors.white,
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: defaultStyles.font,
        paddingHorizontal: 4,
        paddingVertical: 2,
    },
});

export default AppLetterButton;
