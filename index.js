// let nombre = document.getElementById('nombre');
// var dni = document.getElementById("dni");
// var email = document.getElementById("email");
// var edad = document.getElementById("edad");
// var telefono = document.getElementById("telefono");
// var direccion = document.getElementById("direccion");
// var ciudad = document.getElementById("ciudad");
// var cp = document.getElementById("cp");

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input')



const validarForm = (e) => {
    switch(e.target.name){
        case 'nombre':
            if(expresiones.nombre.test(e.target.value)){ //si está todo bien
                console.log('Todo bien');
            }
            else{
                alert('Nombre no válido')
            }
        break;
        
        case 'dni':
            if(expresiones.dni.test(e.target.value)){ //si está todo bien
                console.log('Todo bien');
            }
            else{
                alert('DNI no válido')
            }
        break;
        
        case 'email':
            if(expresiones.dni.test(e.target.value)){ //si está todo bien
                console.log('Todo bien');
            }
            else{
                alert('email no válido')
            }
        break;
        
        case 'edad':
            if(expresiones.edad.test(e.target.value)){ //si está todo bien
                console.log('Todo bien');
            }
            else{
                if (expresiones.edad.test(valorEdad) && parseInt(valorEdad) >= 18) {
                
                    console.log('Todo bien');

                } else {
                    alert('Edad no válida')
                }
            }
        break; 
        
        case 'telefono':
            if(expresiones.telefono.test(e.target.value)){ //si está todo bien
                console.log('Todo bien');
            }
            else{
                alert('Teléfono no válido')
            }
        break;

        case 'direccion':
            if(expresiones.direccion.test(e.target.value)){ //si está todo bien
                console.log('Todo bien');
            }
            else{
                alert('Direccion no válida')
            }
        break;
        case 'ciudad':
            if(expresiones.ciudad.test(e.target.value)){ //si está todo bien
                console.log('Todo bien');
            }
            else{
                alert('Ciudad no válida')
            }
        break;
        case 'cp':
            if(expresiones.cp.test(e.target.value)){ //si está todo bien
                console.log('Todo bien');
            }
            else{
                alert('Código Postal no válido')
            }
        break;
    }
}    
inputs.forEach((input) => {
    input.addEventListener('blur', validarForm);
});


const expresiones = {
    nombre: /^(?=.{7,})([a-zA-ZÀ-ÿ]+\s+[a-zA-ZÀ-ÿ]+.*)$/, //espacio obligatorio y mas de 6 letras
    email:  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    contra: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, //Al menos 8 caracteres, formados por letras y números.
    edad: /^\d+$/, //numero entero
    telefono: /^\d{7,}$/,
    direccion: /^(?=.*[A-Za-z])(?=.*\d)(?=.{5,}).*\s+.*$/, //al menos 5 caracteres, alfanumerico y espacio obligatorio
    ciudad: /^.{3,}$/, //al menos 3 caracteres
    cp: /^.{3,}$/, //al menos 3 caracteres
    dni: /^\d{7,8}$/,    ///  7 u 8 dígitos
}


// Nombre completo: Debe tener más de 6 letras y al menos un espacio entre medio.
// Email: debe tener un formato de email válido.
// Contraseña: Al menos 8 caracteres, formados por letras y números.
// Edad: Número entero mayor o igual a 18.
// Teléfono: Número de al menos 7 dígitos, no aceptar espacios, guiones ni paréntesis.
// Dirección: Al menos 5 caracteres, con letras, números y un espacio en el medio.
// Ciudad: Al menos 3 caracteres.
// Código Postal: Al menos 3 caracteres.
// DNI: Número de 7 u 8 dígitos.