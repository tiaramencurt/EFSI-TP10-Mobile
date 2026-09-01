import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import ItemList from '../components/ItemList';
import { fetchItems } from '../services/api';

const HomeScreen = ({ favorites, onAddFavorite, onRemoveFavorite }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchItems();
        setItems(data);
      } catch (err) {
        setError('No fue posible obtener la información.');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const isFavorite = (id) => favorites.some((fav) => fav.id === id);

  return (
    <View style={styles.container}>
      <SearchBar value={searchQuery} onChange={setSearchQuery} />

      {loading && (
        <View style={styles.statusContainer}>
          <ActivityIndicator size="large" color="#3498db" />
          <Text style={styles.statusText}>Cargando información...</Text>
        </View>
      )}

      {error && (
        <View style={styles.statusContainer}>
          <Text style={[styles.statusText, styles.errorText]}>{error}</Text>
        </View>
      )}

      {!loading && !error && (
        <ItemList
          items={filteredItems}
          isFavoriteCheck={isFavorite}
          onAddFavorite={onAddFavorite}
          onRemoveFavorite={onRemoveFavorite}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  statusContainer: {
    marginTop: 40,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  statusText: {
    fontSize: 16,
    color: '#2c3e50',
    marginTop: 10,
    textAlign: 'center',
  },
  errorText: {
    color: '#e74c3c',
  },
});

export default HomeScreen;