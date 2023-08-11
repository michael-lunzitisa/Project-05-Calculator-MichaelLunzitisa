//{ calculate } import './calculator';

// TODO: Faire la manipulation du DOM dans ce fichier

// initialisation des variables
const inputValue = document.getElementById('input');
const acButton = document.getElementById('reset');
const clearButton = document.getElementById('clear');
const numTouch = document.querySelectorAll('.numpad');

// initialisation des variables des opération
const moinButton = document.getElementById('minus');
const addButton = document.getElementById('plus');
const mulButton = document.getElementById('times');
const divButton = document.getElementById('divideby');
const equalsButton = document.getElementById('equals');
const percentageButton = document.getElementById('percentage');
const plusoumoinsButton = document.getElementById('plusoumoins');


addButton.addEventListener('click', ()=>{
  inputValue.value +='+';
  calculButton.innerHTML += inputValue.value;
})
moinButton.addEventListener('click', ()=>{
  inputValue.value +='-';
  calculButton.innerHTML += inputValue.value;
})

mulButton.addEventListener('click', ()=>{
  inputValue.value +='x';
  calculButton.innerHTML += inputValue.value;
})

divButton.addEventListener('click', ()=>{
  inputValue.value +='÷';
  calculButton.innerHTML += inputValue.value;
})

equalsButton.addEventListener('click', ()=>{
  inputValue.value +='=';
  calculButton.innerHTML += inputValue.value;
})




const form = document.querySelector('form');

const calculButton = document.getElementById('calcul');
// ecouteur d'evenement sur le form et on bloc la soumittion automatique du formulaire
form.addEventListener('click', (e) => {
  e.preventDefault();
})

// lorque on clique sur button AC on reset
acButton.addEventListener('click', () => {
  inputValue.value = '';
  calculButton.innerText = '';

})
// on parcour touts les button numérique
for (let i = 0; i < numTouch.length; i++) {
  numTouch[i].addEventListener('click', () => {
    inputValue.value += numTouch[i].innerText;
    // on affiche le calcul au dessus de l'opération
    calculButton.innerText += numTouch[i].textContent;
  })
}


