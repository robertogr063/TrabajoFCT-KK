function fadeIn(element) {
  element.style.opacity = 0;
  element.style.display = "block";
  let opacity = 0;
  const intervalID = setInterval(() => {
    if (opacity < 1) {
      opacity += 0.1;
      element.style.opacity = opacity;
    } else {
      clearInterval(intervalID);
    }
  }, 50);
}

function fadeOut(element) {
  let opacity = 1;
  const intervalID = setInterval(() => {
    if (opacity > 0) {
      opacity -= 0.1;
      element.style.opacity = opacity;
    } else {
      clearInterval(intervalID);
      element.style.opacity = 0;
    }
  }, 50);
}

function leerMas() {
  let descripcion = document.getElementById("descripcion");
  descripcion.innerHTML = `
        Kidd Keo, cuyo nombre real es Padua Keoma Salas Sánchez, nació el 27 de septiembre de 1995 en Alicante, España. 
        Gracias a su ascendencia canadiense, creció siendo bilingüe, lo que le permitió fusionar en sus canciones el inglés 
        y el español de manera fluida. 
        <br>
        Desde joven, Keo estuvo influenciado por una variedad de géneros musicales, desde el punk hasta el hip-hop. 
        Un traslado a Toronto, Canadá, amplió sus horizontes musicales, exponiéndolo a la escena trap norteamericana, 
        lo que influyó significativamente en su estilo artístico. 
        <br>
        Su carrera musical despegó en 2016 con el lanzamiento de "Okay", un sencillo que destacó por la frescura y 
        audacia de sus rimas. Este éxito inicial lo llevó a firmar con el sello independiente Dirty Business Trap y, 
        posteriormente, a captar la atención de Warner Music, con quienes lanzó el EP "Rockport Espacial".
        <br>
        A lo largo de su trayectoria, Kidd Keo ha demostrado una inclinación por las colaboraciones internacionales. 
        Ha trabajado con artistas como el dominicano Carlos Montesquieu en "El hombre casado" y el popular streamer 
        español El Rubius en "Don't Know Sh*t". Estas colaboraciones han ampliado su alcance y le han permitido 
        conectar con audiencias diversas. 
        <br>
        Su versatilidad y disposición para experimentar con diferentes sonidos y estilos han sido clave en su éxito. 
        Con trabajos como "Welcome to Gotham" y "Back to Rockport", Kidd Keo ha destacado por su producción innovadora 
        y colaboraciones con grandes nombres del trap y reguetón. Su estética visual y su enfoque directo han marcado tendencia, 
        generando tanto admiración como polémica. 
        <br>
        En noviembre de 2024, lanzó la tercera parte de "Rockport Espacial", que incluye cinco nuevas canciones y destaca por 
        la colaboración con El Rubius en el tema "Don't Know Sh*t". Este lanzamiento ha sido bien recibido por sus seguidores 
        y ha consolidado aún más su posición en la escena musical. 
        <br>
        La capacidad de Kidd Keo para fusionar culturas y estilos, junto con su habilidad para abordar temas controvertidos, 
        lo ha consolidado como una figura influyente en la música urbana contemporánea
  `;
  fadeIn(descripcion);
  document.getElementById("leerMenos").style.display = "inline";
  document.getElementById("leerMas").style.display = "none";
}

function leerMenos() {
  let descripcion = document.getElementById("descripcion");
  fadeOut(descripcion);
  setTimeout(() => {
    descripcion.innerHTML = `
      Kidd Keo es un rapero y cantante español conocido por su estilo único que fusiona trap, reggaetón y hip-hop. Nació
      en Alicante, España, y su carrera comenzó a despegar en la escena musical a mediados de la década de 2010. Se
      caracteriza por su mezcla de influencias de la música urbana global, especialmente la trap estadounidense, y sus
      letras que a menudo hablan de temas como la vida en la calle, el lujo y las experiencias personales.
    `;
    fadeIn(descripcion);
  }, 500);
  document.getElementById("leerMas").style.display = "inline";
  document.getElementById("leerMenos").style.display = "none";
}


