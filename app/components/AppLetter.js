import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import defaultStyles from '../config/styles';

const AppLetter = ({ letter = '', containerStyle, textStyle }) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <Text style={[styles.text, textStyle]}>{letter}</Text>
        </View>
    );
};

export default AppLetter;

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.dark,
        borderRadius: 3,
        margin: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 20,
        height: 20,
    },
    text: {
        color: defaultStyles.colors.white,
        textTransform: 'uppercase',
        fontFamily: defaultStyles.font,
        fontSize: 14,
        paddingHorizontal: 1,
        paddingVertical: 1,
    },
});
