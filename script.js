
let inicio = prompt("Ingrese un numero del 1 al 6");

if (inicio == 1){
        numero();

    } 

if (inicio == 2){
        caballo();

    }   

if (inicio == 3){
        promedio();

    }   

if (inicio == 4){
        frutas();

    }         

    
if (inicio == 5){
        contar();

    }         
           






/* /* 1 */
function numero() {
    

   var numero = prompt("Ingrese un numero del 1 al 100");
   for(let i = 1; i <= 100;i++){
       if (i == numero){
           break;
       }
    }
    console.log(i);

}

/* 2 */
function caballo() {
    

let pregunta = prompt("¿De qué color es el caballo blanco de Napoleón?");

let blanco = "blanco";

while (pregunta5 != blanco){
pregunta = prompt("¿De qué color es el caballo blanco de Napoleón?");

if (pregunta === blanco)
break;
}
  
}




/* 3 */
function promedio() {
    

var prom1 = parseFloat (prompt ("Ingrese su promedio en Matemáticas"));
var prom2 = parseFloat (prompt("Ingrese su promedio en Física"));
var prom3 = parseFloat (prompt ("Ingrese su promedio en Ciencias"));
var promedio = (prom1 + prom2 + prom3)/3;

alert ("Su promedio total es " + promedio);
}



/* 4 */
 function frutas() {
     

let fruta = [prompt ("Ingrese la primera fruta" ), prompt ("Ingrese la segunda fruta" ),("Ingrese la tercera fruta" );]


}


function contar(){  

let nombre = prompt ("Escriba su nombre");
var numeroVocales = nombre.match(/[aAeEiIoOuU]/gi).length;
var numeroconsonantes = nombre.match(/[BbCcDdFfGgHhJjKkLlMmNnÑñPpQqRrSsTtVvWwXxYyZz]/gi).length;
alert( "Su nombre tiene" + numeroVocales +" y tiene" + numeroconsonantes + "consonantes" );
}