function cambioPepito(){
    document.getElementById("pepito").innerHTML = "Hello World!!!!"
    document.getElementById("pepito").style.color="red"
    document.getElementById("pepito").style.fontSize="40px"
    document.getElementById("pepito").style.fontWeight="bold"
}
function cambioTitulo(){
    document.getElementById("texto").innerHTML = "Otro título"
}
document.getElementById("texto").innerHTML = " ¡¡¡Este es mi nuevo título!!!"
/*x=3+1;
y=2+5;
z=x+y
console.log(z);*/
nombre = "Gabriela";
edad = 8;
console.log("hola " + nombre + " tienes más de " + edad  + " años");
document.getElementById('boton').addEventListener('click',cambioPepito);
document.getElementById('boton2').addEventListener('click',cambioTitulo);


let a = 9;
let b = 7;

function suma(){
    let operandoA= 2, operandoB = 5;
    let resultado = operandoA + operandoB;
    a = 69;
    console.log(resultado);
}
let operandoA = 3;
const z = 23;

const paises = ["Colombia", "Perú", "Brasil"]
console.log(paises[1]);
paises[1] = "Ecuador"
console.log(paises);
paises.push="Panamá";
console.log(paises);

document.getElementById('sumar').addEventListener('click', suma)

const automovil = {marca:"Fiat", modelo: 2024, color: "Azul", dueño: "Juan", vendido: false };
const automovil2 = {marca:"Mazda", modelo: 2010, color: "Gris", dueño: "Carlos", vendido: true };
const autos = [automovil,automovil2]
console.log(autos);
console.log(automovil);
console.log(automovil.color);
automovil.color = "Rojo"
console.log(automovil.color);
automovil.kilometraje = 300;
console.log(automovil);

const parte1 = "Hola ";
const parte2 = "mundo"

const frase = parte1 +  parte2
console.log(frase);

const numeroA = 15;
const numeroB = 16;
const resultado = numeroA + numeroB;
console.log(resultado);

