import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WelcomeScreen({ route }) {
    // Recebe o parâmetro 'email' passado pelo navigation.navigate()
    const { email } = route.params || { email: 'Usuário' }; 

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo(a)!</Text>
            <Text style={styles.message}>Login realizado com sucesso.</Text>
            <Text style={styles.message}>E-mail: {email}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#4CAF50',
    },
    message: {
        fontSize: 16,
        marginBottom: 5,
    },
});