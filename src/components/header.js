const Header = () => {
    const header = document.createElement("header");
    header.classList.add("header");
    header.innerHTML = `
    <a href="/">
        <img src="./assets/New_era_F1_logo.png" alt="Logo formula 1" class="logo-f1">
    </a>

    <h1 class="title">Los mejores pilotos de Fórmula 1</h1>
    `
    return header;
}

export default Header;