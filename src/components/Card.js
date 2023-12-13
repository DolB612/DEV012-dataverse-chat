export const renderItems = (data) => {
  const ul = document.createElement("ul");

  data.forEach((pilot) => { 
    const li = document.createElement("li");
    li.classList.add("list"); 
    li.setAttribute("itemscope", "");
    li.setAttribute("itemtype", "PilotsF1");
    li.setAttribute("data-id", pilot.id);

    li.innerHTML = `
      <dl class="root-list" itemscope itemtype="PilotsF1">
        <img src="${pilot.imageUrl}" itemprop="image" />
        <dt></dt><dd itemprop="name">${pilot.name}</dd>
        <dt></dt><dd itemprop="placeOfBirth">${pilot.facts.placeOfBirth}</dd>
        <dt></dt><dd itemprop="lastTeam">${pilot.facts.lastTeam}</dd>
        <dt></dt><dd itemprop="championshipsWon">Campeonatos: ${pilot.extraInfo.championshipsWon}</dd>
      </dl>
    `;

    ul.appendChild(li);
  });

  return ul;
};
