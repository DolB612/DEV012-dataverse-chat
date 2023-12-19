import { navigateTo } from "../router.js"; 

const Card = (driver) => {
  const li = document.createElement("li");
  li.classList.add("list");
  li.setAttribute("itemscope", "");
  li.setAttribute("itemtype", "PilotsF1");
  li.setAttribute("data-id", driver.id);

  // Evento clic para las tarjetas
  li.addEventListener("click", () => redirectToDetailView(driver.id));

  li.innerHTML = `
    <dl class="root-list" itemscope itemtype="PilotsF1">
      <img src="${driver.imageUrl}" itemprop="image" />
      <dt></dt><dd itemprop="name">${driver.name}</dd>
      <dt></dt><dd itemprop="placeOfBirth">${driver.facts.placeOfBirth}</dd>
      <dt></dt><dd itemprop="lastTeam">${driver.facts.lastTeam}</dd>
      <dt></dt><dd itemprop="championshipsWon">Campeonatos: ${driver.extraInfo.championshipsWon}</dd>
    </dl>
  `;

  return li;
};

// Función para redirigir a la vista 
const redirectToDetailView = (driverId) => {
  // URL a la que será redireccionado utilizando id unico
  const detailViewUrl = `/pilot/${driverId}`; 
  // Redirigir a la vista 
  navigateTo(detailViewUrl); // Utilizamos la función navigateTo del router
};

export default Card;
