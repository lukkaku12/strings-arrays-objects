
let correoUser = prompt("brinde su correo. ejemplo: Ejemplo1@ejemplo.com");

const validador = /^(?=.*@)(?!.*[.]{2})(?!.*[@.])[^\s@]+@[^\s@]+\.[^\s@]+$/

let seguraONo = validador.test(correoUser);

seguraONo ? console.log("el correo es correcto") : console.log("el correo tiene que ser corregido");