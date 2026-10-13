# Portafolio — Juan Carlos López Orozco

Sitio personal estático construido con **Astro** y **Tailwind CSS v4**. Todo el contenido vive en arreglos de datos; los componentes solo se encargan de la presentación.

## Comandos

| Comando           | Acción                                     |
| ----------------- | ------------------------------------------ |
| `npm install`     | Instala dependencias                       |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321` |
| `npm run build`   | Genera el sitio estático en `dist/`        |
| `npm run preview` | Sirve la build localmente                  |
| `npm run lint`    | Ejecuta oxlint                             |

## Estructura

```
src/
├─ data/          ← contenido editable (perfil, nav, tecnologías, servicios, proyectos, créditos)
├─ lib/icons.js   ← íconos SVG en línea usados por <Icon name="..." />
├─ components/    ← componentes .astro reutilizables
├─ layouts/       ← Layout base (<head>, fuentes, animaciones de entrada)
├─ pages/         ← index.astro
└─ styles/        ← global.css (tema de Tailwind)
public/
└─ projects/<slug>/  ← capturas de cada proyecto
```

## Despliegue

Listo para Vercel: framework preset _Astro_, comando `npm run build`, directorio de salida `dist`.
