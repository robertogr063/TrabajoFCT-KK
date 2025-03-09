// Función para obtener canciones de Kidd Keo
const obtenerCanciones = async () => {
    try {
        const result = await fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/11237527/top?limit=100', {
            headers: {
                'Origin': 'http://localhost'
            }
        });
        if (!result.ok) {
            throw new Error(`HTTP error! status: ${result.status}`);
        }
        const data = await result.json();
        console.log('Canciones:', data); // Verificar la respuesta en la consola
        return data.data;
    } catch (error) {
        console.error('Error al obtener canciones:', error);
    }
};

// Función para mostrar canciones en la lista
const mostrarCanciones = (canciones) => {
    const listaCanciones = document.getElementById('lista-canciones');
    listaCanciones.innerHTML = ''; // Limpiar la lista de canciones

    if (canciones) {
        canciones.forEach(cancion => {
            const li = document.createElement('li');
            li.textContent = cancion.title; // Añadir el nombre de la canción
            listaCanciones.appendChild(li); // Añadir el elemento a la lista
        });
    } else {
        listaCanciones.innerHTML = '<li>No se encontraron canciones.</li>';
    }
};

// Evento que se ejecuta cuando el DOM se ha cargado
document.addEventListener('DOMContentLoaded', async () => {
    const canciones = await obtenerCanciones(); // Obtener las canciones
    mostrarCanciones(canciones); // Mostrar las canciones

    const buscadorCanciones = document.getElementById('buscador-canciones');
    buscadorCanciones.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase(); // Obtener el valor del buscador
        const cancionesFiltradas = canciones.filter(cancion => cancion.title.toLowerCase().includes(query)); // Filtrar las canciones
        mostrarCanciones(cancionesFiltradas); // Mostrar las canciones filtradas
    });
});