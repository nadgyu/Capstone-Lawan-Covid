/* eslint-disable no-unused-vars */
import 'regenerator-runtime';
import swRegister from './utils/sw-register';
import '../styles/style.scss';
import '../styles/responsive.scss';
import './utils/dark-light-theme';
import scrollReveal from './utils/scroll-reveal';
import scrollActive from './utils/scroll-active-section';
import scrollHeader from './utils/change-bg-header';
import App from './views/app';

const app = new App({
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
  scrollReveal();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  scrollReveal();
});

window.addEventListener('scroll', () => {
  scrollHeader();
  scrollActive();
});
