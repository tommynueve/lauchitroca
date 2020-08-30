import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Screen from '../components/Screen';
import WordsToGuessSection from '../components/WordsToGuessSection';
import GuessingSection from '../components/GuessingSection';

const initialValues = [
    { value: 'ahi', visible: false },
    { value: 'ali', visible: false },
    { value: 'cal', visible: false },
    { value: 'lua', visible: false },
    { value: 'cali', visible: false },
    { value: 'chai', visible: false },
    { value: 'chal', visible: false },
    { value: 'chau', visible: false },
    { value: 'chia', visible: false },
    { value: 'cual', visible: false },
    { value: 'culi', visible: false },
    { value: 'hila', visible: false },
    { value: 'luca', visible: false },
    { value: 'chula', visible: false },
    { value: 'ichal', visible: false },
    { value: 'lucha', visible: false },
    { value: 'lauchi', visible: false },
];

const GameInProgressScreen = () => {
    const [wordsToGuess, setWordsToGuess] = useState(initialValues);

    const findWord = (wordToFind) => {
        setWordsToGuess(wordsToGuess.map((word) => (word.value === wordToFind ? { ...word, visible: true } : word)));
    };

    return (
        <Screen>
            <View style={styles.container}>
                <WordsToGuessSection words={wordsToGuess} />
                <GuessingSection guessWord='Lauchi' onGuessAttempt={findWord} />
            </View>
        </Screen>
    );
};

export default GameInProgressScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});
