import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const Input = ({name, value, handleChange}) => {
    return (
        <View style={styles.container}>
            <Text>{name}</Text>
            <TextInput
                onChange={e => handleChange(name, e)}
                name={name}
                defaultValue={value}
                style={styles.input}
            />
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        marginTop: 10,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    input: {
        alignSelf: 'stretch',
        padding: 5,
        borderRadius: 4,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#B6E2FF',
        marginTop: 5,
        maxHeight: 50
    }
});
