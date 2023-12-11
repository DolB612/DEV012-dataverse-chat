export const Header = () => {
    const header = document.createElement("header");
    header.classList.add("header")
    const h1 = document.createElement("h1");
    h1.classList.add("title");
    h1.innerHTML = ' Los mejores pilotos de Fórmula 1 de la historia';
    header.appendChild(h1);  // Añadir el elemento h1 al header
    return header;
}