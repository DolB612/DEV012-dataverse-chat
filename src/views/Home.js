import data from '../data/dataset.js'
import Card from '../components/card.js';
import Header from '../components/header.js';
import Statistics from '../components/Statistics.js';
import Footer from '../components/footer.js';
import Navbar from '../components/navbar.js';
import { sortData, filterData, computeStats } from '../lib/dataFunctions.js';

export const Home = () => {
    const container = document.createElement('div');
    container.classList.add("container");

    const ul = document.createElement("ul");
    const h2 = document.createElement("h2");
    h2.innerHTML = `
    <h2 class="subtitle">Desde Fangio hasta Verstappen, pasando por leyendas como Lauda y Senna.</h2>
    `

    // Función para renderizar tarjetas
    const renderCards = (drivers) => {
        ul.innerHTML = '';
        drivers.forEach((driver) => {
            ul.appendChild(Card(driver));
        });
    };

    // Inicializar con todos los datos
    let currentData = [...data];
    renderCards(currentData);

    container.append(Header(), Navbar(), Statistics(), h2, ul, Footer());

    // Ordenar
    const ordenar = container.querySelector('#sort-order');
    ordenar.addEventListener('change', (e) => {
        const dataOrdenada = sortData(currentData, 'name', e.target.value);
        renderCards(dataOrdenada);
        updateStats(dataOrdenada);
    });

    // Filtrar
    const filtro = container.querySelector('#select-filter');
    filtro.addEventListener('change', (e) => {
        const selectedValue = e.target.value;
        if (selectedValue === "Todos") {
            currentData = [...data];
        } else {
            currentData = filterData(data, "lastTeam", selectedValue);
        }
        const dataOrdenada = sortData(currentData, ordenar.value);
        renderCards(dataOrdenada);
        updateStats(dataOrdenada);
    });

       // Función para actualizar estadísticas
       const updateStats = (drivers) => {
        // Calcula el promedio de podiums utilizando la función computeStats
        const averagePodiumsElement = document.getElementById("averagePodiums");
        
        if (averagePodiumsElement) {
            const averagePodiums = computeStats(drivers);
            averagePodiumsElement.textContent = averagePodiums;
        }
    };
    
    // Borrar
    const clearButton = container.querySelector('[data-testid="button-clear"]');
    clearButton.addEventListener('click', () => {
        filtro.value = "Todos";
        currentData = [...data];
        renderCards(currentData);
        updateStats(currentData);
    });

    return container;
};