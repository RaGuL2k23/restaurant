console.log('dsra');
import './style.css';
import 'normalize.css';
import { createHomePage,container } from './homePage';
import { createMenuPage } from './menuPage';
import { creatConatactPage } from './contactPage';
/*adding tabs */


const headerNav = document.createElement('div');
const HomeButton = document.createElement('button');
const MenuButton = document.createElement('button');   
const contactButton = document.createElement('button');
MenuButton.textContent="Menu";
HomeButton.textContent="Home";contactButton.textContent="Order now"
headerNav.setAttribute('class','header');

// container.insertAdjacentElement("beforebegin", headerNav);
container.append(headerNav)
headerNav.append(HomeButton,MenuButton,contactButton);

HomeButton.addEventListener('click',createHomePage);
MenuButton.addEventListener('click',createMenuPage);
contactButton.addEventListener('click',creatConatactPage);
createHomePage(); 

export{
    headerNav
}