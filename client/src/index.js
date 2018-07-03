import registerServiceWorker from './registerServiceWorker';
import {registerApplication, start} from 'single-spa';
import 'semantic-ui-css/semantic.min.css';

registerApplication('navBar', () => import('./navbar/navBar.app.js'), () => true);
registerApplication('root', () => import('./app1/root.app'), (location) => location.pathname === "" || location.pathname === "/" || location.pathname.startsWith('/home'));
registerApplication('contacts', () => import('./app2/contacts.app.js'), (location) => location.pathname.startsWith("/contacts"));

start();

registerServiceWorker();
