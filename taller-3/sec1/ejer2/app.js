// solicita contraseña al usuario.

let contraseña = prompt("ingrese su contraseña");

function passwordValidate(password){
    const regex = /^(?=.\d)(?=.[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
    return regex.test(password);
}


if (passwordValidate(contraseña)) {
    window.alert('Contraseña segura');
} else {
    window.alert('Contraseña insegura no cumple con las siguientes condiciones: falta "un caracter especial(^,@,+,*,~,etc..) un número, o una letra Mayuscula o excede los 8 caracteres"');
    
}