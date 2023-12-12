const Card = (driver) => {
      const li = document.createElement("li");
      li.classList.add("list");
      li.setAttribute("itemscope", "");
      li.setAttribute("itemtype", "PilotsF1");
      li.setAttribute("data-id", driver.id);
  
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

  export default Card;
