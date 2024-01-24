import Nav from "../components/nav.js";
import Footer from "../components/footer.js";
import { openIAapi } from "../lib/openIaApi.js";
import data from "../data/dataset.js";

export const Panel = () => {
  const containerPanel = document.createElement("div");
  containerPanel.classList.add("containerPanel");

  // Crear un elemento que contenga pilotos y chat grupal
  const contentChatGroup = document.createElement("div");
  contentChatGroup.classList.add("contentChatGroup");

  // 1 contenedor para los pilotos
  const divContainerPilot = document.createElement("div");
  divContainerPilot.classList.add("divContainerPilot");
  const ulPanel = document.createElement("ul");
  ulPanel.classList.add("ulPanel");
  data.forEach((driver) => {
    const liPanel = document.createElement("li");
    liPanel.classList.add("liPanel");
    liPanel.innerHTML = `
        <section class="infoPilot">
        <img src="${driver.imageUrl}" class="imgPilotPanel"/>
        <section class="descriptionName">
          <p class="namePilotPanel">${driver.name}</p>
          <p class="shortDescriptionPanel">${driver.shortDescription}</p>
        </section>
        </section>
 `;
    ulPanel.appendChild(liPanel);
  });

  // Agregamos al nodo padre el nodo hijo text con un mensaje
  divContainerPilot.appendChild(ulPanel);

  // 2 contenedor padre para el chat
  const divChatOnPilot = document.createElement("div");
  divChatOnPilot.classList.add("divChatOnPilot");
  // contenedor para mensajes
  const messageChatOnPilot = document.createElement("div");
  messageChatOnPilot.classList.add("messageChatOnPilot");

  // Crear un div para que contenga el input y el boton (pendiente):
  const contentInputButton = document.createElement("div");
  contentInputButton.classList.add("contentInputButton");
  // input para introducir preguntas
  const inputChatOnPilot = document.createElement("input");
  inputChatOnPilot.classList.add("inputChatOnPilot");
  inputChatOnPilot.setAttribute("placeholder", "Mensaje");
  // botón para enviar mensajes
  const buttonChatOnPilot = document.createElement("button");
  buttonChatOnPilot.classList.add("buttonChatOnPilot");
  buttonChatOnPilot.innerHTML = "Enviar";

  // Agregamos el boton e input a su contenedor
  contentInputButton.append(inputChatOnPilot, buttonChatOnPilot);

  divChatOnPilot.append(messageChatOnPilot, contentInputButton);

  contentChatGroup.append(divContainerPilot, divChatOnPilot);

  // ! Funcionalidad:
  // Verifica si el usuario tiene una API Key almacenada en el localStorage
  const apiKeyStored = localStorage.getItem("apiKey");

  if (!apiKeyStored) {
    alert(
      "Para interactuar con el chat, primero ingresa tu API Key en la página correspondiente."
    );
  } else {
    // Obtén elementos relevantes del contenido del chat
    const messageChat = contentChatGroup.querySelector(".messageChatOnPilot");
    const inputChat = contentChatGroup.querySelector(".inputChatOnPilot");
    const buttonChat = contentChatGroup.querySelector(".buttonChatOnPilot");

    // Evento click del botón de enviar
    buttonChat.addEventListener("click", () => {
      const messageUser = inputChat.value.trim();

      if (messageUser !== "") {
        // Añade el mensaje del usuario al chat
        messageChat.innerHTML += `<p>${messageUser}</p>`;

        const dataPilots = [...data];
        const promiseArray = [];

        // Iteramos cada piloto
        for (let i = 0; i < dataPilots.length; i++) {
          const pilot = dataPilots[i];
          const newPromise = openIAapi(pilot.name, messageUser);
          promiseArray.push(newPromise);
        }
        // Convertirmos a .json
        Promise.all(promiseArray).then(function (arrayJson) {
          const promiseArrayJson = [];
          for (let i = 0; i < arrayJson.length; i++) {
            const obj = arrayJson[i].json();
            promiseArrayJson.push(obj);
          }
          // Agregar mensajes
          Promise.all(promiseArrayJson).then(function (response) {
            // Agregamos la respuesta a messageChat
            for (let i = 0; i < response.length; i++) {
              const htmlTemplate = `
              <p>${response[i].choices[0].message.content}</p>
              `;
              messageChat.innerHTML += htmlTemplate;
            }
            inputChat.value = ""; // Limpiamos input despues de obtener respuestas
          });
        });
      }
    });
  }

  // Agregamos nodos al contenedor principal de toda la vista
  containerPanel.append(Nav(), contentChatGroup, Footer());

  return containerPanel;
};
