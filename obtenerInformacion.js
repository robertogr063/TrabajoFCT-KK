// Función para obtener información de Kidd Keo
const obtenerInformacion = async () => {
    try {
        const result = await fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/11237527', {
            headers: {
                'Origin': 'http://localhost'
            }
        });
        if (!result.ok) {
            throw new Error(`HTTP error! status: ${result.status}`);
        }
        const data = await result.json();
        console.log('Información:', data); // Verificar la respuesta en la consola
        return data;
    } catch (error) {
        console.error('Error al obtener información:', error);
    }
};

// Función para mostrar información del artista
const mostrarInformacion = (informacion) => {
    const infoArtista = document.getElementById('informacion-artista');
    if (informacion) {
        infoArtista.innerHTML = `
            <p><strong>Nombre:</strong> ${informacion.name}</p>
            <p><strong>Fans:</strong> ${informacion.nb_fan}</p>
            <p><strong>Álbumes:</strong> ${informacion.nb_album}</p>
            <p><strong>Seguidores:</strong> ${informacion.nb_fan}</p>
            <p><strong>Top Canciones:</strong> ${informacion.nb_track}</p>
            <p><strong>Descripción:</strong> ${informacion.description || 'No disponible'}</p>
            <p><strong>Link:</strong> <a href="${informacion.link}" target="_blank">Deezer</a></p>
            <img src="${informacion.picture_medium}" alt="Imagen de ${informacion.name}">
        `;
    } else {
        infoArtista.innerHTML = '<p>No se encontró información del artista.</p>';
    }
};

// Evento que se ejecuta cuando el DOM se ha cargado
document.addEventListener('DOMContentLoaded', async () => {
    const informacion = await obtenerInformacion(); // Obtener la información del artista
    mostrarInformacion(informacion); // Mostrar la información del artista
});