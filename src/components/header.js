import { navigateTo } from "../router.js"; 

const Header = () => {
    const header = document.createElement("header");
    header.classList.add("header");
    header.innerHTML = `
        <img src="./assets/New_era_F1_logo.png" alt="Logo formula 1" class="logo-f1">
        <h1 class="title">Los mejores pilotos de Fórmula 1</h1>
    `;

    const logoHeader = header.querySelector('.logo-f1');

    logoHeader.addEventListener("click", function() {
        const pageInit = `/`; 
        navigateTo(pageInit); 
    });

    return header;
} 

export default Header;
