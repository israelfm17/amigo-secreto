// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const nombreAmigo = document.getElementById('amigo').value.trim();
    const listaAmigos = document.getElementById('listaAmigos');

    // Validación: si el nombre está vacío, mostrar alerta
    if (nombreAmigo === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    // Añadir el nombre al array de amigos
    amigos.push(nombreAmigo);

    // Mostrar el nombre en la lista HTML
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = nombreAmigo;
    listaAmigos.appendChild(nuevoElemento);

    // Limpiar el campo de entrada
    document.getElementById('amigo').value = '';
}

// Función para realizar el sorteo
function sortearAmigo() {
    // Validar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert("Debe ingresar al menos un nombre para sortear.");
        return;
    }

    // Obtener un índice aleatorio de la lista de amigos
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    // Mostrar el resultado en el HTML
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.textContent = `El amigo secreto es: ${amigoSeleccionado}`;
}