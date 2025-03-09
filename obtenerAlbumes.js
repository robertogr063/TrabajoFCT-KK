// Función para obtener álbumes de Kidd Keo
const obtenerAlbumes = async () => {
    try {
        const result = await fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/11237527/albums?limit=50', {
            headers: {
                'Origin': 'http://localhost'
            }
        });
        if (!result.ok) {
            throw new Error(`HTTP error! status: ${result.status}`);
        }
        const data = await result.json();
        console.log('Álbumes:', data); // Verificar la respuesta en la consola
        return data.data;
    } catch (error) {
        console.error('Error al obtener álbumes:', error);
    }
};

// Función para mostrar álbumes en la lista
const mostrarAlbumes = (albumes) => {
    const listaAlbumes = document.getElementById('lista-albumes');
    listaAlbumes.innerHTML = ''; // Limpiar la lista de álbumes

    if (albumes) {
        albumes.forEach(album => {
            const li = document.createElement('li');
            li.textContent = album.title; // Añadir el nombre del álbum
            listaAlbumes.appendChild(li); // Añadir el elemento a la lista
        });
    } else {
        listaAlbumes.innerHTML = '<li>No se encontraron álbumes.</li>';
    }
};

// Evento que se ejecuta cuando el DOM se ha cargado
document.addEventListener('DOMContentLoaded', async () => {
    const albumes = await obtenerAlbumes(); // Obtener los álbumes
    mostrarAlbumes(albumes); // Mostrar los álbumes

    const buscadorAlbumes = document.getElementById('buscador-albumes');
    buscadorAlbumes.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase(); // Obtener el valor del buscador
        const albumesFiltrados = albumes.filter(album => album.title.toLowerCase().includes(query)); // Filtrar los álbumes
        mostrarAlbumes(albumesFiltrados); // Mostrar los álbumes filtrados
    });
});