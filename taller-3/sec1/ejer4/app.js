const eventos = {};

function agregarEventos() {
  let arranque = true;

  let id = 0;

  while (arranque) {
    let nombreEvento = prompt("cuál es el nombre del evento?").toLowerCase();

    let fecha = prompt("fecha del evento año-mes-dia");

    let descripcionEvento = prompt(
      "una breve descripción de qué es el evento"
    ).toLowerCase();

    function objeto(id, nombre, fecha, descripcion) {
      return {
        [nombre]: {
          id: id,
          nombreevento: nombre,
          fechaevento: fecha,
          descripcionevento: descripcion,
        },
      };
    }

    // let objetoEvento = {
    //   id: id,
    //   nombreEvento: nombreEvento,
    //   fechaEvento: fecha,
    //   descripcionEvento: descripcionEvento,
    // };

    Object.assign(eventos, objeto(id, nombreEvento, fecha, descripcionEvento));
    console.log(eventos);

    id++;

    arranque = confirm("desea continuar agregando eventos?");
  }
}

function verEventos() {
  alert("aquí aparecerán los eventos que usted busque si existen");

  let criterioBusqueda = prompt("cuál es el nombre del evento?").toLowerCase();

  const nombresEventos = Object.keys(eventos);

  for (nombre of nombresEventos) {
    if (nombre.includes(criterioBusqueda)) {
      console.log(`el nombre si existe, el evento es ${nombre}`);
    } else {
      console.log("intenta nuevamente, parece que el evento no existe");
    }
  }
}

function actualizarEventos() {
  let elementoActualizar = prompt("cuál evento desea actualizar").toLowerCase();

  for (indice in eventos) {
    if (eventos[indice].nombreEvento.includes(elementoActualizar)) {
      let nuevoNombre = prompt("cuál es el nuevo nombre del evento?");
      eventos[indice].nombreEvento = nuevoNombre;
      let confirmacion = confirm(
        "desea continuar editando la descripción y fecha?"
      );
      if (confirmacion) {
        let nuevaFecha = prompt("cuál es la nueva fecha? año-mes-dia");
        eventos[indice].fechaEvento = nuevaFecha;
        let nuevaDescripcion = prompt(
          " cuál va a ser la nueva descripción del evento?"
        );
        eventos[indice].descripcionEvento = nuevaDescripcion;
      } else {
        alert(
          "usted ha guardado el nombre evento: " +
            eventos[indice].nombreEvento +
            "exitosamente"
        );
      }
    }
  }
}

function eliminarObjeto() {
  let objetoEliminar = prompt("cuál objeto desea eliminar?").toLowerCase();
  for (evento in eventos) {
    if (eventos[evento].nombreEvento.includes(objetoEliminar)) {
      delete eventos[evento];
      alert(`el evento ${objetoEliminar} ha sido eliminado con exito`);
    } else {
      alert("el evento no existe, por favor verifique bien");
    }
  }
}

let continuar = true;

while (continuar) {
  const input = Number(
    prompt(
      "bienvenido al programa de eventos\n que desea hacer?\n 1. agregar eventos \n 2.ver los eventos \n 3. actualizar el evento \n 4. eliminar algun evento"
    )
  );

  switch (input) {
    case 1:
      agregarEventos();
      break;
    case 2:
      verEventos();
      break;
    case 3:
      actualizarEventos();
      break;
    case 4:
      eliminarObjeto();
      break;
  }

  continuar = confirm("desea confirmar usando el programa?");
}
