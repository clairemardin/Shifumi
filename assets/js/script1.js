//Variables

let player1;
let ia;
let playerChoice ;
let iaChoice ;
console.log (iaChoice);
// let msg = document.querySelector('#msg')
let msg = ''



//Evenements
btn1.addEventListener('click', () => {
    playerChoice = 1
    let iaChoiceStr = Math.floor(Math.random() * 3+1);
    console.log (iaChoice)
    if  (playerChoice==iaChoiceStr){ 
        // msg.innerHTML = 'Egalité';
        msg = 'Egalité'

    }else if
        (iaChoiceStr==3){
        msg = 'Victoire';
    } else {
        msg = 'Défaite';
    } 
    switch (iaChoiceStr) {
        case 1: 
        iaChoiceStr =   'pierre'
            break;
        case 2: 
        iaChoiceStr =   'feuille'
            break;
        case 3: 
        iaChoiceStr =   'ciseaux'   
        break
        default:
            break;     
    }
    
    document.getElementById('rst').innerHTML=`Vous avez choisi la pierre et pc ${iaChoiceStr} : ${msg} !`
});

btn2.addEventListener('click', () => {
    playerChoice = 2 
   let iaChoiceStr = Math.floor(Math.random() * 3+1);
    console.log (iaChoice)
    if  (playerChoice==iaChoiceStr){ 
        msg= 'Egalité';
    }else if
        (iaChoiceStr==1){
        msg = 'Victoire';
    } else {
        msg = 'Défaite';
    }
    switch (iaChoiceStr) {
        case 1: 
        iaChoiceStr =   'pierre'
            break;
        case 2: 
        iaChoiceStr =   'feuille'
            break;
        case 3: 
        iaChoiceStr =   'ciseaux'   
        break
        default:
            break;     
    }
    
    document.getElementById('rst').innerHTML=`Vous avez choisi la feuille et le pc ${iaChoiceStr} : ${msg} !`
});

btn3.addEventListener('click', () => {
    playerChoice = 3
  let  iaChoiceStr = Math.floor(Math.random() * 3+1);
    console.log (iaChoice)
    if  (playerChoice==iaChoiceStr){ 
        msg = 'Egalité';
    }else if
        (iaChoiceStr==2){
        msg = 'Victoire';
    } else {
        msg = 'Défaite';
    }

switch (iaChoiceStr) {
    case 1: 
    iaChoiceStr =   'pierre'
        break;
    case 2: 
    iaChoiceStr =   'feuille'
        break;
    case 3: 
    iaChoiceStr =   'ciseaux'   
    break
    default:
        break;     
}

    document.getElementById('rst').innerHTML =`Vous avez choisi ciseaux et le pc ${iaChoiceStr} : ${msg} !`
   
});

