import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

const ItemCard = ({ item, isFavorite, onAddFavorite, onRemoveFavorite }) => {
  const { id, name, image, type, weight } = item;

  return (
    <View style={styles.card}>
      {image ? (
        <Image source={{ uri: image }} style={styles.image} resizeMode="contain" />
      ) : null}
      
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.detail}>
          <Text style={styles.bold}>Tipo:</Text> {type}
        </Text>
        <Text style={styles.detail}>
          <Text style={styles.bold}>Peso:</Text> {weight}
        </Text>
      </View>

      <View style={styles.actions}>
        {isFavorite ? (
          <Pressable
            style={[styles.button, styles.btnRemove]}
            onPress={() => onRemoveFavorite && onRemoveFavorite(id)}
          >
            <Text style={styles.buttonText}>Quitar de favoritos</Text>
          </Pressable>
        ) : (
          <Pressable
            style={[styles.button, styles.btnAdd]}
            onPress={() => onAddFavorite && onAddFavorite(item)}
          >
            <Text style={styles.buttonText}>Agregar a favoritos</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 120,
    height: 120,
  },
  info: {
    alignItems: 'center',
    marginVertical: 8,
    width: '100%',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: '#2c3e50',
    marginBottom: 4,
  },
  detail: {
    fontSize: 14,
    color: '#555555',
    marginTop: 2,
  },
  bold: {
    fontWeight: 'bold',
  },
  actions: {
    width: '100%',
    marginTop: 8,
  },
  button: {
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  btnAdd: {
    backgroundColor: '#2ecc71',
  },
  btnRemove: {
    backgroundColor: '#e74c3c',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default ItemCard;