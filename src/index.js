// Importa las vistas desde sus respectivos archivos
import { Home } from "./views/Home.js";
import { Panel } from "./views/Panel.js";
import { Pilot } from "./views/Pilot.js";
import { ApiKey } from "./views/ApiKey.js";
import { ErrorView } from "./views/ErrorView.js";

// Importa funciones del router
import { setRootElement, setRoutes, onURLChange } from "./router.js";

// Define las rutas y sus vistas asociadas
const routes = {
  "/": Home,
  "/panel": Panel,
  "/pilot": Pilot,
  "/apikey": ApiKey,
  "/error": ErrorView,
};

// Obtiene el elemento raíz del contenedor en el DOM
const containerRoot = document.querySelector("#root");

// Asigna las rutas
setRoutes(routes);
// Establece el elemento raíz donde se renderizarán las vistas
setRootElement(containerRoot);

// Establece el elemento raíz y maneja el cambio de URL al cargar la página
window.addEventListener("DOMContentLoaded", (event) => {
  onURLChange(event.currentTarget.location.pathname, {});
});
