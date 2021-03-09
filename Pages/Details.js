import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Details = ({navigation, data}) => {

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{data.API_URL}</Text>
                <Text style={styles.text}>{data.Token}</Text>
                <Text style={styles.text}>{data.View_ID}</Text>
            </View>
            <Button
                title='Home'
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
};

export default Details;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    textContainer: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    text: {
        padding: 20
    }
});
