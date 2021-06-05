// Ejercicio 1
function Ejercicio1() {
  const num1 = 2;
  const num2 = 3;
  suma = num1 + num2;
}
Ejercicio1();
console.log("La suma es " + suma);
// Ejercicio 2
function Ejercicio2() {
  const exa1 = 15;
  const exa2 = 16;
  const exa3 = 18;
  const exa4 = 09;
  promedio = (exa1 + exa2 + exa3 + exa4) / 4;
}
Ejercicio2();
console.log("El promedio es:" + Math.round(promedio));
// Ejercicio 3
function Ejercicio3() {
  const base = 10;
  const altura = 20;
  Area = base * altura;
}
Ejercicio3();
console.log("El area de un rectangulo es:" + Area);
// Ejercicio 4
function Ejercicio4() {
  const base = 10;
  const altura = 15;
  Area = (base * altura) / 2;
}
Ejercicio4();
console.log("El area de un triangulo es " + Area);
// Ejercicio 5
function Ejercicio5() {
  const radio = 5;
  const PI = 3.141592653589793;
  Area = Math.PI * (radio * radio);
}
Ejercicio5();
console.log("El area de la Circunferencia es:" + Area);
// Ejercicio 6

// Ejercicio 7
function Ejercicio7() {
  const metros = 10;
  const pulgadas = 0.0254;
  convertir = metros * pulgadas;
}
Ejercicio7();
console.log("Las pulgadas son: " + convertir);
// Ejercicio 8
function Ejercicio8() {
  const monedaPeruana = 20;
  const monedaDolar = 3.81;
  dolares = monedaPeruana / monedaDolar;
}
Ejercicio8();
console.log("La cantidad de dolares es :" + Math.round(dolares));
// Ejercicio 9
function Ejercicio9() {
  const añoNacimiento = 1998;
  const añoActual = 2021;
  años = añoActual - añoNacimiento;
}
Ejercicio9();
console.log("Los años que tienen son:" + años);
// Ejercicio 10
function Ejercicio10() {
  let nombre1 = "Juan";
  let edad1 = 20;
  let nombre2 = "Ana";
  let edad2 = 30;
  let nombre3 = "Pepe";
  let edad3 = 15;
  if (edad1 < edad2 && edad1 < edad3) {
    console.log(`El menor es: ${nombre1} - ${edad1}`);
  } else if (edad2 < edad3) {
    console.log(`El menor es: ${nombre2} - ${edad2}`);
  } else {
    console.log(`El menor es: ${nombre3} - ${edad3}`);
  }
  return;
}
Ejercicio10();
// Ejercicio 11
function Ejercicio11() {
  const años = 6;
  if (años === 1) {
    console.log("No tiene bono");
  } else if (años === 2) {
    console.log("Su bono es 200");
  } else if (años === 3) {
    console.log("Su bono es 300");
  } else if (años === 4) {
    console.log("Su bono es 400");
  } else if (años === 5) {
    console.log("Su bono es 500");
  } else {
    console.log("Su bono es 1000");
  }
}
Ejercicio11();
// Ejercicio 12
function Ejercicio12() {
  const salario = 1500;
  for (let i = 0; i < 6; i++) {
    nuevo2 = salario * 0.1;
    nuevo3 = salario + nuevo2;
  }
}
Ejercicio12();
console.log(`Su sueldo es:${nuevo3}`);
// Ejercicio 13
function Ejercicio13() {
  let aprobados, n, reprobados;
  let calificacion = 20,
    calificacion_aprobatoria;
  if (calificacion >= calificacion_aprobatoria) nuevo1 = aprobados++;
  else nuevo2 = reprobados++;
}
Ejercicio13();
console.log(`El menor es: ${nuevo1} - ${nuevo2}`);
function Ejercicio14() {}
