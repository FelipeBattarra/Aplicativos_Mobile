// src/screens/CatalogoScreen.js
import React, { useState, useCallback, useMemo } from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    StyleSheet, 
    SectionList, 
    useWindowDimensions,
    StatusBar,
    Platform
} from 'react-native';
import ProductCard from '../components/ProductCard';
import { produtosPorCategoria } from '../data/produtos';

export default function CatalogoScreen() {
    const [busca, setBusca] = useState('');
    const { width, height } = useWindowDimensions();

    // Função memoizada para renderizar cada item
    const renderItem = useCallback(({ item }) => (
        <ProductCard item={item} />
    ), []);

    // Função memoizada para renderizar o cabeçalho de cada seção
    const renderSectionHeader = useCallback(({ section }) => (
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <Text style={styles.sectionCount}>{section.data.length} produtos</Text>
        </View>
    ), []);

    // Filtra os produtos por nome usando useMemo para otimização
    const produtosFiltrados = useMemo(() => {
        if (busca.trim() === '') {
            return produtosPorCategoria;
        }

        const buscaLower = busca.toLowerCase();
        
        return produtosPorCategoria
            .map(categoria => ({
                title: categoria.title,
                data: categoria.data.filter(produto =>
                    produto.nome.toLowerCase().includes(buscaLower)
                )
            }))
            .filter(categoria => categoria.data.length > 0);
    }, [busca]);

    // Calcula estatísticas
    const totalProdutos = useMemo(() => {
        return produtosFiltrados.reduce((acc, cat) => acc + cat.data.length, 0);
    }, [produtosFiltrados]);

    // Estilos responsivos baseados no tamanho da tela
    const responsiveStyles = {
        container: {
            paddingHorizontal: width > 600 ? 20 : 0,
        },
        searchContainer: {
            marginHorizontal: width > 600 ? 0 : 16,
        }
    };

    return (
        <View style={[styles.container, responsiveStyles.container]}>
            <StatusBar barStyle="dark-content" />
            
            {/* Header com título e busca */}
            <View style={styles.header}>
                <Text style={styles.titulo}>Catálogo de Produtos</Text>
                <Text style={styles.subtitulo}>
                    {totalProdutos} {totalProdutos === 1 ? 'produto encontrado' : 'produtos encontrados'}
                </Text>
                
                {/* Campo de busca */}
                <TextInput
                    style={[styles.searchInput, responsiveStyles.searchContainer]}
                    placeholder="Buscar produtos..."
                    value={busca}
                    onChangeText={setBusca}
                    placeholderTextColor="#999"
                    autoCorrect={false}
                />
            </View>

            {/* Lista de produtos agrupados por categoria */}
            {produtosFiltrados.length > 0 ? (
                <SectionList
                    sections={produtosFiltrados}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    renderSectionHeader={renderSectionHeader}
                    stickySectionHeadersEnabled={true}
                    initialNumToRender={10}
                    maxToRenderPerBatch={10}
                    windowSize={10}
                    removeClippedSubviews={Platform.OS === 'android'}
                    contentContainerStyle={styles.listContent}
                />
            ) : (
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyIcon}>🔍</Text>
                    <Text style={styles.emptyText}>Nenhum produto encontrado</Text>
                    <Text style={styles.emptySubtext}>
                        Tente buscar por outro termo
                    </Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'ios' ? 50 : 20,
        paddingBottom: 15,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    subtitulo: {
        fontSize: 14,
        color: '#666',
        marginBottom: 15,
    },
    searchInput: {
        backgroundColor: '#f9f9f9',
        padding: 12,
        borderRadius: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    listContent: {
        paddingBottom: 20,
    },
    sectionHeader: {
        backgroundColor: '#4CAF50',
        paddingVertical: 12,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    sectionCount: {
        fontSize: 14,
        color: '#fff',
        opacity: 0.9,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    emptyIcon: {
        fontSize: 64,
        marginBottom: 16,
    },
    emptyText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
        textAlign: 'center',
    },
    emptySubtext: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
    },
});