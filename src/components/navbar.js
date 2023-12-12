const Navbar = () => {
    const nav = document.createElement("nav"); //Creamos un elemento.
    nav.classList.add("navbar"); //Creamos una clase.
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

    <img src="./data/images/New_era_F1_logo.png" alt="Logo formula 1" class="imagen-footer">

    `
    return nav;
}

export default Navbar;