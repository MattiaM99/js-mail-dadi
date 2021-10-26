//1. generare al giocatore un numero da 1 a 6
//2. generare un numero da 1 a 6
//3. chi ha il numero più alto vince

const randomNum =Math.floor((Math.random()*6)+1);
console.log ( Math.floor(Math.random()*6)+1);
document.getElementById('numero1').innerHTML = "il tuo numero è " + randomNum;

const randomNumComp = Math.floor((Math.random()*6)+1);
console.log ( Math.floor(Math.random()*6)+1);
document.getElementById('numero2').innerHTML = "il numero del computer è " + randomNumComp;

if (randomNum > randomNumComp) {
  document.getElementById('risultato').innerHTML = "hai vinto"
}
else{
  document.getElementById('risultato').innerHTML = "hai perso"
}

