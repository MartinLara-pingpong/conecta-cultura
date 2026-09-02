const actividades = [
    {
        codigo: "MUS001",
        nombre: "Taller de guitarra inicial",
        categoria: "Música",
        descripcion: "Aprende acordes y ritmos básicos en una sesión práctica.",
        precio: 15000,
        cupos: 20
    },
    {
        codigo: "ART002",
        nombre: "Acuarela para principiantes",
        categoria: "Artes visuales",
        descripcion: "Explora técnicas básicas de color, pincel y composición.",
        precio: 12000,
        cupos: 4
    },
    {
        codigo: "TEA003",
        nombre: "Teatro comunitario",
        categoria: "Teatro",
        descripcion: "Participa en ejercicios teatrales y creación colectiva.",
        precio: 0,
        cupos: 0
    },
    {
        codigo: "TEC004",
        nombre: "Programación creativa",
        categoria: "Tecnología",
        descripcion: "Crea pequeños proyectos mientras aprendes lógica de programación.",
        precio: 18000,
        cupos: 12
    },
    {
        codigo: "MUS005",
        nombre: "Percusión comunitaria",
        categoria: "Música",
        descripcion: "Experimenta con ritmos y percusión en grupo.",
        precio: 10000,
        cupos: 8
    },
    {
        codigo: "ART006",
        nombre: "Fotografía urbana",
        categoria: "Artes visuales",
        descripcion: "Aprende composición mientras recorres y fotografias tu entorno.",
        precio: 8000,
        cupos: 5
    },
    {
        codigo: "TEA007",
        nombre: "Improvisación escénica",
        categoria: "Teatro",
        descripcion: "Desarrolla expresión y creatividad mediante juegos teatrales.",
        precio: 7000,
        cupos: 10
    },
    {
        codigo: "TEC008",
        nombre: "Diseño digital para principiantes",
        categoria: "Tecnología",
        descripcion: "Conoce herramientas básicas para crear piezas digitales.",
        precio: 0,
        cupos: 6
    }
];

const cartelera = document.querySelector("#cartelera");

function crearTarjeta(actividad) {
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("tarjeta");

    const nombre = document.createElement("h2");
    nombre.textContent = actividad.nombre;

    const categoria = document.createElement("p");
    categoria.textContent = "Categoría: " + actividad.categoria;

    const descripcion = document.createElement("p");
    descripcion.textContent = actividad.descripcion;

    const precio = document.createElement("p");

    if (actividad.precio === 0) {
        precio.textContent = "Precio: Gratis";
    } else {
        precio.textContent = "Precio: $" + actividad.precio;
    }

    const cupos = document.createElement("p");

    if (actividad.cupos > 0 && actividad.cupos <= 5) {
        cupos.textContent = "¡Últimos " + actividad.cupos + " cupos!";
        cupos.classList.add("aviso-cupos");
    } else if (actividad.cupos === 0) {
        cupos.textContent = "Actividad completa";
        cupos.classList.add("actividad-completa");
    } else {
        cupos.textContent = "Cupos: " + actividad.cupos;
    }

    tarjeta.appendChild(nombre);
    tarjeta.appendChild(categoria);
    tarjeta.appendChild(descripcion);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(cupos);

    cartelera.appendChild(tarjeta);
}

function mostrarActividades(lista) {
    if (!cartelera) {
        return;
    }

    cartelera.replaceChildren();

    for (const actividad of lista) {
        crearTarjeta(actividad);
    }
}

function mostrarTodas() {
    mostrarActividades(actividades);
}

function mostrarDisponibles() {
    const disponibles = [];

    for (const actividad of actividades) {
        if (actividad.cupos > 0) {
            disponibles.push(actividad);
        }
    }

    mostrarActividades(disponibles);
}

mostrarActividades(actividades);

const botonTodas = document.querySelector("#mostrar-todas");
const botonDisponibles = document.querySelector("#mostrar-disponibles");

if (botonTodas && botonDisponibles) {
    botonTodas.addEventListener("click", mostrarTodas);
    botonDisponibles.addEventListener("click", mostrarDisponibles);
}