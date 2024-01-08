import Nav from "../components/nav.js";
import Footer from "../components/footer.js";

export const ApiKey = () => {
    const containerApikey = document.createElement('div');
    containerApikey.classList.add("containerApikey");

    const contentApikey = document.createElement('div');
    contentApikey.classList.add("contentApiKey");  
    contentApikey.innerHTML = `
        <p class="apiKeyText">Administra la API KEY</p>
        <input class="apiKeyInput" type="text" name="key" placeholder="Ingresa la Api Key">
        <div class="apiKeyButtons">
            <button class="apiKeyButtonSave" name="apiKeyButtonSave">Guardar</button>
            <button class="apiKeyButtonDelete" name="apiKeyButtonDelete">Eliminar</button>
        </div>
    `;

    const saveButton = contentApikey.querySelector('.apiKeyButtonSave');
    const deleteButton = contentApikey.querySelector('.apiKeyButtonDelete');

    // Manejador del evento para el botón de guardar
    saveButton.addEventListener("click", function() {
        const apiKeyInput = contentApikey.querySelector('.apiKeyInput');
        const apiKey = apiKeyInput.value.trim();

        if (apiKey !== "") {
            // Guarda la API Key en el localStorage
            localStorage.setItem('apiKey', apiKey);
            alert('API Key guardada correctamente.');
        } else {
            alert('Ingresa una API Key válida.');
        }
    });

    // Manejador del evento para el botón de eliminar
    deleteButton.addEventListener("click", function() {
        // Elimina la API Key del localStorage
        localStorage.removeItem('apiKey');
        alert('API Key eliminada correctamente.');
    });

    // Agrega componentes al contenedor principal
    containerApikey.append(Nav(), contentApikey, Footer());

    return containerApikey;
}
