import allData from '../data/dataset.js'
import Card from '../components/Card.js';
import { Header } from '../components/header.js';

export const Home = () => {
    const container = document.createElement('span')
    const ul = document.createElement("ul");
    const h3 = document.createElement('h3')
    h3.textContent = 'Now the best pilots around the world:'
  
    allData.forEach((driver) => { 
        ul.appendChild(Card(driver));
    })

    container.append(Header(), h3,  ul);

    return container;
};
