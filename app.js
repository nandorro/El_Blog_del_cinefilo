// 1. DATOS DE LOS CINES (Simulando la estructura de MainActivity.kt de Cinorro)
const cines = [
    {
        nombre: "Cinesa Méndez Álvaro",
        urlOficial: "https://www.cinesa.es/cines/mendez-alvaro/",
        peliculas: [
            { titulo: "Dune: Parte Dos", sesiones: "16:30 | 19:45 | 22:30 (VOSE)" },
            { titulo: "Oppenheimer", sesiones: "17:00 | 20:30" },
            { titulo: "Del Revés 2", sesiones: "16:00 | 18:15" }
        ]
    },
    {
        nombre: "Kinépolis Madrid",
        urlOficial: "https://kinepolis.es/cines/kinepolis-madrid-ciudad-de-la-imagen/",
        peliculas: [
            { titulo: "Gladiator II", sesiones: "17:15 | 20:15 | 23:00" },
            { titulo: "Dune: Parte Dos", sesiones: "18:00 | 21:30 (VOSE)" },
            { titulo: "Robot Salvaje", sesiones: "16:15 | 18:30" }
        ]
    }
];

// 2. SELECCIONAMOS EL CONTENEDOR DEL HTML DONDE IRÁN LOS CINES
const contenedor = document.getElementById("contenedor-cines");

// 3. RECORREMOS CADA CINE PARA CREAR SU BLOQUE EN PANTALLA
cines.forEach(cine => {
    // Creamos el div principal del cine
    const divCine = document.createElement("div");
    divCine.className = "caja-cine";

    // Construimos el HTML de la cabecera con el nombre y el botón a su web
    let html = `
        <div class="cabecera-cine">
            <h3>${cine.nombre}</h3>
            <a href="${cine.urlOficial}" target="_blank" class="btn-cine">Web cine ↗</a>
        </div>
    `;

    // Recorremos las películas de este cine
    cine.peliculas.forEach(peli => {
        // Creamos la URL de búsqueda automática en YouTube (igual que hace jlflashcon)
        const busquedaYoutube = encodeURIComponent(peli.titulo + " trailer oficial español");
        const urlTrailer = `https://www.youtube.com/results?search_query=${busquedaYoutube}`;

        // Añadimos la tarjeta de la película con enlace directo al tráiler
        html += `
            <div class="pelicula">
                <a href="${urlTrailer}" target="_blank" title="Ver tráiler en YouTube">
                    ▶ ${peli.titulo}
                </a>
                <div class="sesiones">🕒 ${peli.sesiones}</div>
            </div>
        `;
    });

    // Insertamos el HTML generado dentro de la caja del cine y lo añadimos a la página
    divCine.innerHTML = html;
    contenedor.appendChild(divCine);
});