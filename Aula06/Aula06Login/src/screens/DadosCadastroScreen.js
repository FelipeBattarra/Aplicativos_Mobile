import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function DadosCadastroScreen({ route, navigation }) {
    // Recebe os parâmetros passados pela navegação
    const { nome, email, telefone } = route.params || { 
        nome: 'Não informado', 
        email: 'Não informado', 
        telefone: 'Não informado' 
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.icone}>✅</Text>
                    <Text style={styles.titulo}>Cadastro Realizado!</Text>
                    <Text style={styles.subtitulo}>
                        Seu cadastro foi realizado com sucesso
                    </Text>
                </View>

                <View style={styles.dadosContainer}>
                    <Text style={styles.secaoTitulo}>Dados Cadastrados</Text>
                    
                    <View style={styles.itemContainer}>
                        <Text style={styles.label}>👤 Nome Completo</Text>
                        <Text style={styles.valor}>{nome}</Text>
                    </View>

                    <View style={styles.divisor} />

                    <View style={styles.itemContainer}>
                        <Text style={styles.label}>📧 E-mail</Text>
                        <Text style={styles.valor}>{email}</Text>
                    </View>

                    <View style={styles.divisor} />

                    <View style={styles.itemContainer}>
                        <Text style={styles.label}>📱 Telefone</Text>
                        <Text style={styles.valor}>{telefone}</Text>
                    </View>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.infoTexto}>
                        🔐 Seus dados estão seguros e protegidos
                    </Text>
                </View>

                <TouchableOpacity 
                    style={styles.botao} 
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.botaoTexto}>Voltar para Login</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: '#f5f5f5',
    },
    container: {
        flex: 1,
        padding: 20,
    },
    headerContainer: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 30,
    },
    icone: {
        fontSize: 60,
        marginBottom: 10,
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#4CAF50',
        marginBottom: 5,
    },
    subtitulo: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
    },
    dadosContainer: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    secaoTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    itemContainer: {
        marginVertical: 10,
    },
    label: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
        fontWeight: '600',
    },
    valor: {
        fontSize: 18,
        color: '#333',
        fontWeight: '500',
    },
    divisor: {
        height: 1,
        backgroundColor: '#e0e0e0',
        marginVertical: 10,
    },
    infoContainer: {
        backgroundColor: '#E8F5E9',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        borderLeftWidth: 4,
        borderLeftColor: '#4CAF50',
    },
    infoTexto: {
        fontSize: 14,
        color: '#2E7D32',
        textAlign: 'center',
    },
    botao: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    botaoTexto: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});