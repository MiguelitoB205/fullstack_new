let numA,numB,resultado;

function obtenerValores(){
    document.getElementById('advertencia').style.display="none"
    numA = parseFloat(document.getElementById('operandoA').value)
    console.log(numA);
    numB = parseFloat(document.getElementById('operandoB').value)
    console.log(numB);
}

function sumar(A,B){
    let res;
    res = A+B;
    return res
}
function restar(A,B){
    let res;
    res = A-B;
    return res
}
function multiplicar(A,B){
    let res;
    res = A*B;
    return res
}

function dividir(A,B){
    let res;
    res = A/B;
    return res
}

function desplegarResultado(resultado){
    document.getElementById('resultado').value=resultado
}

function operarSuma(){
    obtenerValores();
    resultado=sumar(numA,numB);
    desplegarResultado(resultado)
}
function operarResta(){
    obtenerValores();
    resultado=restar(numA,numB);
    desplegarResultado(resultado)
}
function operarMultiplicacion(){
    obtenerValores();
    resultado=multiplicar(numA,numB);
    desplegarResultado(resultado)
}

function operarDivision(){
    obtenerValores();
    if(numB===0){
        desplegarResultado("Error")
        document.getElementById('advertencia').style.display="block"
        document.getElementById('advertencia').innerHTML="Operando B no puede ser cero"
        alert('No se puede dividir entre cero')
        
    }else{
    resultado=dividir(numA,numB);
    desplegarResultado(resultado)
    }
}
document.getElementById('botonSumar').addEventListener('click', operarSuma)
document.getElementById('botonRestar').addEventListener('click', operarResta)
document.getElementById('botonMultiplicar').addEventListener('click', operarMultiplicacion)
document.getElementById('botonDividir').addEventListener('click', operarDivision)

/************************ */
function operar(){
let operacion = document.getElementById('selectorOperacion').value;
console.log(operacion);
obtenerValores();

if(operacion=="sumar"){
    resultado=sumar(numA, numB)
} else if(operacion=="restar"){
    resultado=restar(numA,numB)
} else if(operacion=="multiplicar"){
    resultado=multiplicar(numA,numB)
} else if(operacion=="dividir"){
    resultado=dividir(numA,numB)
} else{
    resultado = "Operación no válida"
}

desplegarResultado(resultado);
}

function operar2(){
    let operacion = document.getElementById('selectorOperacion').value;
    console.log(operacion);
    switch(operacion){
        case "sumar":
             resultado = sumar(numA, numB);
            break;
        case "restar":
            resultado = restar(numA,numB);
            break;
        case "multiplicar":
            resultado = multiplicar(numA,numB);
            break;
        case "dividir":
            resultado = dividir(numA,numB);
            break;
        default:
            resultado = "Operación no válida"
    }
    desplegarResultado(resultado);
}

function operar3(){
    let operacion = document.getElementById('selectorOperacion').value;
    switch(operacion){
        case "sumar":
            operarSuma();
            break;
        case "restar":
            operarResta();
            break;
        case "multiplicar":
            operarMultiplicacion();
            break;
        case "dividir":
            operarDivision();
            break;
        default:
            resultado = "Operación no válida"

    }
}

document.getElementById('botonOperar').addEventListener('click', operar3)
