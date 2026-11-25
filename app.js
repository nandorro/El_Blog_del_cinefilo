// Lista con los dos cines solicitados y películas de ejemplo con sus sesiones
const cines = [
    {
        nombre: "Cinesa Méndez Álvaro",
        urlOficial: "https://www.cinesa.es/cines/mendez-alvaro/",
        peliculas: [
            { titulo: "Dune: Parte Dos", sesiones: ["16:30", "19:45", "22:30 VOSE"] },
            { titulo: "Oppenheimer", sesiones: ["17:00", "20:30"] },
            { titulo: "Del Revés 2", sesiones: ["16:00", "18:15"] }
        ]
    },
    {
        nombre: "Kinépolis Madrid",
        urlOficial: "https://kinepolis.es/cines/kinepolis-madrid-ciudad-de-la-imagen/",
        peliculas: [
            { titulo: "Gladiator II", sesiones: ["17:15", "20:15", "23:00"] },
            { titulo: "Dune: Parte Dos", sesiones: ["18:00", "21:30 VOSE"] },
            { titulo: "Robot Salvaje", sesiones: ["16:15", "18:30"] }
        ]
    }
];

// Buscamos en el HTML el contenedor donde se pintarán los cines
const contenedorCines = document.getElementById("contenedor-cines");

// Recorremos cada cine para crear su bloque visual en la página
cines.forEach(cine => {
    // Creamos la tarjeta del cine
    const tarjetaCine = document.createElement("div");
    tarjetaCine.className = "caja-cine";

    // Cabecera del cine: título + botón hacia su web oficial
    const cabecera = document.createElement("div");
    cabecera.className = "cabecera-cine";

    const tituloCine = document.createElement("h3");
    tituloCine.textContent = cine.nombre;

    const botonWeb = document.createElement("a");
    botonWeb.href = cine.urlOficial;
    botonWeb.target = "_blank"; // Abre en pestaña nueva
    botonWeb.rel = "noopener noreferrer";
    botonWeb.className = "btn-cine";
    botonWeb.textContent = "Web cine ↗";

    cabecera.appendChild(tituloCine);
    cabecera.appendChild(botonWeb);
    tarjetaCine.appendChild(cabecera);

    // Recorremos las películas de este cine
    cine.peliculas.forEach(pelicula => {
        const tarjetaPeli = document.createElement("div");
        tarjetaPeli.className = "pelicula";

        // Construimos la URL de búsqueda en YouTube para el tráiler de la película
        const consulta = encodeURIComponent(`${pelicula.titulo} trailer oficial español`);
        const urlTrailer = `https://www.youtube.com/results?search_query=${consulta}`;

        // Enlace con el título de la película
        const enlacePeli = document.createElement("a");
        enlacePeli.href = urlTrailer;
        enlacePeli.target = "_blank";
        enlacePeli.rel = "noopener noreferrer";
        enlacePeli.className = "enlace-trailer";
        enlacePeli.textContent = `▶ ${pelicula.titulo}`;

        // Contenedor para las horas de sesión
        const cajaSesiones = document.createElement("div");
        cajaSesiones.className = "lista-sesiones";

        // Creamos una etiqueta por cada sesión
        pelicula.sesiones.forEach(hora => {
            const pastillaHora = document.createElement("span");
            pastillaHora.className = "hora-sesion";
            pastillaHora.textContent = `🕒 ${hora}`;
            cajaSesiones.appendChild(pastillaHora);
        });

        tarjetaPeli.appendChild(enlacePeli);
        tarjetaPeli.appendChild(cajaSesiones);
        tarjetaCine.appendChild(tarjetaPeli);
    });

    // Añadimos la tarjeta completa del cine al contenedor principal
    contenedorCines.appendChild(tarjetaCine);
});
