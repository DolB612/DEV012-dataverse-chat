import Nav from "../components/nav.js";
import Footer from "../components/footer.js";
import { openIAapi } from "../lib/openIaApi.js";

export const Pilot = (props) => {
    const containerPilot = document.createElement('div');
    containerPilot.classList.add("containerPilot");
    //Creamos elemento main
    const contentChat = document.createElement('main'); 
    contentChat.classList.add("contentChat");
    contentChat.innerHTML = `
    <section class="pilotInfo">
    <img src="${props.imageUrl}" class="chatImgPilot"/>
    <section class="nameDescription">
    <p class:"name">${props.name}</p>
    <p class:"shortDescription">${props.shortDescription}</p>
    </section>
    </section>
    <section class="boxMessage">
    
    </section>
    <section class="buttonMessage">
    <input type="text" name="boxchat" placeholder="Mensaje">
    <button class="buttonSend">Enviar</button>
    </section>
    `;
// Esto se agregó
    containerPilot.append(Nav(), contentChat, Footer());
    contentChat.querySelector('.buttonSend').addEventListener('click', ()=>{
        contentChat.querySelector('.boxMessage').append(`<p>${contentChat.querySelector('input[name="boxchat"]').value}</p>`)
        //console.log(props.name, contentChat.querySelector('input[name="boxchat"]').value);
    openIAapi(props.name, contentChat.querySelector('input[name="boxchat"]').value)
    //    .then((responseOpenAI) => responseOpenAI.json())
    //   .then((responseJSObject) => {
    //     console.log(responseJSObject);
    //     console.log(responseJSObject.choices);
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
    })
    
    return containerPilot;
}; 