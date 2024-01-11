import { navigateTo } from "../router.js"; 

const Buttons = () => {
    const containerButtons = document.createElement('div');
    containerButtons.classList.add("elementNav");
    containerButtons.innerHTML = `
    <button class="panelButton" name="returnPanel">Panel de Pilotos</button>
    <button class="apikeyButton" name="returnApikey">Api Key</button>
    `;

    const panelButton = containerButtons.querySelector('.panelButton'); 
    panelButton.addEventListener("click", function() {
        const panelPage = '/panel'; 
        navigateTo(panelPage); 
    });

    const apikeyButton = containerButtons.querySelector('.apikeyButton'); 
    apikeyButton.addEventListener("click", function() {
        const apikeyPage = '/apikey'; 
        navigateTo(apikeyPage); 
    });

    return containerButtons;
};

export default Buttons;
