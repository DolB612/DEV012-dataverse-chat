import { filterData, sortData, computeStats } from "../lib/dataFunctions.js";
import { renderItems } from "../components/Card.js";
import data from "../data/dataset.js";

const Navbar = () => {
    let arrayPilots = [...data];
    let sortOption = "nonOrder"; // Inicializa con la opción de ordenamiento predeterminada

    const nav = document.createElement("nav");
    nav.classList.add("navbar");
    nav.innerHTML = `
    <label for="select-filter">Filtra por:</label>
    <select id="select-filter" data-testid="select-filter" name="lastTeam">
      <option value="Todos">Escuderias</option>
      <option value="Alfa Romeo Racing">Alfa Romeo Racing</option>
      <option value="AlphaTauri">AlphaTauri</option>
      <option value="Alpine">Alpine</option>
      <option value="Aston Martin">Aston Martin</option>
      <option value="Benetton">Benetton</option>
      <option value="Brabham">Brabham</option>
      <option value="British Racing Motors">British Racing Motors</option>
      <option value="Ferrari">Ferrari</option>
      <option value="Haas">Haas</option>
      <option value="Lancia">Lancia</option>
      <option value="Lotus">Lotus</option>
      <option value="Maserati">Maserati</option>
      <option value="McLaren">McLaren</option>
      <option value="Mercedes">Mercedes</option>
      <option value="Prost">Prost</option>
      <option value="Red Bull Racing">Red Bull Racing</option>
      <option value="Tyrrell">Tyrrell</option>
      <option value="Williams">Williams</option>
    </select>
    
  
    <label for="sort-order"> Ordenar: </label>
    <select id="sort-order" data-testid="select-sort" name="name">
      <option value="nonOrder">Sin ordenar</option>
      <option value="asc">A - Z</option>
      <option value="desc">Z - A</option>
    </select>
  
    <button data-testid="button-clear">Eliminar</button>
        
    `;

    const containerFilter = document.createElement('div');
    containerFilter.appendChild(renderItems(arrayPilots));
    nav.appendChild(containerFilter); // Agrega containerFilter a nav

    // Añadir estadísticas al navbar
    const statsComponent = Statistics();
    nav.appendChild(statsComponent);

    // DOM Estadística inicial
    const statsContainer = nav.querySelector(".computeStats");
    updateAveragePodiums(arrayPilots, statsContainer);

    // Función para actualizar el promedio de podios
    function updateAveragePodiums(data, statsContainer) {
        const averagePodiumsElement = statsContainer.querySelector("#averagePodiums");
        const averagePodiums = computeStats(data);
        averagePodiumsElement.textContent = "Promedio de Podios: " + averagePodiums;
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
        if (sortOption !== "nonOrder") {
            arrayPilots = sortData(arrayPilots, sortOption);
        }
        containerFilter.innerHTML = "";
        containerFilter.appendChild(renderItems(arrayPilots));
        // Actualizar la estadística
        updateAveragePodiums(arrayPilots, statsContainer);
    });

    // DOM Order
    const order = document.querySelector("#sort-order");
    order.addEventListener("change", function (event) {
        sortOption = event.target.value;
        arrayPilots = sortData(arrayPilots, "name", sortOption);
        containerFilter.innerHTML = "";
        containerFilter.appendChild(renderItems(arrayPilots));
        // Actualizar la estadística
        updateAveragePodiums(arrayPilots, statsContainer);
    });

    // DOM limpiar (reiniciar la aplicación)
    const clearButton = document.querySelector('[data-testid="button-clear"]');
    clearButton.addEventListener("click", function () {
        // Restablece los filtros y ordenamientos
        filter.value = "Todos";
        order.value = "nonOrder";
        sortOption = "nonOrder";

        arrayPilots = [...data];
        containerFilter.innerHTML = "";
        containerFilter.appendChild(renderItems(arrayPilots));
        // Actualizar la estadística
        updateAveragePodiums(arrayPilots, statsContainer);
    });

    return nav;
}

export default Navbar;