import allData from '../data/dataset.js'
import Card from '../components/Card.js';
import Header from '../components/header.js';
import Statistics from '../components/Statistics.js';

export const Home = () => {
    const container = document.createElement('span')
    const ul = document.createElement("ul");
    //Subtitulo
    const h2 = document.createElement('h2');
    h2.textContent = 'Desde Fangio hasta Verstappen, pasando por leyendas como Lauda y Senna.';
    h2.classList.add("subtitle");

  
    allData.forEach((driver) => { 
        ul.appendChild(Card(driver));
    })

    container.append(Header(), Statistics(), h2,  ul);

    return container;
};
