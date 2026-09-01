import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ value, onChange }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar por nombre..."
        placeholderTextColor="#888"
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 16,
    color: '#333333',
  },
});

export default SearchBar;