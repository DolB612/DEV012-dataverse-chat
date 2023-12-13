const Statistics = () => {
    const divStats = document.createElement("div");
    divStats.classList.add("computeStats");
    const estadistica = document.createElement("p");
    estadistica.textContent = 'Promedio de Podios: ';
    let spanStats = document.createElement("span");
    spanStats.textContent = '--';
    spanStats.setAttribute("id", "averagePodiums"); // Corregir aquí
    estadistica.appendChild(spanStats);
    divStats.appendChild(estadistica);
    return divStats;
}

export default Statistics;
