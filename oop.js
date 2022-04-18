/* 
    Abstraccion
    Encapsulamiento
    Herencia
    Polimorfismo
*/

/* 
Ciudades = Ciudad
Arboles = Arbol
Personas = Persona


Persona
    Nombre
    Edad
    Apellido
    Rut
    Genero
    Peso

    hablar
    correr
    caminar
    nadar
 */
class Persona {
    nombre;
    apellido;
    edad;
    rut;
    genero;
    peso;

    constructor(nombre, apellido, edad, rut, genero, peso){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.rut = rut;
        this.genero = genero;
        this.peso = peso;
    }

    hablar = function(){
        console.log('Hablar Persona');
    }
    correr = function(){}
    caminar = function(){}
    nadar = function(){}
}

class Estudiante extends Persona {
    grado;
    facultad;

    constructor(nombre, apellido, edad, rut, genero, peso){
        super(nombre, apellido, edad, rut, genero, peso);
    }

    estudiar = function(){}
    hablar = function(){
        console.log('Hablar Estudiante 1')
    }
    hablar = function(string){
        console.log('Hablar Estudiante 2')
    }
}

class Profesor extends Estudiante {

}

console.log(Persona);
console.log(Estudiante);

let persona = new Persona("Pedro", "Perez");
persona.nombre = "Santiago";
persona.hablar();

console.log(persona);

let estudiante = new Estudiante("Anyelina", "Paredes", "28", "12345678-9", "Femenino", "85");
estudiante.hablar();
console.log(estudiante);
