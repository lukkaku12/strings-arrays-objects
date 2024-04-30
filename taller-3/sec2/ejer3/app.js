// let nombreProd;
// let precioProd;
// let cantidadProd;
// let descripcionProd;
// let id = 0;

// let productos = {};
// //creacion del producto
// function creacionProd(
//   nombreProd,
//   precioProd,
//   cantidadProd,
//   descripcionProd,
//   id
// ) {
//   return {
//     [id]: {
//       id: id,
//       nombreProducto: nombreProd,
//       precioProducto: precioProd,
//       cantidadProducto: cantidadProd,
//       descripcionProducto: descripcionProd,
//     },
//   };
// }
// let arranque = true;
// while (arranque) {
//   nombreProd = prompt("cual es el nombre del producto").toLowerCase();
//   precioProd = prompt("cual es el precio del producto");
//   cantidadProd = prompt("cual es la cant del producto");
//   descripcionProd = prompt("descripcion del producto").toLowerCase();

//   Object.assign(
//     productos,
//     creacionProd(nombreProd, precioProd, cantidadProd, descripcionProd, id)
//   );
//   arranque = confirm("desea continuar agregando objetos?");
// }
// console.log(productos);

// //duplicacion de objetos
// productos.forEach((product, index) => {
//   console.log(
//     `Producto ${index + 1}: ${product.nombreProd} - ${
//       product.precioProd
//     } - ${product.cantidadProd} - ${product.descripcionProd}`
//   );
// });
// // luego pedimos el id del producto a duplicar
// const productId = prompt(
//   "Por favor ingresa el id del producto que deseas duplicar: "
// );
// // chequeamos que el id
// // duplicamos el producto
// const productToDuplicate = inventory[productId - 1];
// // chequeamos si una copia del producto ya existe
// let matches = 0;
// inventory.forEach((product) => {
//   if (product.productName.startsWith(productToDuplicate.productName)) {
//     matches++;
//   }
// });

// const duplicatedProduct = Object.assign(
//   {},
//   {
//     id: ++id,
//     productName: matches
//       ? productToDuplicate.productName + " Copy " + matches
//       : productToDuplicate.productName + " Copy",
//     productPrice: productToDuplicate.productPrice,
//     productQuantity: productToDuplicate.productQuantity,
//     productDescription: productToDuplicate.productDescription,
//   }
// );
// // agregamos el producto duplicado al inventario
// inventory.push(duplicatedProduct);
// // break;

// function visualizarProductos() {}

// console.log(productos);

let inventario = [];

let inputArranque = prompt(
  "cual decide escoger 1. crear un producto \n 2. duplicar un producto \n 3.revisar por nombre de producto o precio del producto  \n 4. actualizar la información de un producto \n 5. hacer una venta \n 6. verificar inventario \n 7. "
);
while (inputArranque) {
  switch (inputArranque) {
    //crear productos
    case "1":
      let iniciadora = true;
      while (iniciadora) {
        let nombre_producto = prompt(
          "cual es el nombre del producto a agregar"
        ).toLowerCase();
        let precio_producto = prompt(
          "cual es el precio del producto a agregar"
        );
        let cantidad_producto = prompt(
          "cual es la cantidad del producto a agregar"
        );
        let descripcion_producto = prompt("descripcion del producto");
        let id = 0;

        let objeto = {
          id: id,
          nombreProducto: nombre_producto,
          precioProducto: precio_producto,
          cantidadProducto: cantidad_producto,
          descripcionProducto: descripcion_producto,
        };
        id++;

        inventario.push(objeto);

        iniciadora = confirm("desea continuar agregando productos?");
      }
      break;
    case "2":
      //duplicar productos
      let confirmacion = confirm("desea ver los productos existentes?");

      if (confirmacion) {
        for (let i = 0; i < inventario.length; i++) {
          alert(
            `el producto ${inventario[i].nombreProducto} con id  ${
              inventario[i].id + 1
            }, precio ${inventario[i].precioProducto}, cantidad ${
              inventario[i].cantidadProducto
            }, descripción ${inventario[i].descripcionProducto}`
          );
          //aqui me va a mostrar todos los productos que hay hasta ahora
        }
        let idEdicionUsuario = Number(
          prompt("cual es el numero de id que deseas duplicar?")
        );
        //ya después de haber visto todos los productos, se le pide que ponga cual es el id del producto que desea duplicar
        for (let j = 0; j < inventario.length; j++) {
          //un bucle para recorrer nuevamente el inventario, buscando la propiedad id de cada producto
          if (
            inventario[j].id.startsWith(inventario[idEdicionUsuario - 1].id)
          ) {
            //si el id que estaba iterando empieza (es similar) con el id que da el usuario, entonces procederá con el codigo
            let matches = 0;
            // matches es para sumar cuantes veces se repite el nombre de ese producto
            //se duplica primero y despues se modifica dependiendo de si hay 1 o mas nombres iguales.

            let nuevoProducto = inventario[j];
            //se guarda el objeto que justamente es el mismo id que el usuario queria duplicar
            for (let z = 0; z < inventario.length; z++) {
              // esta iteración es para verificar los productos, pero este es para verificar el nombre del producto copiado,
              //si este existia mas de 1 vez, entonces el matches, sumaba
              if (
                inventario[z].nombreProducto.startsWith(
                  nuevoProducto.nombreProducto
                )
              ) {
                matches++;
              } /* va a hacer iteraciones, buscando que si el resultado de la iteración concuerda
                            con el nombre del producto que se duplicó, y si si cuantas veces se duplicó y se vera reflejado en matches.*/
            }
            //aqui preparamos el objeto que se va a asignar a inventarios, guardando los datos en un objeto base
            const productoDuplicado = {
              id: ++id,
              nombreProducto: matches
                ? nuevoProducto.nombreProducto + " Copy " + matches
                : nuevoProducto.nombreProducto + " Copy",
              //matches es true? si si es true, se agrega copy mas el numero de la copia, si no existe entonces irá solo copy
              precioProducto: nuevoProducto.precioProducto,
              cantidadProducto: nuevoProducto.cantidadProducto,
              descripcionProducto: nuevoProducto.descripcionProducto,
            };

            inventario.push(productoDuplicado);
            //de ahi, lo asigna ya a inventario
          }
        }
      }
      break;

    case "3":
      let buscador = prompt(
        "cual es el nombre del producto que buscas revisar?"
      ).toLowerCase();

      if (buscador) {
        for (let iterador = 0; iterador < inventario.length; iterador++) {
          if (inventario[iterador].nombreProducto.startsWith(buscador)) {
            alert(
              `el nombre del producto es: ${inventario[iterador].nombreProducto}, el precio es: ${inventario[iterador].precioProducto}, la cantidad es: ${inventario[iterador].cantidadProducto}, su descripción es: ${inventario[iterador].descripcionProducto}`
            );
          }
        }
      }
      buscador = prompt("cual es el precio del producto que deseas revisar");
      if (buscador) {
        for (let iterador = 0; iterador < inventario.length; iterador++) {
          if (inventario[iterador].precioProducto.startsWith(buscador)) {
            console.log(
              `el precio del producto ${inventario[iterador].nombreProducto} es ${inventario[iterador].precioProducto}`
            );
          }
        }
      }
      break;
    case "4":
      confirmacion = confirm("desea ver los productos existentes?");

      if (confirmacion) {
        for (let i = 0; i < inventario.length; i++) {
          console.log(
            `el producto ${inventario[i].nombreProducto} con id  ${
              inventario[i].id + 1
            }, precio ${inventario[i].precioProducto}, cantidad ${
              inventario[i].cantidadProducto
            }, descripción ${inventario[i].descripcionProducto}`
          );
          //aqui me va a mostrar todos los productos que hay hasta ahora
        }
      }

      let buscarId = prompt(
        "cual es el id del producto que quieres actualizar?"
      );
      for (let index = 0; index < inventario.length; index++) {
        if (inventario[index].id.startsWith(buscarId)) {
          let consulta = Number(
            prompt(
              "qué aspecto deseas actualizar? 1. nombre, 2. precio, 3. cantidad, 4.descripción 0. salir "
            )
          );
          while (consulta) {
            switch (consulta) {
              case 1:
                let nuevoNombre = prompt("cuál es el nombre del producto?");
                inventario[index].nombreProducto = nuevoNombre;
                console.log("nombre actualizado!");
                break;
              case 2:
                let nuevoPrecio = prompt("cuál es el nombre del producto?");
                inventario[index].precioProducto = nuevoPrecio;
                console.log("precio actualizado!");
                break;
              case 3:
                let nuevaCantidad = prompt(
                  "cuál es la nueva cantidad del producto?"
                );
                inventario[index].cantidadProducto = nuevaCantidad;
                console.log("cantidad actualizada!");
                break;
              case 4:
                let nuevaDescripcion = prompt(
                  "cuál es el nombre del producto?"
                );
                inventario[index].descripcionProducto = nuevaDescripcion;
                console.log("descripcion actualizada!");
                break;
              case 0:
                break;

              default:
                break;
            }

            consulta = Number(
              prompt(
                "qué aspecto deseas actualizar? 1. nombre, 2. precio, 3. cantidad, 4.descripción, 0. salir "
              )
            );
          }
        }
      }
      break;
    case "5":
      //eliminar el producto que agregó antes
      //id = 1
      buscarId = prompt("cuál es el id del producto que quieres eliminar?");
      for (let index = 0; index < inventario.length; index++) {
        if (inventario[index].id.startsWith(buscarId)) {
          let confirmation = confirm(
            `el producto a eliminar es el siguiente ${inventario[index].nombreProducto}, desea continuar?`
          );
          if (confirmation) {
            inventario = inventario.filter((elemento) => {
                //id no iguales a 1
              return elemento.id !== buscarId;
            });
          } else {
            console.log(`acción cancelada`);
          }
        }
      }
      break;
    case "6":
      //verificar inventario de producto para venta
      let verificador = prompt("cuantos necesitas? (cantidad producto)");
      let verificador2 = prompt(
        "cuál es el producto del que necesitas la cantidad puesta?"
      );
      for (let index = 0; index < inventario.length; index++) {
        if (
          inventario[index].cantidadProducto.includes(verificador) &&
          inventario[index].nombreProducto.startsWith(verificador2)
        ) {
          if (inventario[index].cantidadProducto >= verificador) {
            console.log(
              `cantidad suficiente ${inventario[index].cantidadProducto} del producto ${inventario[index].nombreProducto}`
            );
          }
        }
      }
      break;
    case "7":
      //compra de productos (restar del inventario)

      verificador = prompt("cual es el producto a vender?");
      verificador2 = prompt("cuantas unidades?");
      for (let index = 0; index < inventario.length; index++) {
        if (inventario[index].nombreProducto.startsWith(verificador)) {
          console.log(`sistema sumirá que tiene la cantidad incorrecta`);
          inventario[index].cantidadProducto -= verificador2;
          console.log(
            `cantidad restante en inventario del producto: ${inventario[index].nombreProducto}, ${inventario[index].cantidadProducto}`
          );
        }
      }

      break;
      case "8":
        let elementosJuntos = inventario.map(objeto => objeto.precioProducto);
        let sumaTotal = elementosJuntos.reduce((valor1, valor2) => valor1+valor2)

        alert(`precio total de inventario: ${sumaTotal}`)
        break;
      case "9":
        for (i = 0; i < inventario.length; i++) {
            let precioIncremento = inventario[i].precioProducto.sort((a,b) => a-b);
            let nombreAlfabetico = inventario[i].nombreProducto.sort() 
        }
        //incorrect way of doing, needs correction

    default:
      console.log("a");
      break;
  }

  inputArranque = prompt(
    "cual decide escoger 1. crear un producto \n 2. duplicar un producto \n 3.revisar por nombre de producto o precio del producto  \n 4. actualizar la información de un producto \n 5. hacer una venta \n 6. verificar inventario \n 7. "
  );
}
