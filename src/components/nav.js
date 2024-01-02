const Nav = () => {
    const nav = document.createElement('header');
    nav.classList.add("nav");
    nav.innerHTML=`
    
    <a href="/">
        <img src="./assets/f1_logo.svg" alt="Logo F1" class="logowhite">
    </a>

    <div class="elementNav">
        <button name="panelButton">Panel de Pilotos</button>
        <button name="apikeyButton">Api Key</button>
    </div>
    `
    return nav;
}

export default Nav;