import Header from '../components/header.js';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js'; 
// Falta importar la estadistica

export const Home = () => {
    const containerHome = document.createElement('div');
    
    // Subtitulo
    const h2 = document.createElement('h2');
    h2.textContent = 'Desde Fangio hasta Verstappen, pasando por leyendas como Lauda y Senna.';
    h2.classList.add("subtitle");

    containerHome.append(Header(), Navbar(), h2, Footer());

    return containerHome;
};






