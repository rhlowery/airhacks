import { Router } from "./router.js";
import './Header.js';
import './Login.js';
import './Logout.js';

const outlet = document.querySelector('output');
const router = new Router(outlet);
router.setRoutes([
  {path: '/login',     component: 'd-login'},
  {path: '/logout',  component: 'd-logout'}
]);