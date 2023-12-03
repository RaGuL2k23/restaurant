
import kichadiImg from '../images/kichadi.png';
import biryaniImg from '../images/biryani.png';
import tiffenImg from '../images/typical-indian-breakfast.png';
import { container,homePageContainer } from './homePage';
import { contactPageContainer} from './contactPage';

const menuPageContainer = document.createElement('div');
const h1 = document.createElement('h1');
menuPageContainer.setAttribute('class','menuPageContainer');
h1.textContent= "menu page";


function createRecipContainer(recipeName,className = recipeName){      
    recipeName = document.createElement('div');
     recipeName.className= className;
      return recipeName; 
  } 
function createDescription(descrip){
    let h2 = document.createElement('h2');
    h2.textContent=descrip;
    return h2;
  }

  
  
 //creating menu items 
const kichadi = createRecipContainer('kichadi');
const myKichadiImg = new Image();
myKichadiImg.src = kichadiImg;  
 
const kichadiDescription = createDescription("Khichdi is a healthy Indian dish made with rice and moong lentils 💪. ");
const myBiryaniImg = new Image();
myBiryaniImg.src = biryaniImg;
const biryaniDescription = createDescription('Biryani is there a need to say about this ?! \nGo tast it🔥')
const tiffen = createRecipContainer('tiffen');
const myTiffenImg = new Image();
myTiffenImg.src = tiffenImg;
const tiffenDescription = createDescription('Taste  the typical indian tiffen with mouth tasting bury , dosa , pongal , vada and more😋');
const biryani = createRecipContainer('biryani' );
//end of menu items 
function createMenuPage(){ //fn to be exported
    document.body.classList.add('menuPageBgImg');
    document.body.classList.remove('homePageBgImg');//chaning background of menu and home
   
    

   contactPageContainer.remove(); menuPageContainer.remove();homePageContainer.remove();
     
  kichadi.append(myKichadiImg,kichadiDescription);

 
 
  biryani.append(myBiryaniImg,biryaniDescription)
  
 
  tiffen.append(myTiffenImg,tiffenDescription);

  menuPageContainer.append(h1,kichadi,tiffen,biryani);
  container.append(menuPageContainer)
}

export{
    createMenuPage,menuPageContainer,homePageContainer,contactPageContainer,container
}