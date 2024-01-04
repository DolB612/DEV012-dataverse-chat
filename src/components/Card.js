import { navigateTo } from "../router.js"; 

const Card = (driver) => {
  const li = document.createElement("li");
  li.classList.add("list");
  li.setAttribute("itemscope", "");
  li.setAttribute("itemtype", "PilotsF1");
  li.setAttribute("data-id", driver.id);

  // Evento clic para las tarjetas
  li.addEventListener("click", () => redirectToDetailView(driver));

  li.innerHTML = `
    <dl class="root-list" itemscope itemtype="PilotsF1">
      <img src="${driver.imageUrl}" itemprop="image" />
      <dt></dt><dd itemprop="name">${driver.name}</dd>
      <dt></dt><dd itemprop="placeOfBirth">${driver.facts.placeOfBirth}</dd>
      <dt></dt><dd itemprop="lastTeam">${driver.facts.lastTeam}</dd>
      <dt></dt><dd itemprop="podiums">Podios: ${driver.extraInfo.podiums}</dd>
    </dl>
  `;

  return li;
};

// Función para redirigir a la vista 
const redirectToDetailView = (driver) => {
  // URL a la que será redireccionado utilizando id unico
  const detailViewUrl = `/pilot`;
  // Redirigir a la vista 
  navigateTo(detailViewUrl, driver); // Utilizamos la función navigateTo del router
};

export default Card;
