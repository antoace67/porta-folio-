# Portafolio · Anto Acevedo

Portafolio personal de **Anto Acevedo**, estudiante de Diseño de la Universidad Diego Portales.

En la página de inicio, los proyectos flotan como stickers alrededor de "ABOUT ME". Al pasar el mouse sobre uno, se agranda y muestra su nombre. Al apretarlo, se abre la página del proyecto. Además hay una página **¿Quién soy?** y una página de **Contacto**.

La página se adapta sola a computador y celular, y no necesita instalar nada: es HTML, CSS y JavaScript puro.

---

## Archivos

```
portafolio/
├── index.html      → estructura de la página (textos de ¿Quién soy? y Contacto)
├── style.css       → diseño: colores, tipografías, tamaños, versión celular
├── script.js       → lista de proyectos y funcionamiento (stickers, páginas, visor)
├── README.md       → este archivo
└── assets/
    ├── fuentes/    → tipografía Chelsea Market
    ├── fondo/      → fondo de garabatos amarillos (horizontal y vertical)
    ├── stickers/   → los stickers que flotan en el inicio
    ├── proyectos/  → fotos de cada proyecto
    └── video/      → video de "No solo lo intencional se nota"
```

> **Importante:** la carpeta `assets` siempre tiene que ir junto a `index.html`. Si se separan, las imágenes no se ven.

---

## Ver el portafolio en tu computador

Haz doble clic en `index.html` y se abrirá en tu navegador. No necesitas internet, salvo para la tipografía del texto (Figtree). Sin conexión se usa una tipografía parecida del sistema.

---

## Publicarlo en GitHub Pages

1. Entra a [github.com](https://github.com) con tu cuenta y crea un repositorio nuevo, **público**, por ejemplo `portafolio`.
2. En el repositorio, aprieta **Add file → Upload files** y arrastra **todo el contenido** de la carpeta `portafolio`: `index.html`, `style.css`, `script.js`, `README.md` y la carpeta `assets` completa. Luego aprieta **Commit changes**.
3. Ve a **Settings → Pages**.
4. En **Branch** elige `main` y la carpeta `/ (root)`, y aprieta **Save**.
5. Espera uno o dos minutos y recarga la página. Arriba aparecerá el link de tu portafolio, por ejemplo:
   `https://antoace67.github.io/portafolio/`

**Tip:** si el repositorio se llama exactamente `antoace67.github.io`, el portafolio queda en `https://antoace67.github.io/`, sin nada al final.

Cada vez que subas un cambio al repositorio, la página se actualiza sola en uno o dos minutos.

---

## Editar el contenido

### Textos de ¿Quién soy? y Contacto

Están directamente en `index.html`. Busca `¿QUIÉN SOY?` o `CONTACTO` y cambia el texto que está entre las etiquetas.

### Proyectos

Todos los proyectos están en `script.js`, en la lista `PROYECTOS` que está al principio. Cada proyecto se ve así:

```js
{
  id: "gestos",                       // nombre corto para el link (sin espacios ni tildes)
  etiqueta: "GESTOS - 2026",          // lo que aparece al pasar el mouse en el inicio
  titulo: "Gestos",                   // título dentro de la página del proyecto
  imagen: "assets/stickers/gestos.webp",   // sticker que flota en el inicio
  alt: "Sticker del proyecto Gestos", // descripción del sticker para lectores de pantalla
  fotos: [
    { src: "assets/proyectos/gestos-original.webp", alt: "Descripción de la foto" }
  ],
  descripcion: "Texto del proyecto…",
  enlaces: [
    { texto: "PRUÉBALO ACÁ", url: "https://…" },      // con url, se muestra como link
    { texto: "Ramo", valor: "Modelado 3D - 4to Semestre" }  // con valor, se muestra como texto
  ]
}
```

También hay opciones extra:

- `video: { src: "assets/video/archivo.mp4", alt: "…" }` agrega un video debajo de las fotos.
- `fotosAnchas: true` es para capturas muy anchas, como las de Misma Tierra.
- `fotosPasos: true`, junto con `paso: "1. Pescar"` en cada foto, muestra las fotos como pasos numerados, como en Pesca.

### Agregar un proyecto nuevo

1. Copia el sticker en `assets/stickers/` y las fotos en `assets/proyectos/`.
2. En `script.js`, copia un proyecto completo de la lista `PROYECTOS`, desde `{` hasta `},`, pégalo y cambia sus datos.
3. Listo: el nuevo sticker aparecerá automáticamente flotando en el inicio, repartido entre los demás.

**Recomendación para las imágenes:** usa formato `.webp` o `.jpg` de no más de 1000 px de ancho, para que la página cargue rápido. Los stickers deben tener el fondo transparente (`.webp` o `.png`).

### Cambiar colores

Al inicio de `style.css`, en `:root`, están los colores principales:

```css
--verde: #008000;   /* títulos */
--texto: #1F2A1F;   /* texto */
```

El amarillo de los garabatos está dentro de las imágenes de `assets/fondo/`.

### Mover los stickers del inicio

En `script.js`, las listas `LUGARES_PC` (computador) y `LUGARES_CEL` (celular) definen dónde flota cada sticker con `[izquierda %, arriba %, tamaño]`. Puedes agregar o quitar posiciones para tener más o menos stickers.

---

## Tecnologías

- HTML, CSS y JavaScript, sin librerías
- Tipografías: **Chelsea Market** para los títulos (incluida en `assets/fuentes`) y **Figtree** para el texto (desde Google Fonts)
