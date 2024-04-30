let arrayNotas = [];

inputUser = prompt("ingrese las calificaciones de los estudiantes seeparadas por comas. ejemplo: 3, 4, 2, 1, 2, 4, etc...")

let arreglito= inputUser.split(", ");

for (elemento of arreglito) {
  arrayNotas.push(parseFloat(elemento))
}


let sumaNotas = arrayNotas.reduce((elemento1, elemento2) => {elemento1 + elemento2});

const ponderadoNotas = sumaNotas / arrayNotas.length;
//3, 4, 5, 2, 3, 5, 5, 1
let arregloOrganizado = arrayNotas.sort()

let numeroMenor = arregloOrganizado[0];
let numeroMayor = arregloOrganizado[arregloOrganizado.length-1];
let listaAprobados = [];
let listaReprobados = [];

console.log(numeroMenor, numeroMayor)

for (let i = 0; i < arregloOrganizado.length; i++) {
  if (arregloOrganizado[i] >= 70) {
    console.log(`el usuario pasó con una nota ${arregloOrganizado[i]}`)
    listaAprobados.push(arregloOrganizado[i])

  } else {
    console.log(`el usuario perdió con nota ${arregloOrganizado[i]}`)
    listaReprobados.push(arregloOrganizado[i])
  }
}

const aprobados = listaAprobados.length;
const reprobados = listaReprobados.length;

console.log(ponderadoNotas)
console.log(numeroMayor)
console.log(numeroMenor)
console.log(aprobados)
console.log(reprobados)
console.log(arregloOrganizado)

