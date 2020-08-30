import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import AppButton from './AppButton';
import AppLetterButton from './AppLetterButton';
import colors from '../config/colors';

const NO_LETTER = { value: '', origInd: -1 };

const GuessingSection = ({ guessWord, onGuessAttempt }) => {
    const [selectableLetters, setSelectableLetters] = useState([]);
    const [selectedLetters, setSelectedLetters] = useState([]);
    const [defaultLetterOrder, setDefaultLetterOrder] = useState([]);

    useEffect(() => {
        const wordSplitByChars = guessWord.toLowerCase().split('');
        setSelectableLetters(wordSplitByChars.map((letter, i) => ({ value: letter, origInd: i })));
        setDefaultLetterOrder(wordSplitByChars.map((letter, i) => ({ value: letter, origInd: i })));
        setSelectedLetters(wordSplitByChars.map(() => NO_LETTER));
    }, []);

    const handleSelectableLetterPress = (selectedLetter) => {
        if (selectedLetter.value === NO_LETTER.value) return;
        const slotToAddLetter = selectedLetters.findIndex((letter) => letter.value === NO_LETTER.value);
        setSelectedLetters(
            selectedLetters.map((currentLetter, index) => (index === slotToAddLetter ? selectedLetter : currentLetter))
        );
        setSelectableLetters(
            selectableLetters.map((currentLetter, index) =>
                index === selectedLetter.origInd ? NO_LETTER : currentLetter
            )
        );
    };

    const handleSelectedLetters = (selectedLetter, currInd) => {
        setSelectableLetters(
            selectableLetters.map((currentLetter, index) =>
                index === selectedLetter.origInd ? selectedLetter : currentLetter
            )
        );
        setSelectedLetters(
            selectedLetters.map((currentLetter, index) => (index === currInd ? NO_LETTER : currentLetter))
        );
    };

    const handleSendPress = () => {
        onGuessAttempt(selectedLetters.map((letter) => letter.value).join(''));
        setSelectedLetters(selectedLetters.map(() => NO_LETTER));
        setSelectableLetters(defaultLetterOrder);
    };

    return (
        <View style={styles.container}>
            <View style={styles.guessWordContainer}>
                {selectedLetters.map((letter, i) => (
                    <AppLetterButton key={i} letter={letter.value} onPress={() => handleSelectedLetters(letter, i)} />
                ))}
            </View>
            <View style={styles.lettersContainer}>
                {selectableLetters.map((letter, i) => (
                    <AppLetterButton
                        key={i}
                        letter={letter.value}
                        onPress={() => handleSelectableLetterPress(letter)}
                    />
                ))}
            </View>
            <AppButton title='Send' onPress={handleSendPress} />
        </View>
    );
};

export default GuessingSection;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 30,
    },
    guessWordContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    lettersContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
});
