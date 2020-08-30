import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppWord from './AppWord';
import colors from '../config/colors';

const WordsToGuessSection = ({ words = [] }) => {
    return (
        <View style={styles.container}>
            {words && words.map((word) => <AppWord word={word.value} key={word.value} visible={word.visible} />)}
        </View>
    );
};

export default WordsToGuessSection;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        alignContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: colors.light,
    },
});
