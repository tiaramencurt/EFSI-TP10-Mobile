import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ItemList from '../components/ItemList';

const FavoritesScreen = ({ favorites, onRemoveFavorite }) => {
  if (!favorites || favorites.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>
          No tienes elementos guardados en favoritos.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ItemList
        items={favorites}
        isFavoriteCheck={() => true}
        onRemoveFavorite={onRemoveFavorite}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingTop: 12,
  },
  emptyContainer: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  emptyText: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
  },
});

export default FavoritesScreen;