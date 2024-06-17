function ejecutar(){
    let numero=parseInt(document.getElementById('numero').value)
    let i = 5;
    for(let i=5;i<10;i++){
        numero=numero+i;
        if(i==6){break;}
        //console.log("resultado: " + numero);
        console.log("iteración: " + i);
    }
    document.getElementById('salida').innerHTML=i;
}


function arregloFrutas(){
    const frutas = ["manzana", "pera", "limón", "mango"];
    let frutero = "";
    for(let contador in frutas){
        frutero=frutero + frutas[contador]+"<br>"
    }
    document.getElementById('salida').innerHTML=frutero;
}
let resultado = "";

function arregloFrutas2(){
    const frutas = ["manzana", "pera", "limón", "mango"];
    frutas.forEach(concatenacion)
}

function concatenacion(entrada){
    resultado = resultado + entrada + "<br>"
    document.getElementById('salida').innerHTML = resultado
}

function multiplos(){
    let numero = parseInt(document.getElementById('numero').value);
    if(numero%3==0){
        document.getElementById('salida').innerHTML = "número es divisible entre 3"
    } else{
        document.getElementById('salida').innerHTML = "número no es indivisible entre 3"
    }
}

function divisible(){
    let divisores ="";
    let numero=parseInt(document.getElementById('numero').value);
    for(let i= 1; i<numero; i++){
        if(numero%i==0){
            divisores=divisores+i + " ";
            console.log("divisores: " + divisores);
        }
    }
    document.getElementById('salida').innerHTML="número es divisible entre " +divisores;
}

/*function numeroPrimo(){
    let numero=parseInt(document.getElementById('numero').value);
    if(numero%2==0){
        document.getElementById('salida').innerHTML = "no es primo"
    } else if(numero%3==0){
        document.getElementById('salida').innerHTML = "no es primo"
    } else if(numero%5==0){
        document.getElementById('salida').innerHTML = "no es primo"
    } else{
        document.getElementById('salida').innerHTML = "es primo"
    }
   
} */

function numeroPrimo(){
    let numero = parseInt(document.getElementById('numero').value);
    for(let i=2;i<numero;i++){
        if(numero%i==0){
            document.getElementById('salida').innerHTML="número no es primo";
            break;
        }
        document.getElementById('salida').innerHTML="número es primo"
    }
}

function enumeracion(){
    let numero=parseInt(document.getElementById('numero').value)
    let numeros ="";
    for(let i=0;i<numero;i++){
        if(i%2==0){
            continue;
        }
        numeros=numeros+i+"<br>"
        document.getElementById('salida').innerHTML=numeros;
        
    }
}
function mientras(){
    let numero = parseInt(document.getElementById('numero').value);
    let i = 0;
    let resultado = "";
    while(i<numero){
        resultado=resultado+i+"<br>";
        i++
    }
    document.getElementById('salida').innerHTML=resultado;
}

function hacerMientras(){
    let numero = parseInt(document.getElementById('numero').value);
    let i = 0;
    let resultado = "";
    do{
        resultado=resultado+i+"<br>";
        console.log(resultado);
        i++;
    }while(i<numero)
        document.getElementById('salida').innerHTML=resultado
}
function ordenar(){

    const arreglo = [4,70,8,3,2,9,10,15];
    const arreglo_auxiliar =[]
    let menor = arreglo[0];
    for(let i=0;i<8;i++){
        if(arreglo[i]<menor){
        }
        menor =arreglo[i]
    }
}



document.getElementById('boton').addEventListener('click', hacerMientras)