const Header = () => {
    const header = document.createElement("header");
    header.classList.add("header");
    header.innerHTML = `
    <a href="http://localhost:3000/">
        <img src="./assets/New_era_F1_logo.png" alt="Logo formula 1" class="logo-f1">
    </a>
    `
    const h1 = document.createElement("h1");
    h1.classList.add("title");
    h1.innerHTML = 'Los mejores pilotos de Fórmula 1';
    header.appendChild(h1);  // Añadir el elemento h1 al header
    return header;
}

export default Header;