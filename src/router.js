// El objeto que mapea las rutas de nuestro sitio
let ROUTES = {};
// Será la referencia al elemento HTML donde vamos a dibujar los elementos de nuestros componentes
let rootElement;

export const setRootElement = (newRootElementValue) => {
    // Validar si newRootElementValue es un objeto html
    rootElement = newRootElementValue;
}

export const setRoutes = (newRoutesValue) => {
  if(typeof newRoutesValue === "object"){
    if(newRoutesValue['/error']){
        ROUTES = newRoutesValue;
    }
  }
  
}

// Esto es opcional: 
// const queryStringToObject = (queryString) => {
//   // convert query string to URLSearchParams
//   // convert URLSearchParams to an object
//   // return the object
// }

const renderView = (pathname, props={}) => {
  const root = rootElement; // clear the root element
  root.innerHTML = ''; 
  console.log(pathname);
  // find the correct view in ROUTES for the pathname
  if(ROUTES[pathname]){
    const template = ROUTES[pathname](props);
    root.appendChild(template);
  } else{
    root.appendChild(ROUTES['/error']());
  }
} 

export const navigateTo = (pathname, props={}) => {
  // update window history with pushState
  const URLvisited = window.location.origin + pathname;
  history.pushState({}, "", URLvisited);
  // render the view with the pathname and props
  renderView(pathname, props);
}

export const onURLChange = (pathname) => {
  renderView(pathname);
}
