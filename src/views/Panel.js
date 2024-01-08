// import data from '../data/dataset.js'
import Nav from "../components/nav.js";
import Footer from "../components/footer.js";

export const Panel = () => {
    const containerPanel = document.createElement('div');
    containerPanel.classList.add("containerPanel");
    // Crear un elemento que contenga pilotos y chat grupal
    const contentChatGroup = document.createElement('div');
    contentChatGroup.innerHTML = `
    <section>Aquí estarán los pilotos</section> 
    <section>Chat Grupal</section> 
    `;

    containerPanel.append(Nav(),contentChatGroup, Footer());

    return containerPanel;
};
