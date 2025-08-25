// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    if (nombreAmigo === '') {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }
    
    if (amigos.includes(nombreAmigo)) {
        alert('Este nombre ya está en la lista.');
        inputAmigo.value = '';
        return;
    }
    
    amigos.push(nombreAmigo);

    inputAmigo.value = '';

    actualizarLista();
    
    limpiarResultado();
}


// Función para actualizar la visualización de la lista de amigos
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    
    listaAmigos.innerHTML = '';
    
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = ' ✖';
        botonEliminar.style.marginLeft = '10px';
        botonEliminar.style.marginBottom = '10px';
        botonEliminar.style.backgroundColor = 'transparent';
        botonEliminar.style.border = 'none';
        botonEliminar.style.color = '#ff4444';
        botonEliminar.style.cursor = 'pointer';
        botonEliminar.style.fontSize = '12px';
        botonEliminar.style.border = '1px solid #ff4444'
        botonEliminar.onclick = () => eliminarAmigo(index);
        
        li.appendChild(botonEliminar);
        listaAmigos.appendChild(li);
    });
}


//Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
    limpiarResultado();
}


// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Agregue al menos un amigo antes de realizar el sorteo.');
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    const amigoSorteado = amigos[indiceAleatorio];
    
    mostrarResultado(amigoSorteado);
}


// Función para mostrar el resultado del sorteo
function mostrarResultado(nombreSorteado) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto sorteado es: <strong>${nombreSorteado}</strong></li>`;
}


// Función para limpiar el resultado anterior
function limpiarResultado() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
}


// Función para manejar la tecla Enter en el campo de entrada
function manejarTeclaEnter(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
}

// Agregar event listener para la tecla Enter cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    const inputAmigo = document.getElementById('amigo');
    inputAmigo.addEventListener('keypress', manejarTeclaEnter);
    
    inputAmigo.focus();
});

