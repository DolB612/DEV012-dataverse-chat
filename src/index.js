import { Home } from './views/Home.js';
import { Panel } from './views/Panel.js';
import { Pilot } from './views/Pilot.js';
import { ApiKey } from './views/ApiKey.js';
import { ErrorView } from './views/ErrorView.js';

import { setRootElement, setRoutes, onURLChange } from './router.js';
import { filterData, sortData, computeStats } from '../lib/dataFunctions.js';
import data from './data/dataset.js'

// Define your routes and their associated views
const routes = {
  '/': Home,
  '/panel': Panel,
  '/pilot': Pilot,
  '/apikey': ApiKey,
  '/error': ErrorView,
};

//Estamos probando
let arrayPilots = [...data];
let sortOption = null; // Para mantener el estado de la opción de ordenamiento

const containerRoot = document.querySelector("#root");
containerRoot.appendChild(renderItems(arrayPilots));

// Assign the routes
setRoutes(routes);
setRootElement(containerRoot);

// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", (event) => {
    onURLChange(event.currentTarget.location.pathname, {});
    console.log(event.currentTarget);
});



// DOM Estadística inicial
updateAveragePodiums(arrayPilots);
// Función para actualizar el promedio de podios
function updateAveragePodiums(data) {
  const averagePodiumsElement = document.querySelector("#averagePodiums");
  const averagePodiums = computeStats(data);
  averagePodiumsElement.textContent = averagePodiums;
}


// DOM filtrar
const filter = document.querySelector("#select-filter");
filter.addEventListener("change", function (event) {
  const selectedValue = event.target.value;
  if (selectedValue === "Todos") {
    arrayPilots = [...data];
  } else {
    arrayPilots = filterData(data, "lastTeam", selectedValue);
  }
  if (sortOption) {
    arrayPilots = sortData(arrayPilots, sortOption);
  }
  containerRoot.innerHTML = "";
  containerRoot.appendChild(renderItems(arrayPilots));

  // Actualizar la estadística
  updateAveragePodiums(arrayPilots);
});



// DOM Order
const order = document.querySelector("#sort-order");
order.addEventListener("change", function (event) {
  arrayPilots = sortData(arrayPilots, "name", event.target.value);
  containerRoot.innerHTML = "";
  containerRoot.appendChild(renderItems(arrayPilots));
  // Rubi: probando estadistica
  updateAveragePodiums(arrayPilots);
});

// DOM limpiar (reiniciar la aplicación)
const clearButton = document.querySelector('[data-testid="button-clear"]');
clearButton.addEventListener("click", function () {
  // Restablece los filtros y ordenamientos
  filter.value = "Todos";
  order.value = "nonOrder";

  arrayPilots = [...data];
  sortOption = null;
  containerRoot.innerHTML = "";
  containerRoot.appendChild(renderItems(arrayPilots));
  // Probando estadistica
  updateAveragePodiums(arrayPilots);
});
