import Nav from "../components/nav.js";
import Footer from "../components/footer.js";
import { openIAapi } from "../lib/openIaApi.js";

export const Pilot = (props) => {
    const containerPilot = document.createElement('div');
    containerPilot.classList.add("containerPilot");

    // Creamos elemento main
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

    // Esto se agregó
    containerPilot.append(Nav(), contentChat, Footer());
    const boxMessage = contentChat.querySelector('.boxMessage');
    const inputMessage = contentChat.querySelector('input[name="boxchat"]');
    const buttonSend = contentChat.querySelector('.buttonSend');

    buttonSend.addEventListener('click', () => {
        const userMessage = inputMessage.value.trim();
        if (userMessage !== "") {
            boxMessage.innerHTML += `<p>${userMessage}</p>`;

            openIAapi(props.name, userMessage)
                .then((responseOpenAI) => responseOpenAI.json())
                .then((responseJSObject) => {
                    const aiReply = responseJSObject.choices[0].message.content;
                    boxMessage.innerHTML += `<p>${aiReply}</p>`;
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            
            // Limpiar el input después de enviar el mensaje
            inputMessage.value = "";
        }
    });
    
    return containerPilot;
};