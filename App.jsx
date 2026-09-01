import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './src/screens/HomeScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';

const Tab = createBottomTabNavigator();
const FAVORITES_KEY = 'app_favorites';

export default function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const saved = await AsyncStorage.getItem(FAVORITES_KEY);
        if (saved) {
          setFavorites(JSON.parse(saved));
        }
      } catch (e) {
        console.error('Error al cargar favoritos', e);
      }
    };
    loadFavorites();
  }, []);

  const saveFavorites = async (newFavorites) => {
    try {
      setFavorites(newFavorites);
      await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
    } catch (e) {
      console.error('Error al guardar favoritos', e);
    }
  };

  const handleAddFavorite = (item) => {
    if (!favorites.some((fav) => fav.id === item.id)) {
      saveFavorites([...favorites, item]);
    }
  };

  const handleRemoveFavorite = (id) => {
    saveFavorites(favorites.filter((fav) => fav.id !== id));
  };

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#2c3e50' },
          headerTintColor: '#ecf0f1',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: 'bold' },
          tabBarActiveTintColor: '#3498db',
          tabBarInactiveTintColor: '#bdc3c7',
          tabBarStyle: { backgroundColor: '#2c3e50' },
        }}
      >
        <Tab.Screen name="Inicio">
          {(props) => (
            <HomeScreen
              {...props}
              favorites={favorites}
              onAddFavorite={handleAddFavorite}
              onRemoveFavorite={handleRemoveFavorite}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Favoritos">
          {(props) => (
            <FavoritesScreen
              {...props}
              favorites={favorites}
              onRemoveFavorite={handleRemoveFavorite}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}