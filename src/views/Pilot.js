// import data from '../data/dataset.js'
import Nav from "../components/nav.js";
import Footer from "../components/footer.js";

export const Pilot = () => {
    const containerPilot = document.createElement('div');
    containerPilot.classList.add("containerPilot");

    const contentChat = document.createElement('div');
    contentChat.innerHTML = `
    <section>Chat Individual</section>  
    `;

    containerPilot.append(Nav(), contentChat, Footer());

    return containerPilot;
};