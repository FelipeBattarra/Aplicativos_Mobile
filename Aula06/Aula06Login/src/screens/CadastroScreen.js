import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';

export default function CadastroScreen({ navigation }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [telefone, setTelefone] = useState('');

    // Estados para erros específicos de cada campo
    const [nomeError, setNomeError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [senhaError, setSenhaError] = useState('');
    const [confirmarSenhaError, setConfirmarSenhaError] = useState('');
    const [telefoneError, setTelefoneError] = useState('');

    const handleCadastro = () => {
        let valid = true;

        // Limpa todos os erros antes de validar
        setNomeError('');
        setEmailError('');
        setSenhaError('');
        setConfirmarSenhaError('');
        setTelefoneError('');

        // Validação do Nome Completo
        if (nome.trim().length < 3) {
            setNomeError('Digite seu nome completo (mínimo 3 caracteres)');
            valid = false;
        }

        // Validação de E-mail
        if (!email.includes('@') || !email.includes('.')) {
            setEmailError('Digite um e-mail válido');
            valid = false;
        }

        // Validação de Senha (mínimo 6 caracteres)
        if (senha.length < 6) {
            setSenhaError('A senha deve ter no mínimo 6 caracteres');
            valid = false;
        }

        // Validação de Confirmação de Senha
        if (senha !== confirmarSenha) {
            setConfirmarSenhaError('As senhas não coincidem');
            valid = false;
        }

        // Validação de Telefone (deve aceitar apenas números e ter no mínimo 10 dígitos)
        const telefoneNumeros = telefone.replace(/\D/g, ''); // Remove tudo que não é número
        if (telefoneNumeros.length < 10) {
            setTelefoneError('Digite um telefone válido (mínimo 10 dígitos)');
            valid = false;
        }

        // Se tudo estiver válido, navega para a tela de dados
        if (valid) {
            navigation.navigate('DadosCadastro', {
                nome: nome,
                email: email,
                telefone: telefone
            });
        }
    };

    // Função para formatar telefone
    const formatarTelefone = (texto) => {
        // Remove tudo que não é número
        const numeros = texto.replace(/\D/g, '');
        
        // Limita a 11 dígitos
        const limitado = numeros.slice(0, 11);
        
        // Formata: (99) 99999-9999
        let formatado = limitado;
        if (limitado.length > 10) {
            formatado = limitado.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        } else if (limitado.length > 6) {
            formatado = limitado.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        } else if (limitado.length > 2) {
            formatado = limitado.replace(/(\d{2})(\d{0,5})/, '($1) $2');
        } else if (limitado.length > 0) {
            formatado = limitado.replace(/(\d{0,2})/, '($1');
        }
        
        setTelefone(formatado);
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={styles.titulo}>Cadastro Completo</Text>
                <Text style={styles.subtitulo}>Preencha todos os campos abaixo</Text>

                {/* Campo Nome Completo */}
                <Text style={styles.label}>Nome Completo</Text>
                <TextInput
                    style={[styles.input, nomeError ? styles.inputErro : null]}
                    placeholder="Digite seu nome completo"
                    value={nome}
                    onChangeText={setNome}
                />
                {nomeError ? <Text style={styles.erro}>{nomeError}</Text> : null}

                {/* Campo E-mail */}
                <Text style={styles.label}>E-mail</Text>
                <TextInput
                    style={[styles.input, emailError ? styles.inputErro : null]}
                    placeholder="seu@email.com"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                />
                {emailError ? <Text style={styles.erro}>{emailError}</Text> : null}

                {/* Campo Senha */}
                <Text style={styles.label}>Senha</Text>
                <TextInput
                    style={[styles.input, senhaError ? styles.inputErro : null]}
                    placeholder="Mínimo 6 caracteres"
                    secureTextEntry
                    value={senha}
                    onChangeText={setSenha}
                />
                {senhaError ? <Text style={styles.erro}>{senhaError}</Text> : null}

                {/* Campo Confirmar Senha */}
                <Text style={styles.label}>Confirmar Senha</Text>
                <TextInput
                    style={[styles.input, confirmarSenhaError ? styles.inputErro : null]}
                    placeholder="Digite a senha novamente"
                    secureTextEntry
                    value={confirmarSenha}
                    onChangeText={setConfirmarSenha}
                />
                {confirmarSenhaError ? <Text style={styles.erro}>{confirmarSenhaError}</Text> : null}

                {/* Campo Telefone */}
                <Text style={styles.label}>Telefone</Text>
                <TextInput
                    style={[styles.input, telefoneError ? styles.inputErro : null]}
                    placeholder="(99) 99999-9999"
                    keyboardType="numeric"
                    value={telefone}
                    onChangeText={formatarTelefone}
                    maxLength={15}
                />
                {telefoneError ? <Text style={styles.erro}>{telefoneError}</Text> : null}

                <View style={styles.buttonContainer}>
                    <Button title="Cadastrar" onPress={handleCadastro} color="#4CAF50" />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 20,
        textAlign: 'center',
        color: '#333',
    },
    subtitulo: {
        fontSize: 14,
        marginBottom: 25,
        textAlign: 'center',
        color: '#666',
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 5,
        padding: 12,
        borderRadius: 8,
        fontSize: 16,
        backgroundColor: '#f9f9f9',
    },
    inputErro: {
        borderColor: '#ff4444',
        borderWidth: 2,
    },
    erro: {
        color: '#ff4444',
        marginBottom: 15,
        fontSize: 13,
        marginLeft: 5,
    },
    buttonContainer: {
        marginTop: 10,
        marginBottom: 20,
    },
});