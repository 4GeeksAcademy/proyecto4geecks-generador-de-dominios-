import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.getElementById('excuse').addEventListener('click', generadorDominio);
  
  console.log("Hello Rigo from the console!");
};




let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
  
function generadorDominio() {
  let dominio = [];
   for(let itp = 0; itp < pronoun.length; itp++){
      for(let ita = 0; ita < adj.length; ita++){
        for(let itn = 0; itn < noun.length; itn++){
          dominio.push(`<br>${pronoun[itp]}${adj[ita]}${noun[itn]}.com`);
          console.log(dominio);
           
        }
      }
    }
    document.getElementById("excuse").innerHTML = dominio;
  }
 

   //  FORMA RESUMIDA
   /* let pronoun = ['the', 'our'];
   let adj = ['great', 'big'];
   let noun = ['jogger', 'racoon'];
   pronoun.forEach(p=>
     adj.forEach(a=>
       noun.forEach(n=>
         console.log(p+a+n + ".com")
       )
     )
   )   */