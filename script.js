// initialisation des variables
const input = document.getElementById('input');
const form = document.querySelector('form');
const resetCalc = document.getElementById('reset');
const clearCalc = document.getElementById('clear');
const buttons = document.querySelectorAll('.numpad');
const equalCalc = document.getElementById('equals');
const toggleSign = document.getElementById('plusoumoins');
const calculate = document.getElementById('calcul');
const operatorsButtons = document.querySelectorAll('#plus, #times, #divideby, #minus');
const percentageButton = document.getElementById('percentage');


const historique = () =>{

  
}


const resultat = ()=>{
  if(eq == true && pr == true){
    calculate.innerText += ' '+input.value;
  }
    for(let i of calculate.innerText){
      if(i == '÷'){
        calculate.innerText = calculate.innerText.replace('÷', '/');
      }
      if(i == '×'){
        calculate.innerText = calculate.innerText.replace('×', '*');
      }
     }
    // s'il ne pas un nbre on supprime le dernier element
    if(isNaN(calculate.innerText.slice(-1)) == true){
    calculate.innerText = calculate.innerText.slice(0,-1)
    }

    let rep = eval(calculate.innerText);
    return rep;
  } 
let eq = true;
equalCalc.addEventListener('click', ()=>{
  if(eq == true){
    input.value =  resultat();
    calculate.textContent += ' = ';
    eq = false
    pr = true
  }
} )
let pr=true;
percentageButton.addEventListener('click', ()=>{
  if(pr == true){
    input.value =  resultat() / 100;
    calculate.textContent += ' = ';
    pr = false
    eq = true
  }
})

// Écouteur d'événement sur le formulaire et on bloque la soumittion 
form.addEventListener('submit', (e) => {
  e.preventDefault();
})
// Empecher l'entrée sur l'orsqu'on appuis sur le clavier
input.addEventListener('keydown', (e) => {
  e.preventDefault();
})
// Ecouteur d'événement sur le button plus ou moin
toggleSign.addEventListener('click', () => {
  // inverse le signe de la valeur de l'entrée
  input.value = -input.value;
})
// Écouteur d'événement sur le bouton resetClick
resetCalc.addEventListener('click', () => {
  input.value = '';
  calculate.innerHTML = '';

})

clearCalc.addEventListener('click', () => {
  // Supprime le dernier caractère de l'entrée
  input.value ="";
  
})

// Parcourir les bouttons de chiffres
for (const button of buttons) {
  // Écouteur d'événement pour les boutons de chiffres
  button.addEventListener('click', () => {
    if (input.value.length > 10) {
      input.value = input.value.slice(0, 10);
    }
    checkInput(button.innerHTML);
  })
}


// vérification des inputs
function checkInput(chiffre){
  if(eq==false){
    eq = true;
  }
  if(chiffre == '0'){
    if(input.value != '0'){
      input.value += chiffre;
    }
  }
  else if(chiffre == '.'){
    if(input.value.includes('.') == false){
      input.value += chiffre;
    }
  }
  else{
    input.value += chiffre;
  }
}
// on parcour les boutton des opérateurs
for (const operatorButton of operatorsButtons) {
  // Écouteur d'événement sur les boutons des opérations
  operatorButton.addEventListener('click', () => {
    if(calculate.textContent ==''){
      calculate.textContent += input.value +' '+ operatorButton.textContent;
    }
else if(( calculate.textContent !='' && input.value =='') && isNaN(calculate.textContent.slice(-1))==true) { 
  calculate.textContent = calculate.textContent.slice(0,-1) +' '+ operatorButton.textContent
}
   else{
    if(calculate.textContent.includes('=')==true){
      calculate.textContent = input.value +' '+ operatorButton.textContent;
    }else{
      calculate.textContent += ' '+ input.value +' '+ operatorButton.textContent;
    }
   }
   input.value =''
  });
}