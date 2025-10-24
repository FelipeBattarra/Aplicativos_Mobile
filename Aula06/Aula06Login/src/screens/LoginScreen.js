import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [emailError, setEmailError] = useState('');
    const [senhaError, setSenhaError] = useState('');

    const handleLogin = () => {
        let valid = true;

        // Validação de E-mail
        if (!email.includes('@')) {
            setEmailError('Digite um e-mail válido');
            valid = false;
        } else {
            setEmailError('');
        }

        // Validação de Senha (mínimo 6 caracteres)
        if (senha.length < 6) {
            setSenhaError('A senha deve ter no mínimo 6 caracteres');
            valid = false;
        } else {
            setSenhaError('');
        }

        if (valid) {
            // Lógica de login fictícia (usuário/senha fixos)
            if (email === 'teste@email.com' && senha === '123456') {
                // Navega para a tela de boas-vindas e passa o e-mail como parâmetro
                navigation.navigate('Welcome', { email: email }); 
            } else {
                Alert.alert('Erro', 'E-mail ou senha incorretos.');
            }
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Login</Text>

            {/* Campo E-mail */}
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />
            {emailError ? <Text style={styles.erro}>{emailError}</Text> : null}

            {/* Campo Senha */}
            <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
            />
            {senhaError ? <Text style={styles.erro}>{senhaError}</Text> : null}

            <Button title="Entrar" onPress={handleLogin} />

            {/* Botão para ir à tela de cadastro */}
            <TouchableOpacity 
                style={styles.cadastroLink} 
                onPress={() => navigation.navigate('Cadastro')}
            >
                <Text style={styles.cadastroTexto}>
                    Não tem conta? <Text style={styles.cadastroDestaque}>Cadastre-se</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 15,
        padding: 10,
        borderRadius: 8
    },
    erro: {
        color: 'red',
        marginBottom: 10
    },
    cadastroLink: {
        marginTop: 20,
        alignItems: 'center',
    },
    cadastroTexto: {
        fontSize: 14,
        color: '#666',
    },
    cadastroDestaque: {
        color: '#2196F3',
        fontWeight: 'bold',
    },
});