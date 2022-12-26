const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const presult  = document.querySelector('#result');
const form = document.querySelector('#form');

form.addEventListener('submit', sumarValues);

function sumarValues(event) {
    event.preventDefault();
    // para evitar el uso de preventDefault() en los formularios, podemos cambiar el comportamiento 
    // del boton a type="button", de esta forma la pagina no se estara recargando cada vez que se
    // envien datos  
    const conc = input1.value + input2.value;
    presult.innerHTML = 'resultado: ' + conc;
}