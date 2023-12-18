// Función que filtra datos según un criterio dado
export const filterData = (data, filterBy, value) => {
  return data.filter((item) => {
    // Verifica si el objeto tiene la propiedad 'facts' y su valor coincide con el criterio dado
    if (item.facts && item.facts[filterBy] === value) {
      return true;
    }
    return false;
  });
};

// Función que ordena datos según un criterio y un orden dado
export function sortData(data, sortBy, sortOrder) {
  // Realiza una copia superficial de los datos para no afectar el array original
  return data.slice().sort((a, b) => {
    // Si se está ordenando por "name"
    if (sortBy === "name") {
      // Ordena alfabéticamente de manera ascendente o descendente según el sortOrder
      return sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    }
    // Si no se está ordenando por "name", no se realiza ninguna modificación
    return 0;
  });
}

// Función que calcula y devuelve el promedio de podiums en los datos dados
export const computeStats = (data) => {
  // Extrae el número de podiums para cada objeto en los datos
  const podiums = data.map((item) => item.extraInfo && item.extraInfo.podiums || 0);
  
  // Calcula el total de podiums y el promedio redondeado a dos decimales
  const totalPodiums = podiums.reduce((acc, podium) => acc + podium, 0);
  const averagePodiums = totalPodiums / data.length;
  const roundedAveragePodiums = Number(averagePodiums.toFixed(2));

  return roundedAveragePodiums;
};
