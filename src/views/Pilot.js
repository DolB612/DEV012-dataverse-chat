import Nav from "../components/nav.js";
import Footer from "../components/footer.js";

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

    containerPilot.append(Nav(), contentChat, Footer());

    return containerPilot;
};