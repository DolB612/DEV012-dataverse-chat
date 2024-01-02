import Nav from "../components/nav.js";
import Footer from "../components/footer.js";

export const ApiKey = () => {
    const containerApikey = document.createElement('div');
    containerApikey.classList.add("containerApikey");

    const contentApikey = document.createElement('div');
    contentApikey.classList.add("contentApiKey");  // Agregado: Se añade la clase correcta
    contentApikey.innerHTML = `
        <p class="apiKeyText">Administra la Api Key</p>
        <input class="apiKeyInput" type="text" name="apiKey" placeholder="Ingrese su Api Key">
        <div class="apiKeyButtons">
            <button class="apiKeyButtonSave" name="apiKeyButtonSave">Guardar</button>
            <button class="apiKeyButtonDelete" name="apiKeyButtonDelete">Eliminar</button>
        </div>
    `;

    containerApikey.append(Nav(), contentApikey, Footer());

    return containerApikey;
};