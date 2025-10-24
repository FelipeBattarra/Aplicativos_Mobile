// src/components/ProductCard.js
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

// Componente memoizado para evitar re-renderizações desnecessárias
const ProductCard = React.memo(({ item }) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Text style={styles.nome} numberOfLines={2}>
                    {item.nome}
                </Text>
            </View>
            <View style={styles.cardFooter}>
                <Text style={styles.preco}>
                    R$ {item.preco.toFixed(2).replace('.', ',')}
                </Text>
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 16,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
        width: width > 600 ? width * 0.45 : width * 0.9, // Responsivo
    },
    cardHeader: {
        marginBottom: 12,
    },
    nome: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 4,
    },
    cardFooter: {
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
        paddingTop: 12,
    },
    preco: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4CAF50',
    },
});

export default ProductCard;