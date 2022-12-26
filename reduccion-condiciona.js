const valores = {
    'free': 'Solo puedes tomar 1 curso',
    'basic': 'un curso por mes',
    'expert': 'todos los cursos por un año',
    'expertduo': 'todo los cursos para dos personas' 
};

function suscripcion(tipo) {
    if (valores[tipo]) {
        console.log(valores[tipo]);
        return;
    }
    console.warn('no existe esa suscripcion'); 
}

// codigos de ejemplo para manipular el dom
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(input.value);
console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

// convierte todo a html
h1.innerHTML = 'Hola';
// convierte todo a texto, para uso cuando hay entradas por el usuario
h1.innerText = 'Hola';

// h1.getAttribute('class');
// h1.setAttribute('class', 'rojo');

h1.classList.add('rojo');
h1.classList.remove('verde');

input.value = 'hola';

const img = document.createElement('img');
img.setAttribute('src', 'https://static.platzi.com/media/platzi-isotipo@2x.png')

console.log(img);

pid.appendChild(img);