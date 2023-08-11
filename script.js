//{ calculate } import './calculator';

// TODO: Faire la manipulation du DOM dans ce fichier

// initialisation des variables
const inputValue = document.getElementById('input');
const acButton = document.getElementById('reset');
const numTouch = document.querySelectorAll('.numpad');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');
const plusoumoinsButton = document.getElementById('plusoumoins');


for (let i = 0; i < numTouch.length; i++) {
    numTouch[i].addEventListener('click', ()=>{
        inputValue.value +=numTouch[i].innerText;
    })
}


acButton.addEventListener('click',()=>{
     inputValue.value='';
    
})