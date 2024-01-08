import Nav from "../components/nav.js";
import Footer from "../components/footer.js";
import { openIAapi } from "../lib/openIaApi.js";

export const Pilot = (props) => {
    const containerPilot = document.createElement('div');
    containerPilot.classList.add("containerPilot");

    const contentChat = document.createElement('main');
    contentChat.classList.add("contentChat");
    contentChat.innerHTML = `
        <section class="pilotInfo">
          <img src="${props.imageUrl}" class="chatImgPilot"/>
          <section class="nameDescription">
            <p class="name">${props.name}</p>
            <p class="shortDescription">${props.shortDescription}</p>
          </section>
        </section>
        <section class="boxMessage"></section>
        <section class="buttonMessage">
          <input type="text" name="boxchat" placeholder="Mensaje">
          <button class="buttonSend">Enviar</button>
        </section>
    `;

    // ! localStorage:
    // Verifica si el usuario tiene una API Key almacenada en el localStorage
    const storedApiKey = localStorage.getItem('apiKey');
    
    if (!storedApiKey) {
      // El mensaje se agrega al final de la vista (REVISAR Y CORREGIR)
        contentChat.innerHTML += "<p>Para interactuar con el chat, primero ingresa tu API Key en la página correspondiente.</p>";
    } else {
        // Obtén elementos relevantes del contenido del chat
        const boxMessage = contentChat.querySelector('.boxMessage');
        const inputMessage = contentChat.querySelector('input[name="boxchat"]');
        const buttonSend = contentChat.querySelector('.buttonSend');

        // Evento click del botón de enviar
        buttonSend.addEventListener('click', () => {
            const userMessage = inputMessage.value.trim();
            
            if (userMessage !== "") {
                // Añade el mensaje del usuario al chat
                boxMessage.innerHTML += `<p>${userMessage}</p>`;

                // Llama a la API de OpenAI con la API Key del usuario
                openIAapi(storedApiKey, props.name, userMessage)
                    .then((responseOpenAI) => {
                        if (!responseOpenAI.ok) {
                            throw new Error(`API request failed with status ${responseOpenAI.status}`);
                        }
                        return responseOpenAI.json();
                    })
                    .then((responseJSObject) => {
                        if (responseJSObject.choices && responseJSObject.choices.length > 0) {
                            const aiReply = responseJSObject.choices[0].message.content;
                            if (aiReply.trim() !== "") {
                                // Añade la respuesta de la AI al chat
                                boxMessage.innerHTML += `<p>${aiReply}</p>`;
                            } else {
                                console.warn('La respuesta de la API de OpenAI está vacía.');
                            }
                        } else {
                            console.warn('La respuesta de la API de OpenAI no tiene el formato esperado.');
                        }
                    })
                    .catch((error) => {
                        console.error('Error en la llamada a la API:', error);
                    });

                inputMessage.value = ""; // Limpia el input después de enviar el mensaje
            }
        });
    }

    containerPilot.append(Nav(), contentChat, Footer());

    return containerPilot;
}