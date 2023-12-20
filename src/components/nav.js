const Nav = () => {
    const nav = document.createElement('header');
    nav.classList.add("nav");
    nav.innerHTML=`
    <div class="elementNav">
        <a href="/">
            <img src="./assets/f1_logo.svg" alt="Logo F1" class="logowhite">
        </a>
        <button id="panelButton">Panel de Pilotos</button>
        <button id="apikeyButton">Api Key</button>
    </div>
    `
    return nav;
}

export default Nav;