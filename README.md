# Habla Español

Sitio de presentación bilingüe (español e inglés) para hablar y practicar español. El idioma inicial es español y la elección del visitante se guarda en el navegador.

## Desarrollo local

No requiere dependencias ni proceso de compilación. Sirve la carpeta `dist` con cualquier servidor estático:

```bash
python3 -m http.server 8000 --directory dist
```

Abre `http://localhost:8000`.

## GitHub Pages

La versión pública en [hablar-espanol.com](https://hablar-espanol.com/) se sirve desde la raíz del repositorio. `index.html` se genera a partir de `dist/index.html` con:

```bash
node scripts/sync-github-pages.mjs
```

Ejecuta ese comando después de cambiar el HTML de `dist`. Los estilos, el JavaScript, la imagen y el video siguen en `dist`.

## Archivos principales

- `dist/index.html`: contenido y estructura.
- `dist/styles.css`: diseño responsive.
- `dist/script.js`: selector de idioma.
- `dist/assets/hero-mujer-letras.png`: imagen generada para este sitio con imagegen, inspirada en una referencia visual provista por el usuario.
- `dist/assets/victoria-intro.mp4`: video provisto desde el proyecto local `vicky-pronunciation`.
- `.openai/hosting.json`: configuración de publicación en Sites.
