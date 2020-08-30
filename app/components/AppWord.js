import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppLetter from './AppLetter';

const AppWord = ({ word, visible = true }) => {
    const letterArray = word.split('');

    return (
        <View style={styles.container}>
            {letterArray.map((letter, index) => (
                <AppLetter letter={visible ? letter : ''} key={index} />
            ))}
        </View>
    );
};

export default AppWord;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
});
