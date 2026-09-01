import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ItemCard from '../ItemCard';

const ItemList = ({ items, isFavoriteCheck, onAddFavorite, onRemoveFavorite }) => {
  if (items.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.noResults}>No encontramos resultados.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ItemCard
          item={item}
          isFavorite={isFavoriteCheck ? isFavoriteCheck(item.id) : true}
          onAddFavorite={onAddFavorite}
          onRemoveFavorite={onRemoveFavorite}
        />
      )}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  emptyContainer: {
    paddingTop: 40,
    alignItems: 'center',
  },
  noResults: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
  },
});

export default ItemList;