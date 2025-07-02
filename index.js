
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input')


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

const campos ={
    nombre: false,
    dni: false,
    email: false,
    contra: false,
    edad: false,
    telefono: false,
    direccion: false,
    ciudad: false,
    cp: false
}


const validarForm = (e) => {
    switch(e.target.name){
        case 'nombre':

            if(expresiones.nombre.test(e.target.value)){ //si está todo bien
                document.getElementById('grupo__nombre').classList.remove('formulario__grupo-incorrecto')
                campos.nombre=true;
            }
            else{
                document.getElementById('grupo__nombre').classList.add('formulario__grupo-incorrecto')
            }
        break;
        
        case 'dni':
            if(expresiones.dni.test(e.target.value)){ //si está todo bien
                document.getElementById('grupo__dni').classList.remove('formulario__grupo-incorrecto')
                campos.dni=true;
            }
            else{
                document.getElementById('grupo__dni').classList.add('formulario__grupo-incorrecto')
            }
        break;
        
        case 'email':
            if(expresiones.email.test(e.target.value)){ //si está todo bien
                document.getElementById('grupo__mail').classList.remove('formulario__grupo-incorrecto')
                campos.email=true;
            }
            else{
                document.getElementById('grupo__mail').classList.add('formulario__grupo-incorrecto')
            }
        break;

        case 'contra':
            if(expresiones.contra.test(e.target.value)){
                document.getElementById('grupo__contra').classList.remove('formulario__grupo-incorrecto');
                campos.contra=true;            
            } else {
                document.getElementById('grupo__contra').classList.add('formulario__grupo-incorrecto');
            }
        break;

        
        case 'edad':
            const valorEdad = e.target.value;
            if (expresiones.edad.test(valorEdad) && parseInt(valorEdad) >= 18) {
                document.getElementById('grupo__edad').classList.remove('formulario__grupo-incorrecto');
                campos.edad=true;
            } else {
                document.getElementById('grupo__edad').classList.add('formulario__grupo-incorrecto');
            }
        break;
        
        case 'telefono':
            if(expresiones.telefono.test(e.target.value)){ //si está todo bien
                document.getElementById('grupo__telefono').classList.remove('formulario__grupo-incorrecto')
                campos.telefono=true;            
            }
            else{
                document.getElementById('grupo__telefono').classList.add('formulario__grupo-incorrecto')
            }
        break;

        case 'direccion':
            if(expresiones.direccion.test(e.target.value)){ //si está todo bien
                document.getElementById('grupo__direccion').classList.remove('formulario__grupo-incorrecto')
                campos.direccion=true;            
            }
            else{
                document.getElementById('grupo__direccion').classList.add('formulario__grupo-incorrecto')
            }
        break;
        case 'ciudad':
            if(expresiones.ciudad.test(e.target.value)){ //si está todo bien
                document.getElementById('grupo__ciudad').classList.remove('formulario__grupo-incorrecto')
                campos.ciudad=true;            
            }
            else{
                document.getElementById('grupo__ciudad').classList.add('formulario__grupo-incorrecto')
            }
        break;
        case 'cp':
            if(expresiones.cp.test(e.target.value)){ //si está todo bien
                document.getElementById('grupo__cp').classList.remove('formulario__grupo-incorrecto')
                campos.cp=true;            
            }
            else{
                document.getElementById('grupo__cp').classList.add('formulario__grupo-incorrecto')
            }
        break;
    }
}    
inputs.forEach((input) => {
    input.addEventListener('keyup', validarForm);
    input.addEventListener('blur', validarForm);

});



document.getElementById('BtnEnviar');


formulario.addEventListener('submit', (e) => {
    e.preventDefault();
})

_datos={
    dni: 1,
    nombre: 'nacho'
}

fetch('https://httpbin.org/post', { 
  method: "POST", 
  body: JSON.stringify(_datos), 
  headers: {"Content-type": "application/json; charset=UTF-8"} 
}) 
.then(response => response.json())  
.then(json => console.log(json));