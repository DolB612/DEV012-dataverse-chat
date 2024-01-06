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

  containerPilot.append(Nav(), contentChat, Footer());
  const boxMessage = contentChat.querySelector('.boxMessage');
  const inputMessage = contentChat.querySelector('input[name="boxchat"]');
  const buttonSend = contentChat.querySelector('.buttonSend');

  buttonSend.addEventListener('click', () => {
    const userMessage = inputMessage.value.trim();
    if (userMessage !== "") {
      boxMessage.innerHTML += `<p>${userMessage}</p>`;

      openIAapi(props.name, userMessage)
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

      inputMessage.value = "";
    }
  });

  return containerPilot;
};
