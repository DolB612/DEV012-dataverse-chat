import { navigateTo } from "../router.js"; 

const Nav = () => {
    const nav = document.createElement('header');
    nav.classList.add("nav");
    nav.innerHTML=`
    
    <img src="./assets/f1_logo.svg" alt="Logo F1" class="logoWhite">
    
    <div class="elementNav">
        <button class="panelButton" name="returnPanel">Panel de Pilotos</button>
        <button class="apikeyButton" name="returnApikey">Api Key</button>
    </div>
    `
   
    const logoNav = nav.querySelector('.logoWhite');
    logoNav.addEventListener("click", function() {
        const home = `/`; 
        navigateTo(home); 
    });

    const panelButton = nav.querySelector('.panelButton');
    panelButton.addEventListener("click", function() {
        const panelPage = '/panel'; 
        navigateTo(panelPage); 
    });

    const apikeyButton = nav.querySelector('.apikeyButton');
    apikeyButton.addEventListener("click", function() {
        const apikeyPage = '/apikey'; 
        navigateTo(apikeyPage); 
    });

    return nav;
}

export default Nav;