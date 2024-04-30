//calculadora promedio

let ingresoCalificaciones = prompt("ingrese las calificaciones separadas por una come y un espacio: ejemplo 1, 2, 4, 5, 2, ...")
// 3.0, 4.0, 2.0, 1.0
let arrayCalificaciones = ingresoCalificaciones.split(", ");
console.log(arrayCalificaciones)

// 1.0, 2.0, 3.5, 4.0, 5.0, 2.5, 3.0
for (let i = 0; i < arrayCalificaciones.length; i++) {
  arrayCalificaciones[i] = (parseFloat(arrayCalificaciones[i]))
  //el indice de arraycalificaciones va a ser igual que ese mismo indice pero convertido a numero
  // indice 0 el cual es "1.0" será igual a 1.0
}
console.log(arrayCalificaciones)
let sumaPonderada = arrayCalificaciones.reduce((elemento1, elemento2) => elemento1 += elemento2 )
console.log(sumaPonderada)


const resultado = sumaPonderada / arrayCalificaciones.length;

console.log(resultado)