import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useBackAction} from '../hooks/useBackAction';
import {useNavigate} from 'react-router-native';

export default function NotesScreen() {
    const navigate = useNavigate();
    useBackAction(() => navigate('/', {})); // hook do obsługi przycisku back

    return (
        <View style={styles.container}>
            <Text style={styles.text}>MessScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'black',
        fontSize: 35,
        lineHeight: 84,
        textAlign: 'center',
    },
    button: {
        height: 100,
        width: 200,
        backgroundColor: '#808080c0',
        justifyContent: 'center', // Wyśrodkowanie tekstu w pionie
        alignItems: 'center', // Wyśrodkowanie tekstu w poziomie
        borderRadius: 10, // Zaokrąglenie rogów przycisku
        marginVertical: 10,
    },
    buttonText: {
        color: 'pink',
        fontSize: 30,
    },
});

const stylesImg = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
});