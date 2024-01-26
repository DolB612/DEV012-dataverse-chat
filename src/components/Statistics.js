// Statistics.js
const Statistics = () => {
  const divStats = document.createElement("div");
  divStats.classList.add("computeStats");
  const estadistica = document.createElement("p");
  estadistica.textContent = "Promedio de Podios: ";

  // Usa un elemento span para mostrar el promedio de podios
  const spanStats = document.createElement("span");
  spanStats.id = "averagePodiums"; // Cambiado a id en lugar de atributo
  spanStats.textContent = "--";

  estadistica.appendChild(spanStats);
  divStats.appendChild(estadistica);

  return divStats;
};

export default Statistics;
