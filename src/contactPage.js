import {menuPageContainer,homePageContainer,container} from './menuPage' 

const contactPageContainer = document.createElement('div');contactPageContainer.className="orderPgCont"
const form = document.createElement('form');
function createFormInput(id,type,labelName,placeholder=labelName,For=id){
    const p = document.createElement('p');//container for lbl and inpt
    const label = document.createElement('label');
    let input = document.createElement('input');
    if(type=='number'||type=='tel'){
        input.setAttribute('maxlength','10'); 
    }

    if(type=='textarea'){
       input = document.createElement('textarea');
       console.log('tr')
    }

    
    label.textContent = labelName;
    
    input.setAttribute('id', id); 
    input.setAttribute('type',type);
    input.setAttribute('placeholder', placeholder);
    p.append(label,input);p.className='formInputField'
    return {cont:p,input:input}
// You
}
const nameField = createFormInput('name','text','Name');
const phoneNumberField = createFormInput('tel','tel','Phone NO');
const foodName = createFormInput('food','text','Recipe Name',"anythng for u🥰 ");
foodName.input.value = "biryani";
const addressField = createFormInput('address','textarea','Address',)
const submintBtn = document.createElement('button');
submintBtn.textContent = 'SUBMIT'; 
form.className='formContainer';


submintBtn.addEventListener('click',()=> {
    afterSubmitting();
    event.preventDefault();
    
})

function creatConatactPage(){  
    document.body.classList.add('menuPageBgImg');
    document.body.classList.remove('homePageBgImg');

    form.remove(); menuPageContainer.remove();homePageContainer.remove();
    form.append(nameField.cont,phoneNumberField.cont,foodName.cont,addressField.cont,submintBtn);
contactPageContainer.append( form);
container.append(contactPageContainer);
}  
let orderStatus;
function afterSubmitting(){
       if(orderStatus!=undefined ){orderStatus.remove();}
     orderStatus = document.createElement('orderStatus');orderStatus.setAttribute('style','width = 300px')
    orderStatus.textContent = `YOUR FAV ${foodName.input.value} IS BIENG COOKD IN THE FIRE HERE`;  
    contactPageContainer.appendChild(orderStatus);
}
export{
    creatConatactPage,contactPageContainer
}