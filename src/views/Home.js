import data from '../data/dataset.js'
import Card from '../components/card.js';
import Header from '../components/header.js';
import Statistics from '../components/statistics.js';
import Footer from '../components/Footer.js';
import Navbar from '../components/navbar.js';


export const Home = () => {
    const container = document.createElement('span')
    const ul = document.createElement("ul");
    //Subtitulo
    const h2 = document.createElement('h2');
    h2.textContent = 'Desde Fangio hasta Verstappen, pasando por leyendas como Lauda y Senna.';
    h2.classList.add("subtitle");

  
    data.forEach((driver) => { 
        ul.appendChild(Card(driver));
    })

    container.append(Header(), Navbar(), Statistics(), h2,  ul, Footer());

    return container;
};
    