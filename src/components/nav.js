import { navigateTo } from "../router.js"; 
import Buttons from "./buttons.js";

const Nav = () => {
    const nav = document.createElement('header');
    nav.classList.add("nav");
    nav.innerHTML=`
    <img src="./assets/f1_logo.svg" alt="Logo F1" class="logoWhite">
    `;

    // Llamamos a Buttons pasando nav como parámetro
    const buttons = Buttons(nav);
    nav.appendChild(buttons); // Agregamos los botones al elemento nav

    const logoNav = nav.querySelector('.logoWhite');
    logoNav.addEventListener("click", function() {
        const home = `/`; 
        navigateTo(home); 
    });

    return nav;
}

export default Nav;