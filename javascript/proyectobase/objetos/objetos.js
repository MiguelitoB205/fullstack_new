//const prompt = require('prompt-sync')();
class Persona{
    constructor(nombre, edad){
        this.nombre=nombre;
        this.edad=edad;
    }
    
    saludar(){
        const mensaje=`Hola, soy ${this.nombre} y tengo ${this.edad} años`;
        return mensaje
        //console.log('Hola, soy ' + this.nombre + ' y tengo ' + this.edad + ' años');
    }
}



class Estudiante extends Persona{
    constructor(nombre,edad,curso){
        super(nombre,edad)
        this.curso=curso
    }
  
    saludoEstudiante(){
        const mensaje = `Hola soy ${this.nombre} y tengo ${this.edad} añosy estoy cursando ${this.curso}`
        console.log("Hola, soy " + this.nombre + " y tengo " +this.edad + " años y estoy cursando " + this.curso  );
        return mensaje;
    }
}

const estudiante1=new Estudiante("Pedro",23,"programación")
const estudiante2=new Estudiante("María",25,"diseño")

console.log(estudiante1.saludar());
console.log(estudiante1.saludoEstudiante());
console.log(estudiante1.nombre);
console.log(estudiante1.edad);
console.log(estudiante1.curso);

// polimorfismo 

class Animal{
    constructor(nombre){
        this.nombre=nombre
    }
    hacerSonido(){
        return "El animal hace ruido"
    }
}

class Perro extends Animal{
    constructor(nombre,raza) {
        super(nombre)
        this.raza=raza
    }
    hacerSonido(){
        return "Guau guau"
    }
}
class Gato extends Animal{
    constructor(nombre,raza) {
        super(nombre)
        this.raza=raza
    }
    hacerSonido(){
        return "Mio mio"
    }
}

const paco = new Perro("Paco","Labrador")
console.log(paco.hacerSonido());

const guarapo = new Gato("Guarapo", "Persa")
console.log(guarapo.hacerSonido());


const persona1 = new Persona("Juan",23);
const persona2 = new Persona("María",25);

persona1.saludar()
persona2.saludar()

persona1.nombre="Pedro";
persona1.edad=30;
persona1.saludar()

function crearPersona(){
    let nombre=document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    const persona3 = new Persona(nombre, edad)
    const saludo=persona3.saludar();
    //document.getElementById("salida").textContent=saludo;
    document.getElementById("salida").innerHTML=saludo;
}

document.getElementById('ejecutar').addEventListener('click', crearPersona)
