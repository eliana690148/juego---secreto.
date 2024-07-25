//Variables
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1; 
let numeroUsuario = 0; 
let intentos = 1; 
//let palabrasVeces = 'vez';
let maximosIntentos = 6; 


while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`me indicas un nùmero entre 1 y ${numeroMaximoPosible} por favor:`));
    
    console.log((typeofnumeroUsuario));
    if (numeroUsuario == numeroSecreto) {
      //Acertamos, fue verdadera la condiciòn
      alert(`Acertaste, el nùmero es: ${numeroUsuario} Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' :'veces' }`); 
    } else {
      if (numeroUsuario > numeroSecreto){
        alert ('El nùmero secreto es menor');
      }else{
        alert('El nùmero secreto es mayor');
      }
      //Incrementamos el contador cuando no acierta
      //intentos = intentos + 1; 
      //intentos += 1;
      intentos ++;
    
      //palabrasVeces = 'veces';
      if (intentos > maximosIntentos) {
        alert (`llegaste al nùmero màximo de ${maximosIntentos} intentos`);
        break;
      }
      //La condiciòn no se cumpliò
      //alert ('Lo siento, no acertaste el nùmero'); 
    }
  }