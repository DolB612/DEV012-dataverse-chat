import Nav from "../components/nav.js";
import Footer from "../components/footer.js";

export const ApiKey = () => {
    const containerApikey = document.createElement('div');
    containerApikey.classList.add("containerApikey");
   
    const contentApikey = document.createElement('div');
    contentApikey.innerHTML = `
    <p>Administra la Api Key</p> 
    <input type="text" name="codeapikey">
    <button>Guardar</button> 
    <button>Eliminar</button> 
    `;

    containerApikey.append(Nav(),contentApikey, Footer());

    return containerApikey;
};