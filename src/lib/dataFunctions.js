// Función para filtrar por escudería (team)
export const filterData = (data, filterBy, value) => {
  const result = data.filter((item) => item.facts[filterBy] === value);
  return result;
};

// Función para ordenar (ascendente o descendente)
export const sortData = (data, sortBy, sortOrder) => {
  // Verificamos si el orden es ascendente (A - Z) o descendente (Z - A)
  const orderFactor = sortOrder === "asc" ? 1 : -1;
  // Utilizamos el método sort() para ordenar los datos según el campo especificado (sortBy)
  data.sort((a, b) => {
    const itemA = a[sortBy].toLowerCase(); // Convertimos a minúsculas para una comparación insensible a mayúsculas
    const itemB = b[sortBy].toLowerCase();

    if (itemA < itemB) {
      return -1 * orderFactor;
    }
    if (itemA > itemB) {
      return 1 * orderFactor;
    }
    return 0;
  });

  return data;
};

// Función estadística
export const computeStats = (data) => {
  // Calcula el promedio de podios
  const podiums = data.map((item) => item.extraInfo.podiums);
  const totalPodiums = podiums.reduce((acc, podium) => acc + podium, 0);
  const averagePodiums = totalPodiums / data.length;
  const roundedAveragePodiums = averagePodiums.toFixed(2); // Redondea el promedio a dos decimales
  return Number(roundedAveragePodiums);
};
