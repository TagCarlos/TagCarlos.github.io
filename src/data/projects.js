// Cada proyecto se renderiza con <ProjectCard />. Agrega, edita o quita entradas
// aquí sin tocar los componentes.
//  - status: 'deployed' | 'soon'
//  - demo / repo: deja '' para ocultar el enlace
//  - images: coloca tus capturas en public/projects/<slug>/ y ajusta las rutas
const projects = [
  {
    slug: 'aroundthemx',
    title: 'Aroundthemx',
    status: 'deployed',
    overview:
      'Proyecto que es una aplicación web full-stack. Incluye tanto el frontend como el backend del sitio. El frontend, desarrollado con React, gestiona el registro de usuarios, la autenticación y la administración de tokens, mientras que el backend, basado en Express.js y MongoDB, proporciona una API RESTful para los datos de usuarios y tarjetas. La aplicación está protegida con SSL y utiliza prácticas de desarrollo modernas.',
    features: [
      'Interfaz de usuario: Registro y autenticación de usuarios. Componentes de React para inicio de sesión, registro, ruta protegida e información emergente. Almacenamiento local y manipulación de tokens.',
      'Backend: MongoDB para la gestión de bases de datos NoSQL. Esquemas y modelos para Usuarios y Tarjetas. Manejo de errores con códigos de estado (400, 404, 500).',
      'Protegido con SSL y gestionado mediante Nginx y pm2.',
    ],
    achievements: [
      'Desarrollé una aplicación full-stack con frontend en React y backend en Express.js.',
      'Se implementaron la autenticación de usuarios, la gestión de tokens y el enrutamiento seguro.',
      'Interfaz responsiva para móvil y escritorio.',
      'Validación de formularios en tiempo real.',
    ],
    summary:
      'Proyecto que demuestra mi capacidad para desarrollar e implementar una aplicación web full-stack. Combinando React para el frontend y Express.js con MongoDB para el backend la integración de autenticación, consumo de APIs y manipulación del DOM en una aplicación completa.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'API REST', 'React', 'Express.js', 'Nginx', 'MongoDB', 'SSL'],
    demo: 'https://web-project-api-full-n9gtgjn4z-carlos-dev-mx.vercel.app/signin',
    repo: 'https://github.com/TagCarlos/web_project_api_full',
    images: [
      { src: '/projects/aroundthemx/1.webp', alt: 'Perfil de usuario en Aroundthemx' },
      { src: '/projects/aroundthemx/2.webp', alt: 'Tarjetas con imágenes en Aroundthemx' },
      { src: '/projects/aroundthemx/3.webp', alt: 'Inicio de sesión de Aroundthemx' },
    ],
  },
  {
    slug: 'narcisa',
    title: 'Narcisa',
    status: 'soon',
    overview:
      'Landing page para marca de joyería, con un diseño editorial y elegante.',
    features: [
      'Hero con fotografía y tipografía serif de estilo editorial.',
      'Secciones de colección y llamada a la acción.',
      'Diseño mobile-first con breakpoints de Tailwind.',
    ],
    achievements: [
      'Maquetación completa usando solo utilidades de Tailwind.',
      'Paleta y tipografía coherentes con la identidad de la marca.',
    ],
    summary: 'Ejercicio enfocado en diseño visual, composición y dominio de Tailwind CSS.',
    tech: ['Tailwind CSS', 'HTML5', 'React+Vite'],
    demo: 'https://narcisa.netlify.app/',
    // repo: '#',
    images: [
      { src: '/projects/narcisa/1.webp', alt: 'Hero de la landing Narcisa' },
      { src: '/projects/narcisa/2.webp', alt: 'Colección de joyería en Narcisa' },
      { src: '/projects/narcisa/3.webp', alt: 'Sección de contacto de Narcisa' },
    ],
  },
  {
    slug: 'favorite-gifs',
    title: 'Favorite Gifs',
    status: 'deployed',
    overview:
      'Buscador de GIFs con sistema de caché que optimiza el rendimiento evitando solicitudes duplicadas a la API.',
    features: [
      'Búsqueda de GIFs con la API de Giphy.',
      'Caché en memoria para no repetir solicitudes.',
      'Historial de búsquedas con navegación instantánea.',
      'Persistencia del historial en localStorage.',
    ],
    achievements: [
      'Menos llamadas a la API gracias a la caché de resultados.',
      'Tipado estricto con TypeScript.',
    ],
    summary: 'Proyecto centrado en rendimiento, consumo de APIs y manejo de estado en el navegador.',
    tech: ['TypeScript', 'API de Giphy', 'localStorage'],
    demo: 'https://cosmic-travesseiro-53959d.netlify.app/',
    //repo: '#',
    images: [
      { src: '/projects/favorite-gifs/1.webp', alt: 'Buscador de Favorite Gifs' },
      { src: '/projects/favorite-gifs/2.webp', alt: 'Resultados de búsqueda en Favorite Gifs' },
      { src: '/projects/favorite-gifs/3.webp', alt: 'Historial de búsquedas en Favorite Gifs' },
    ],
  },
  {
    slug: 'finanzas',
    title: 'Panel de Control de Finanzas Personales',
    status: 'deployed',
    overview:
      'Aplicación web full stack para registrar y visualizar ingresos y gastos personales. El backend expone una API REST construida con Node.js y Express que persiste los datos en un archivo JSON local. El frontend, desarrollado en React con Tailwind CSS, consume esa API y actualiza la interfaz en tiempo real cuando el usuario agrega o elimina transacciones, mostrando además un resumen automático de ingresos, gastos y balance total.',
    features: [
      'Registro de transacciones con descripción, monto, tipo, categoría y fecha.',
      'Resumen financiero en tarjetas: balance, total de ingresos y total de gastos.',
      'Listado de transacciones ordenado por fecha, con indicadores visuales por tipo.',
      'Eliminación de transacciones con actualización inmediata de la interfaz.',
      'Validación de datos en el servidor, con códigos HTTP y mensajes de error claros.',
      'Manejo de estados de carga y de error en la interfaz.',
    ],
    achievements: [
      'Diseñé una API REST con arquitectura en capas rutas, controladores y servicios',
      'Implementé un CRUD funcional (GET, POST, DELETE) con identificadores únicos',
      'Probé los endpoints con Postman, incluyendo casos de error.'
    ],
    summary: 'Este proyecto me permitió construir una aplicación full stack completa, desde el diseño de la API hasta la interfaz de usuario, y reforzar buenas prácticas como la separación de responsabilidades, la validación de datos y la depuración sistemática de errores de integración.',
    tech: ['React+Vite', 'Tailwind CSS', 'JavaScript', 'Node.js', 'Express.js', 'CORS', 'dotenv', 'Nodemon', 'Git'],
    demo: 'https://financial-traker-frontend.onrender.com',
    //repo: '#',
    images: [
      { src: '/projects/finanzas/1.webp', alt: 'Inicio de sesion finanzas' },
      { src: '/projects/finanzas/2.webp', alt: 'Panel de finanzas' },
      { src: '/projects/finanzas/3.webp', alt: 'Panel de finanzas con historial' },
    ],
  },
]

export default projects
