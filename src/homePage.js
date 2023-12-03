

import { menuPageContainer,contactPageContainer } from './menuPage'; 

const container = document.querySelector('.con');
const homePageHeading = document.createElement('h1');
const magicWords = document.createElement('h2');
const homePageContainer = document.createElement('div');
function createHomePage() {
      
        menuPageContainer.remove();
        homePageContainer.remove();contactPageContainer.remove();
        document.body.classList.add('homePageBgImg');
        document.body.classList.remove('menuPageBgImg');
        homePageHeading.textContent="Rocky's food court";
        homePageHeading.setAttribute('class','heading');
        magicWords.textContent="Come and end your impossible cravings";
        magicWords.setAttribute('class','words');
        homePageContainer.append(homePageHeading,magicWords);
        container.append(homePageContainer)
}

export{
    createHomePage,container,homePageContainer,menuPageContainer
}