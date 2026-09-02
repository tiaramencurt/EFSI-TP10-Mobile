# TP10 - Repaso Pos Vacaciones (Explorador de Pokémon)

## Integrantes
* **Micaela Berman**
* **Maica Trutner**

---

## API Utilizada
* **PokéAPI (`https://pokeapi.co/api/v2`)**: Consumo de datos en vivo de Pokémon para obtener listados, imágenes oficiales, tipos y estadísticas.

---

## Descripción Breve
Aplicación desarrollada en dos versiones (**React Web** y **React Native con Expo**) que permite explorar el catálogo de Pokémon en tiempo real. La app incluye funciones de búsqueda dinámica, filtrado, manejo de estados de carga/error y un sistema de gestión de favoritos persistente que impide duplicados.

---

## Estructura del Proyecto

### React Web (`efsi-tp10-web`)
```text
src/
├── components/
│   ├── Favorites/
│   │   └── index.jsx
│   ├── Header/
│   │   ├── Header.css
│   │   └── index.jsx
│   ├── ItemCard/
│   │   ├── ItemCard.css
│   │   └── index.jsx
│   ├── ItemList/
│   │   ├── ItemList.css
│   │   └── index.jsx
│   ├── Navbar/
│   │   ├── Navbar.css
│   │   └── index.jsx
│   └── SearchBar/
│       ├── SearchBar.css
│       └── index.jsx
├── pages/
│   ├── Favorites.jsx
│   └── Home.jsx
├── services/
│   └── api.js
├── App.css
├── App.jsx
├── index.css
└── main.jsx

```

### React Native (`efsi-tp10-mobile`)

```text
src/
├── components/
│   ├── ItemCard/
│   │   └── index.jsx
│   ├── ItemList/
│   │   └── index.jsx
│   └── SearchBar/
│       └── index.jsx
├── screens/
│   ├── FavoritesScreen.jsx
│   └── HomeScreen.jsx
└── services/
    └── api.js
App.jsx
index.js

```

---

## Organización de Componentes

* **Servicios (`services/api.js`)**: Encargado de centralizar las peticiones HTTP a la PokéAPI usando `axios`.
* **Componentes (`components/`)**: Piezas modulares e independientes (`ItemCard`, `ItemList`, `SearchBar`) diseñadas para ser 100% reutilizables en ambas pantallas.
* **Pantallas / Vistas (`pages/` o `screens/`)**: Vistas principales de la aplicación (`Home` y `Favorites`) que gestionan la lógica de estado y flujo de datos.

---

## Funcionalidades Implementadas

* **Consumo de API Asíncrono**: Consultas mediante `axios` con manejo explícito de estados de carga (*Loading...*) y captura de errores.
* **Listado dinámico y Renderizado Condicional**: Generación de tarjetas mediante `.map()` con claves únicas (`key`), mostrando nombre, imagen, tipos y peso.
* **Buscador en Tiempo Real**: Filtrado reactivo sobre los datos de la API utilizando métodos JS como `.filter()` y `.includes()`.
* **Sistema de Favoritos Evitando Duplicados**: Validación previa para impedir agregar un elemento más de una vez.
* **Persistencia de Datos**: Almacenamiento local mediante `localStorage` (Web) y `@react-native-async-storage/async-storage` (Mobile) para mantener la lista guardada al reiniciar la app.
* **Navegación Multipantalla**: Separación clara entre la vista principal y la lista de favoritos.

---

## Diferencias entre React Web y React Native

### Navegación

* **Web**: Se implementó `react-router-dom` mediante componentes como `<BrowserRouter>`, `<Routes>` y `<Route>`.
* **Mobile**: Se utilizó `@react-navigation/native` junto con `@react-navigation/bottom-tabs` para estructurar una barra de navegación nativa en la parte inferior.

### Experiencia y Adaptación

* **Lo más sencillo**: Reutilizar la lógica de JavaScript pura (`useState`, `useEffect`, métodos de arrays como `filter` y `map`) y el consumo de la API con `axios`, ya que funciona exactamente igual en ambos entornos.
* **Lo más complejo**: Adaptar la maquetación web a los componentes nativos de React Native (`View`, `Text`, `FlatList`, `Pressable`), además de pasar de hojas de estilo CSS tradicionales al modelo de `StyleSheet.create` basado estrictamente en Flexbox.

```
