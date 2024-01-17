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
  inputChatOnPilot.setAttribute("placeholder","Mensaje")
  // botón para enviar mensajes
  const buttonChatOnPilot = document.createElement("button");
  buttonChatOnPilot.classList.add("buttonChatOnPilot");
  buttonChatOnPilot.innerHTML = "Enviar";
  // Agregamos el boton e input a su contenedor
  contentInputButton.append(inputChatOnPilot, buttonChatOnPilot);

  divChatOnPilot.append(
    messageChatOnPilot,
    contentInputButton
  );

  contentChatGroup.append(divContainerPilot, divChatOnPilot);



  const dataPilots = [...data];

  const tresPilots = dataPilots.slice(0,3);

  const promises = tresPilots.map((pilot) => {
    return openIAapi(pilot.name, "Hola ¿Quién eres?");
  })

  console.log(promises);

  Promise.all(promises)
  .then((resultado) => {
    console.log(resultado);
    const respuestas = resultado.map((respuesta) => {
      return respuesta.json();
    })
    Promise.all(respuestas)
    .then((datos) => {
      console.log(datos);
    })
  })
  .catch(error => console.log(`mensaje`));




  // ! localStorage:

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

        // Llama a la API de OpenAI con la API Key del usuario
        openIAapi(props.name, messageUser)
          .then((responseOpenAI) => {
            if (!responseOpenAI.ok) {
              throw new Error(
                `API request failed with status ${responseOpenAI.status}`
              );
            }
            return responseOpenAI.json();
          })
          .then((responseJSObject) => {
            if (
              responseJSObject.choices &&
              responseJSObject.choices.length > 0
            ) {
              const aiReply = responseJSObject.choices[0].message.content;
              if (aiReply.trim() !== "") {
                // Añade la respuesta de la AI al chat
                messageChat.innerHTML += `<p>${aiReply}</p>`;
              } else {
                console.warn("La respuesta de la API de OpenAI está vacía.");
              }
            } else {
              console.warn(
                "La respuesta de la API de OpenAI no tiene el formato esperado."
              );
            }
          })
          .catch((error) => {
            console.error("Error en la llamada a la API:", error);
          });

        inputChat.value = ""; // Limpia el input después de enviar el mensaje
      }

    });
  }

  // Agregamos nodos al contenedor principal de toda la vista
  containerPanel.append(Nav(), contentChatGroup, Footer());

  return containerPanel;
};
