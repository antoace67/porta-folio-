/* =========================================================
   PORTAFOLIO · ANTO ACEVEDO · contenido y funcionamiento

   Para agregar o editar un proyecto solo hay que cambiar la
   lista PROYECTOS de aquí abajo (ver el README para más detalle).
   ========================================================= */

/* ---------- Proyectos (después irán en data.json) ---------- */
const PROYECTOS = [
  {
    id: "gestos",
    etiqueta: "GESTOS - 2026",
    titulo: "Gestos",
    imagen: "assets/stickers/gestos.webp",
    alt: "Sticker del proyecto Gestos",
    fotos: [
      { src: "assets/proyectos/gestos-original.webp", alt: "Foto original usada en el proyecto Gestos" },
      { src: "assets/proyectos/gestos-extras.webp", alt: "Las seis fotos que el sistema identifica con los gestos" }
    ],
    descripcion: "Proyecto de visión artificial desarrollado con Python y la librería MediaPipe que utiliza la cámara del dispositivo para capturar video en tiempo real, rastrear los puntos clave de las manos e identificar 6 fotos de Justin Bieber, a través de los gestos. El sistema procesa la postura y los movimientos, ofreciendo una experiencia interactiva que combina seguimiento corporal y reconocimiento de patrones visuales.",
    enlaces: [
      { texto: "PRUÉBALO ACÁ", url: "https://maiteev.github.io/gestos-justin-/" },
      { texto: "Repositorio", url: "https://github.com/antoace67/gestos-justin-" }
    ]
  },
  {
    id: "no-solo-lo-intencional",
    etiqueta: "No solo lo intencional se nota - 2026",
    titulo: "No solo lo intencional se nota",
    imagen: "assets/stickers/no-solo-lo-intencional.webp",
    alt: "Sticker del proyecto No solo lo intencional se nota",
    fotos: [
      { src: "assets/proyectos/intencional-1.webp", alt: "Sistema 1, voluntario: el dedo índice dibuja con partículas magnéticas simétricas" },
      { src: "assets/proyectos/intencional-2.webp", alt: "Sistema 2, involuntario: el cuerpo iluminado según la velocidad de sus movimientos" }
    ],
    video: { src: "assets/video/no-solo-lo-intencional.mp4", respaldo: "assets/video/no-solo-lo-intencional-respaldo.webp", alt: "Demostración de la página en funcionamiento" },
    descripcion: "Experiencia web interactiva de visión artificial que utiliza la cámara en tiempo real para dividir una misma escena en dos realidades opuestas sobre el cuerpo humano: por un lado, la realidad de lo voluntario, donde un gesto consciente del dedo índice dibuja con partículas magnéticas simétricas; y por el otro, la realidad de lo involuntario, donde el sistema expone el cuerpo como materia viva e inquieta iluminando cada movimiento y micro-movimiento en una escala cromática térmica según su velocidad. Fue desarrollada con JavaScript, MediaPipe Hands y OpenCV.",
    enlaces: [
      { texto: "PRUÉBALO ACÁ", url: "https://maiteev.github.io/No-solo-lo-intencional-se-nota/" },
      { texto: "Repositorio", url: "https://github.com/antoace67/No-solo-lo-intencional-se-nota" }
    ]
  },
  {
    id: "misma-tierra",
    etiqueta: "Misma Tierra - 2026",
    titulo: "Misma Tierra",
    imagen: "assets/stickers/misma-tierra.webp",
    alt: "Sticker del proyecto Misma Tierra",
    fotosAnchas: true,
    fotos: [
      { src: "assets/proyectos/tierra-1.webp", alt: "Misma Tierra con el modelo 3D del árbol y los marcadores de rastreo" },
      { src: "assets/proyectos/tierra-2.webp", alt: "Misma Tierra usando la cámara: el sistema detecta el movimiento de la persona" }
    ],
    descripcion: "Plataforma web que explora la relación entre imagen en movimiento y sonido para difuminar la frontera entre el ser humano y la naturaleza interactiva desarrollada con HTML, CSS, JavaScript y Web Audio API. A través de un modelo 3D central de un árbol y una estética de data vision con marcadores de rastreo en tiempo real, el sistema detecta el desplazamiento frente a la cámara y traduce el crecimiento silencioso de las plantas en frecuencias audibles de metalófono distribuidas espacialmente como un arpa, convirtiendo al usuario en el canal que le da voz y ritmo sonoro a la vida invisible del ecosistema.",
    enlaces: [
      { texto: "PRUÉBALO ACÁ", url: "https://maiteev.github.io/Misma-tierra-/" },
      { texto: "Repositorio", url: "https://github.com/antoace67/Misma-tierra-" }
    ]
  },
  {
    id: "pesca",
    etiqueta: "PESCA - 2026",
    titulo: "Pesca",
    imagen: "assets/stickers/pesca.webp",
    alt: "Sticker del proyecto Pesca",
    fotosPasos: true,
    fotos: [
      { src: "assets/proyectos/pesca-1.webp", paso: "1. Pescar", alt: "Paso 1: pescar el pez antes de que se escape" },
      { src: "assets/proyectos/pesca-2.webp", paso: "2. Cortar", alt: "Paso 2: cortar el pescado trazando líneas con el dedo" },
      { src: "assets/proyectos/pesca-3.webp", paso: "3. Cocinar", alt: "Paso 3: voltear el pescado en la sartén subiendo el teléfono" },
      { src: "assets/proyectos/pesca-4.webp", paso: "4. Decorar", alt: "Paso 4: decorar el plato con los extras" }
    ],
    descripcion: "Desarrollo de un videojuego interactivo para dos personas que transforma el teléfono móvil en un control mediante gestos y movimientos físicos. A través de la interacción digital, los jugadores compiten en un desafío de pesca y cocina, realizando acciones como lanzar, cortar, cocinar, servir y decorar. El proyecto combina sensores de movimiento, interacción táctil, comunicación inalámbrica, sonido y vibración para generar una experiencia de juego inmersiva y dinámica.",
    enlaces: [
      { texto: "PRUÉBALO ACÁ", url: "https://maiteev.github.io/pesca-tacto-/juego.html" },
      { texto: "Repositorio", url: "https://github.com/antoace67/pesca-tacto-" }
    ]
  },
  {
    id: "vaquerreloj",
    etiqueta: "Vaquerreloj - 2026",
    titulo: "Vaquerreloj",
    imagen: "assets/stickers/vaquerreloj.webp",
    alt: "Sticker del proyecto Vaquerreloj",
    fotos: [
      { src: "assets/proyectos/reloj-foto.webp", alt: "Vaquerreloj terminado, en metal pintado negro con punteros dorados" },
      { src: "assets/proyectos/reloj-plano.webp", alt: "Plano de vistas generales del Vaquerreloj: vista frontal, superior y lateral con sus medidas" }
    ],
    descripcion: "Desarrollo de un reloj, deconstruyendo un vaquero. Las técnicas usadas fueron Sheet Metal de Inventor para el desarrollo del modelo y la forma, después en AutoCAD se terminó de arreglar los detalles para pasar al corte. Después en fábrica se cortó en láser, se plegó el metal y se soldó en puntos específicos. Por último se pintó con pintura electroestática de color negro.",
    enlaces: [
      { texto: "Ramo", valor: "Fabricación Digital Avanzada - 5to Semestre" }
    ]
  },
  {
    id: "alcancia-caracol",
    etiqueta: "Alcancía Caracol - 2026",
    titulo: "Alcancía Caracol",
    imagen: "assets/stickers/alcancia-caracol.webp",
    alt: "Sticker del proyecto Alcancía Caracol",
    fotos: [
      { src: "assets/proyectos/caracol-foto.webp", alt: "Alcancía Caracol terminada, en metal plegado gris oscuro" }
    ],
    descripcion: "Desarrollo de una alcancía, deconstruyendo un caracol. Las técnicas usadas fueron Sheet Metal de Inventor para el desarrollo del modelo y la forma, después en AutoCAD se terminó de arreglar los detalles para pasar al corte. Después en fábrica se cortó en láser y el plegado fue hecho a mano. Las piezas fueron unidas con pernos y tuercas pequeñas ocultas para evitar el ruido visual.",
    enlaces: [
      { texto: "Ramo", valor: "Fabricación Digital Avanzada - 5to Semestre" }
    ]
  },
  {
    id: "auto",
    etiqueta: "AUTO - 2025",
    titulo: "Auto",
    imagen: "assets/stickers/auto.webp",
    alt: "Sticker del proyecto Auto",
    fotos: [
      { src: "assets/proyectos/auto-foto.webp", alt: "Auto de terciado con superficies curvas hechas con plegado por corte láser" }
    ],
    descripcion: "Desarrollo de un auto hecho en su totalidad de terciado de 3mm. Las técnicas usadas fueron hacer la forma en Rhino, utilizando técnicas de plegado con corte láser, que son patrones que permiten que la madera se curve sin mayores problemas, después en AutoCAD se terminó de arreglar los detalles para pasar al corte. Se cortó el terciado en corte láser y después se armaron las piezas, con ayuda de encajes en lugares específicos y pernos con tuercas. El auto tiene la capacidad de avanzar, esto con un motor que impulsa las dos ruedas traseras, el motor funciona con pilas, y todo esto dentro del auto.",
    enlaces: [
      { texto: "Ramo", valor: "Modelado 3D - 4to Semestre" }
    ]
  }
];


/* Lugares donde flotan las fotos: [izquierda %, arriba %, tamaño] */
const LUGARES_PC = [
  [7, 21, 12], [21, 18, 12.5], [36, 20, 11.5], [51, 17, 12.5], [65, 21, 11.5], [79, 18, 12.5], [93, 23, 11],
  [8, 45, 12], [22, 40, 11], [78, 41, 11], [92, 47, 12],
  [7, 66, 11.5], [21, 62, 12], [79, 61, 12], [93, 68, 11.5],
  [7, 87, 12.5], [22, 85, 12], [36, 84, 11.5], [51, 86, 13], [65, 83, 11.5], [79, 86, 12.5], [93, 88, 11]
];
const LUGARES_CEL = [
  [17, 15, 30], [50, 14, 28], [83, 16, 30],
  [20, 27, 27], [52, 28, 29], [84, 29, 26],
  [17, 40, 26], [83, 41, 27],
  [17, 61, 27], [50, 62, 26], [83, 60, 28],
  [19, 74, 29], [51, 75, 27], [84, 73, 28],
  [18, 88, 30], [50, 87, 28], [83, 88, 30]
];

function pintarFlotantes() {
  const cont = document.getElementById("flotantes");
  const lugares = matchMedia("(orientation: portrait)").matches ? LUGARES_CEL : LUGARES_PC;
  /* Reparte las fotos: cada proyecto aparece la misma cantidad de veces
     y se evita que una foto quede al lado de su repetida */
  const usos = PROYECTOS.map(() => 0);
  const asignados = [];
  lugares.forEach(([x, y], i) => {
    const cerca = (j) => lugares.slice(0, i).some(([x2, y2], k) => asignados[k] === j && Math.hypot(x - x2, (y - y2) * 1.4) < 34);
    const orden = PROYECTOS.map((_, j) => j).sort((a, b) => usos[a] - usos[b] || ((a * 5 + i) % 7) - ((b * 5 + i) % 7));
    const elegido = orden.find(j => !cerca(j)) ?? orden[0];
    asignados.push(elegido); usos[elegido]++;
  });
  cont.innerHTML = lugares.map(([x, y, s], i) => {
    const p = PROYECTOS[asignados[i]];
    const al = (n) => (Math.sin(i * 12.9898 + n) * 43758.5453) % 1; // variación fija por foto
    const v = (n) => Math.abs(al(n));
    const estilo = [
      `left:${x}%`, `top:${y}%`, `--s:${s}`,
      `--r:${((v(1) - .5) * 14).toFixed(1)}deg`,
      `--d:${(6 + v(2) * 5).toFixed(1)}s`, `--dl:${(-v(3) * 6).toFixed(1)}s`,
      `--x1:${((v(4) - .5) * 24).toFixed(0)}px`, `--y1:${(-8 - v(5) * 10).toFixed(0)}px`,
      `--x2:${((v(6) - .5) * 24).toFixed(0)}px`, `--y2:${(6 + v(7) * 10).toFixed(0)}px`,
      `--e:${(i * .06).toFixed(2)}s`
    ].join(";");
    return `<a class="flota" href="#${p.id}" style="${estilo}" aria-label="${p.etiqueta}">
      <span class="flota-in"><img src="${p.imagen}" alt="${p.alt}" draggable="false"></span>
      <span class="etiqueta${p.etiqueta.length > 18 ? " larga" : ""}">${p.etiqueta}</span>
    </a>`;
  }).join("");
}
pintarFlotantes();
matchMedia("(orientation: portrait)").addEventListener("change", pintarFlotantes);

/* Cambiar de página según el enlace (#inicio, #about, #contacto, #proyecto-N) */
const vistas = document.querySelectorAll(".vista");
function mostrar() {
  let id = (location.hash || "#inicio").slice(1);
  const proyecto = PROYECTOS.find(p => p.id === id);
  if (proyecto) {
    const fotos = proyecto.fotos && proyecto.fotos.length
      ? proyecto.fotos.map(f => f.paso
          ? `<figure><img src="${f.src}" alt="${f.alt}"><figcaption>${f.paso}</figcaption></figure>`
          : `<img src="${f.src}" alt="${f.alt}">`).join("")
      : `<img class="sticker" src="${proyecto.imagen}" alt="${proyecto.alt}">`;
    document.getElementById("pr-fotos").innerHTML = fotos;
    document.getElementById("pr-fotos").classList.toggle("anchas", !!proyecto.fotosAnchas);
    document.getElementById("pr-fotos").classList.toggle("pasos", !!proyecto.fotosPasos);
    document.getElementById("pr-fotos").classList.toggle("una", !!proyecto.fotos && proyecto.fotos.length === 1);
    const cajaVideo = document.getElementById("pr-video");
    cajaVideo.innerHTML = proyecto.video
      ? `<video src="${proyecto.video.src}" autoplay muted loop playsinline controls aria-label="${proyecto.video.alt}"></video>`
      : "";
    /* Si el navegador o la vista previa no deja reproducir el video,
       (por ejemplo, en un navegador antiguo) se muestra una versión animada como imagen */
    const vid = cajaVideo.querySelector("video");
    if (vid && proyecto.video.respaldo) {
      const usarRespaldo = () => {
        if (!vid.isConnected) return;
        cajaVideo.innerHTML = `<img class="video-respaldo" src="${proyecto.video.respaldo}" alt="${proyecto.video.alt}">`;
      };
      vid.addEventListener("error", usarRespaldo);
    }
    document.getElementById("pr-titulo").textContent = proyecto.titulo;
    document.getElementById("pr-texto").textContent = proyecto.descripcion || "Pronto agregaremos la descripción de este proyecto.";
    document.getElementById("pr-enlaces").innerHTML = (proyecto.enlaces || []).map(l =>
      `<p><span class="rotulo">${l.texto}</span>${l.url
        ? `<a href="${l.url}" target="_blank" rel="noopener">${l.url}</a>`
        : `<span class="valor">${l.valor}</span>`}</p>`).join("");
    id = "proyecto";
  }
  const destino = document.getElementById(id) || document.getElementById("inicio");
  vistas.forEach(v => v.classList.toggle("activa", v === destino));
  window.scrollTo(0, 0);
  document.title = (proyecto ? proyecto.titulo : id === "about" ? "¿Quién soy?" : id === "contacto" ? "Contacto" : "Inicio") + " · Anto Acevedo";
}
/* Visor: al apretar una foto del proyecto se ve en grande */
const visor = document.getElementById("visor"), visorImg = document.getElementById("visor-img");
document.getElementById("pr-fotos").addEventListener("click", (e) => {
  const img = e.target.closest("img");
  if (!img) return;
  visorImg.src = img.src; visorImg.alt = img.alt; visor.hidden = false;
});
const cerrarVisor = () => { visor.hidden = true; visorImg.src = ""; };
visor.addEventListener("click", cerrarVisor);
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !visor.hidden) cerrarVisor(); });
addEventListener("hashchange", () => { if (!visor.hidden) cerrarVisor(); });

addEventListener("hashchange", mostrar);
mostrar();
