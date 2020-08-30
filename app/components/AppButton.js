import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import colors from '../config/colors';

function AppButton({ title, onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.secondary,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
    },
    text: {
        color: colors.white,
        fontSize: 24,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
});

export default AppButton;
