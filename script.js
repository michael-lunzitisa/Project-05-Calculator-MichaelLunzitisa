//{ calculate } import './calculator';

// TODO: Faire la manipulation du DOM dans ce fichier

// initialisation des variables
const input = document.getElementById('input');
const form = document.querySelector('form');
const resetClick = document.getElementById('reset');
const clearClick = document.getElementById('clear');
const buttons = document.querySelectorAll('.numpad');
const equalClick = document.getElementById('equals');
const toggleSign = document.getElementById('plusoumoins');
const calculate = document.getElementById('calcul');
const operatorsButtons = document.querySelectorAll('#plus, #times, #divideby, #minus, #percentage');








// Écouteur d'événement sur le formulaire et on bloque la soumittion 
form.addEventListener('click', (e) => {
    e.preventDefault();
  })