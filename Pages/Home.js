import React, {useState} from 'react';
import { Button, View, StyleSheet} from 'react-native';
import Input from "../Components/Input";

const Home = ({navigation, data, handleChange}) => {

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Input name='API_URL' value={data.API_URL} handleChange={handleChange}/>
                <Input name='Token' value={data.Token} handleChange={handleChange}/>
                <Input name='View_ID' value={data.View_ID} handleChange={handleChange}/>
            </View>
            <Button
                title='Open'
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    inputContainer: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});
