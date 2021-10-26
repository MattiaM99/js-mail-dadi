//1. creare una lista di mail
//2. chiedere all'utente la mail
//3. se autorizzato, procedere

//1.
const mailList = [
'mail1@gmail.com',
'mail3@gmail.com',
'mail4@gmail.com',
'mail5@gmail.com',
'mail6@gmail.com',
'mail7@gmail.com',
'mail8@gmail.com',
'mail9@gmail.com',
'mail10@gmail.com',
'mail11@gmail.com',
'mail12@gmail.com',
'mail13@gmail.com',
'mail14@gmail.com',
'mail15@gmail.com',
'mail16@gmail.com',
'mail17@gmail.com',
'mail18@gmail.com',
'mail19@gmail.com',
]

//2. 
let mail = prompt ('qual è la tua mail?');
console.log(mail);

//3.
for (let i=0; i < mailList.length; i++){
  if(mailList[i] === mail){
    console.log('mail trovata')
    document.getElementById("mail").innerHTML = "sei autorizzato a procedere, benvenuto " + mail;
  }
  else{
    console.log('mail non trovata')
    document.getElementById("mail").innerHTML = "autorizzazione negata, inserire mail corretta";
  }
}