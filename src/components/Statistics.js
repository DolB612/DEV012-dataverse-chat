const Statistics = () => {
    const divStats = document.createElement("div");
    divStats.classList.add("computeStats");
    const estadistica = document.createElement("p");
    estadistica.textContent = 'Promedio de Podios: ';
    let spanStats = document.createElement("span");
    spanStats.textContent = '--';
    spanStats.setAttribute("averagePodiums", "");
    estadistica.appendChild(spanStats);
    divStats.appendChild(estadistica);
    return divStats;
}
// Modificamos el export y utilizamos el export default
export default Statistics;