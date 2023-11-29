console.log('dsra');
import bgImg from '../src/background.png'
import './style.css';
import 'normalize.css'
let container = document.querySelector('.con');
const headerNav = document.createElement('div.');

let h1 = document.createElement('h1');
h1.textContent="Le Indian Cuisine";
const myBgImg = new Image();
myBgImg.src = bgImg;

container.append(h1,headerNav);
