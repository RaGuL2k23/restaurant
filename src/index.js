console.log('dsra');
import './style.css';
import 'normalize.css';
import { createHomePage,container } from './homePage';

import { createMenuPage } from './menuPage';
/*adding tabs */


const headerNav = document.createElement('div');
const HomeButton = document.createElement('button');
const MenuButton = document.createElement('button');   
MenuButton.textContent="Menu";
HomeButton.textContent="Home";
headerNav.setAttribute('class','header');

// container.insertAdjacentElement("beforebegin", headerNav);
container.append(headerNav)
headerNav.append(MenuButton,HomeButton);

HomeButton.addEventListener('click',createHomePage);
MenuButton.addEventListener('click',createMenuPage)
// createHomePage();
import menuBgImg from '../images/fire-flame-black-background.jpg'

