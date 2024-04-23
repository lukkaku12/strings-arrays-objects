


const users = {

};


let arranque = true;
const dominio = "myDomain.com";

while (arranque) {


    let nombreCompleto = prompt("Cuál es su nombre completo de usuario?").toLowerCase();

    if (!nombreCompleto) {
        // Si el usuario no ingresa ningún nombre, salir del bucle
        break;
    }

    let nombreSplit = nombreCompleto.split(" ");
    let nombre =  nombreSplit[0];
    let apellido = nombreSplit[1];

    let nombreCut = nombre.slice(0.3);
    let apellidoCut = apellido.slice(0.3);

    let usuarioName = nombreCut + apellidoCut;



    const llaves = Object.keys(users);

    let cont = 0;

    llaves.forEach((elemento) => {
        if (elemento.includes(usuarioName)) {
             cont++
        }
    });


    if (cont) {
        usuarioName = usuarioName + cont;
    }

    let correoUsuario = `${usuarioName}@${dominio}`



    Object.assign(users, {
        [usuarioName]:correoUsuario
    })


    arranque = confirm("desea continuar? si aceptar o no para parar?");
    console.log(users);
}
