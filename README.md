# Portafolio — Lorenzo Gómez

Sitio estático alojado en GitHub Pages: https://lorenzoing.github.io/

## Contenido

- `index.html`: contenido y estructura del portafolio.
- `css/styles.css`: estilos y diseño adaptable a computador, tableta y móvil.
- `js/script.js`: navegación móvil, sección activa y ampliación de imágenes.
- `assets/img/`: imágenes optimizadas del portafolio.
- `assets/docs/Lorenzo_Gomez_CV.pdf`: hoja de vida aportada para esta revisión.
- `assets/icons/`: íconos del sitio.
- `robots.txt` y `sitemap.xml`: archivos de rastreo para buscadores.

No requiere instalación, dependencias de Node ni compilación. Para verlo de forma local, abre `index.html` en un navegador.

## Actualizar GitHub Pages rápidamente

**Opción con GitHub Desktop**

1. Abre GitHub Desktop y clona `lorenzoing/lorenzoing.github.io` si aún no lo has hecho.
2. Crea una rama de respaldo o verifica que el estado previo esté confirmado en un commit.
3. Extrae el contenido del ZIP de entrega **dentro de la carpeta raíz** del repositorio local, reemplazando `index.html`, `css/`, `js/` y `assets/`. No crees una carpeta intermedia.
4. En GitHub Desktop revisa los cambios, crea un commit como `Rediseñar portafolio y actualizar contenido`, y pulsa **Push origin**.
5. Si trabajaste en una rama, abre un pull request para integrar los cambios en `main`; si trabajaste en `main`, GitHub Pages publicará la versión de esa rama según la configuración existente.

**Opción con Git** (desde la carpeta raíz del repositorio después de copiar los archivos):

```bash
git status
git add -A
git commit -m "Rediseñar portafolio y actualizar contenido"
git push origin main
```

Comprueba la publicación en https://lorenzoing.github.io/ y refresca con Ctrl+F5 si ves la versión en caché.

## Cambios de esta versión

- Redacción personal basada en el CV, sin métricas no documentadas ni afirmaciones de habilidades sin evidencia.
- Diseño renovado con navegación móvil y menos elementos decorativos.
- Trabajos agrupados: proyecto universitario, capturas de interfaz, diagrama y visualizaciones.
- Miniaturas WebP optimizadas y ventanas de ampliación accesibles con el teclado.
- Enlaces de correo, teléfono, GitHub y hoja de vida corregidos.
- SEO básico: descripción, URL canónica, datos Open Graph y favicon válido.
- Eliminados archivos de un byte que no funcionaban.

## Información pendiente de confirmar antes de futuras ampliaciones

- Autoría y participación exacta en cada interfaz, modelo de datos y visualización.
- Tecnologías concretas usadas en esos trabajos (no se han atribuido sin respaldo).
- Enlace real de LinkedIn, si se desea incluir.
- Actualizaciones de experiencia, certificaciones y datos personales posteriores al CV aportado.

**Importante:** el PDF de hoja de vida se publica como recurso descargable en un repositorio público. Verifica que te resulte adecuado compartir los datos de contacto incluidos.
