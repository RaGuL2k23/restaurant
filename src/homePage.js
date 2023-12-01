
import bgImg from '../src/background.png';
import { menuPageContainer } from './menuPage';

const container = document.querySelector('.con');
const homePageHeading = document.createElement('h1');
const magicWords = document.createElement('h2');

function createHomePage() {
      homePageHeading.remove();magicWords.remove();menuPageContainer.remove();

document.body.classList.add('homePageBgImg');
document.body.classList.remove('menuPageBgImg');
homePageHeading.textContent="Rocky's food court";
homePageHeading.setAttribute('class','heading');
magicWords.textContent="Come and end your impossible cravings";
magicWords.setAttribute('class','words');

const myBgImg = new Image();
myBgImg.src = bgImg;
container.append(homePageHeading,magicWords);
}

export{
    createHomePage,container,homePageHeading,magicWords
}