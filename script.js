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

const form = document.querySelector('form');

const calculButton = document.getElementById('calcul');
// ecouteur d'evenement sur le form et on bloc la soumittion automatique du formulaire
form.addEventListener('click', (e) => {
  e.preventDefault();
})

// on parcour touts le button numérique
for (let i = 0; i < numTouch.length; i++) {
  numTouch[i].addEventListener('click', () => {
    inputValue.value += numTouch[i].innerText;
    // on affiche le calcul au dessus de l'opération
    calculButton.innerText += numTouch[i].textContent;
  })
}

// E
acButton.addEventListener('click', () => {
  inputValue.value = '';
  calculButton.innerText = '';

})