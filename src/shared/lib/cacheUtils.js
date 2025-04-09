export function fetchWithCache(url) {
  console.log("Usando datos de cache.");
  const cacheKey = `cache_${url}`;
  const cachedData = localStorage.getItem(cacheKey);

  if (cachedData) {
    const { data, timestamp } = JSON.parse(cachedData);
    const currentTime = Date.now();

    if (currentTime - timestamp < 3600000) {
      console.log("Usando datos de cache.");
      return Promise.resolve(data);
    }
  }

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      const timestamp = Date.now();
      localStorage.setItem(
        cacheKey,
        JSON.stringify({ data, timestamp })
      );
      console.log("Datos obtenidos de la API.");
      return data;
    })
    .catch(error => {
      console.error("Error al obtener los datos:", error);
      throw error;
    });
}
