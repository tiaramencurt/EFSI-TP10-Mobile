import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchItems = async () => {
  const response = await axios.get(`${BASE_URL}/pokemon?limit=20`);
  const results = response.data.results;

  const itemsPromises = results.map(async (pokemon) => {
    const detailResponse = await axios.get(pokemon.url);
    const data = detailResponse.data;

    return {
      id: data.id,
      name: data.name,
      image: data.sprites.front_default || '',
      type: data.types.map((t) => t.type.name).join(', '),
      weight: data.weight,
    };
  });

  return Promise.all(itemsPromises);
};