// import data from '../data/dataset.js'
import Nav from "../components/nav.js";
import Footer from "../components/footer.js";
import { openIAapi } from "../lib/openIaApi.js";
import data from "../data/dataset.js";

export const Panel = (props) => {
  const containerPanel = document.createElement("div");
  containerPanel.classList.add("containerPanel");

  // Crear un elemento que contenga pilotos y chat grupal
  const contentChatGroup = document.createElement("div");
  contentChatGroup.classList.add("contentChatGroup");

  // 1 contenedor para los pilotos
  const divContainerPilot = document.createElement("span");
  divContainerPilot.classList.add("divContainerPilot");
  // Creando un mensaje como ejemplo
  const text = document.createElement("h1");
  const saludo = document.createTextNode("Hola, aquí van los pilotos");
  text.appendChild(saludo);
  // Agregamos al nodo padre el nodo hijo text con un mensaje
  divContainerPilot.appendChild(text);

  // 2 contenedor padre para el chat
  const divChatOnPilot = document.createElement("div");
  divChatOnPilot.classList.add("divChatOnPilot");
  // contenedor para mensajes
  const messageChatOnPilot = document.createElement("div");
  messageChatOnPilot.classList.add("messageChatOnPilot");

  // Crear un div para que contenga el input y el boton (pendiente):
  const contentInputButton = document.createElement("span");
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
          console.log(arrayJson);

          const promiseArrayJson = [];
          for (let i = 0; i < arrayJson.length; i++) {
            const obj = arrayJson[i].json();
            promiseArrayJson.push(obj);
          }
          // Agregar mensajes 
          Promise.all(promiseArrayJson).then(function (response) {
            console.log(response);
            // Aquí debemos agregar los mensajes a messageChat
            
          });
        });
        console.log("Esto es sync");
      }
    });
  }

  // Agregamos nodos al contenedor principal de toda la vista
  containerPanel.append(Nav(), contentChatGroup, Footer());

  return containerPanel;
};
