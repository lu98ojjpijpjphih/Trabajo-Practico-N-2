//Escribe un programa que compare dos números y muestre un mensaje indicando cuál es el mayor.

let Numero1 = Number (prompt("Ingrese un núumero"))
let Numero2 = Number (prompt("Ingrese un segundo número"))
if (Numero1 > Numero2 ) {
    alert ("El Número  1 es el mayor")
} else {
    alert ("El Número 2 es el mayor")
}

//Crea un programa que determine si un número es positivo, negativo o cero.


let Numero = 7
if (Numero > 0 ) {
    alert(Numero + 'es un numero positivo')
} else if (Numero < 0) {
    alert(Numero + 'es un numero negativo')
} else if (Numero = 0){
    alert('El numero es 0')
}

//Escribe un programa que verifique si un número es par o impar.

let Num = 7
if (Num % 2 === 0) {
    alert(Num + 'es un numero par')
} else {
    alert( Num + 'es impar')
}

//Crea un programa que solicite la edad del usuario y muestre un mensaje indicando si es mayor de edad o no

let año = prompt ("Ingrese su edad")
if (año >= 18) {
    alert ("Usted es mayor de edad")
} else {
    alert ("Usted es menor de edad")
}




//Crea un programa que solicite un número del 1 al 7 y muestre el día de la semana correspondiente.

let NUMERO = Number (prompt('ingresa por favor un numero del uno al 7'))   

if (NUMERO == "1") {
    alert ("lunes")
}else if (NUMERO == "2") {
    alert ("Martes")
}else if (NUMERO == "3"){
    alert ("Miercoles")
}else if (NUMERO == "4"){
    alert ("Juves")
}else if (NUMERO == "5"){
    alert ("Viernes")
}else if (NUMERO == "6"){
    alert ("Sabado")
}else {
    alert ("Domingo")
}


//Crear un programa que verifique si un número ingresado por el usuario es divisible por 3 y por 5.

let N = prompt('ingresa un numero por favor')

if ((N % 3 === 0) && (N % 5 === 0)) {
    alert(N + 'es divisible por tres y cinco')
} else {
   alert(N + 'no es divisible ni por tres y cinco') 
}

//Desarrollar un programa que determine si un número ingresado por el usuario es positivo y menor que 100.


let numero = Number (prompt('ingresa por favor un numero que sea positivo y menor que 100'))


if ((numero > 0) && (numero < 100)) {
    alert(  numero + 'es positivo y menor que 100')
} else {
    alert(numero + 'es negativo y es mayor que 100')
}

/*Escribir un programa que solicite al usuario su edad y su género, y determine si es elegible para jubilarse,
considerando que debe tener al menos 65 años si es hombre y al menos 60 años si es mujer.*/


let Edad = Number (prompt("Ingrese su edad, por favor"))
let Genero = prompt ("Ingrese su género")


if (Edad >= 60 ) & (Genero = Mujer) || (Edad >= 65) & (Género = Hombre) {
    alert ("Eres elegible para poder jubilarte")
} else {
    alert ("Aún no puede jubilarse")
}


//Crear un programa que solicite al usuario tres números y determine si al menos dos de ellos son iguales

let N1 = Number (prompt("Ingrese un número"))
let N2 = Number (prompt("Ingrese un segundo número"))
let N3 = Number (prompt("Ingrese el tercer número"))


if (N1 = N2) || (N2 = N3) || (N3 = N1) {
    alert ("Dos número de los ingresados son iguales")
} else {
    alert ("Ninguno de los números ingresados son iguales")
}



/*Desarrollar un programa que determine si un número ingresado por el usuario es divisible
por 4 y por 6, o si es divisible por 9 y por 12.*/

let num = prompt("Ingresa un número")

if ((num % 4 === 0 ) && (num % 6 === 0) || (num % 9 === 0 && num % 12 === 0)) {
    alert("El número " + num + " cumple con las condiciones");
} else {
    alert("El número " + num + " no cumple con las condiciones");
}

//Escribir un programa que solicite al usuario tres edades y determine si al menos una de ellas es mayor que 18 años

let Edad1 = Number(prompt ("Ingrese una edad"))
let Edad2 = Number(prompt ("Ingrese una segunda edad"))
let Edad3 = Number(prompt ("Ingrese una tercera edad"))

if (Edad1 >= 18 ) || (Edad2 >= 18 ) || (Edad3 >= 18) {
    alert ("Una de las edades ingresadas es mayor")
} else {
    alert (" Ninguna de las edades ingresadas es mayor de 18")
}
