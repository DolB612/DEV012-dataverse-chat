import { Home } from './views/Home.js';
import { Panel } from './views/Panel.js';
import { Pilot } from './views/Pilot.js';
import { ApiKey } from './views/ApiKey.js';
import { ErrorView } from './views/ErrorView.js';

import { setRootElement, setRoutes, onURLChange } from './router.js';

// Define your routes and their associated views
const routes = {
  '/': Home,
  '/panel': Panel,
  '/pilot': Pilot,
  '/apikey': ApiKey,
  '/error': ErrorView,
};

const containerRoot = document.querySelector("#root");

// Assign the routes
setRoutes(routes);
setRootElement(containerRoot);

// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", (event) => {
    onURLChange(event.currentTarget.location.pathname, {});
    console.log(event.currentTarget);
});


