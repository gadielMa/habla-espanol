# Habla Español

Sitio de presentación bilingüe (español e inglés) para hablar y practicar español. El idioma inicial es español y la elección del visitante se guarda en el navegador.

## Desarrollo local

No requiere dependencias ni proceso de compilación. Sirve la carpeta `dist` con cualquier servidor estático:

```bash
python3 -m http.server 8000 --directory dist
```

Abre `http://localhost:8000`.

## Archivos principales

- `dist/index.html`: contenido y estructura.
- `dist/styles.css`: diseño responsive.
- `dist/script.js`: selector de idioma.
- `dist/assets/hero-mujer-letras.png`: imagen generada para este sitio con imagegen, inspirada en una referencia visual provista por el usuario.
- `dist/assets/victoria-intro.mp4`: video provisto desde el proyecto local `vicky-pronunciation`.
- `.openai/hosting.json`: configuración de publicación en Sites.
