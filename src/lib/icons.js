// Biblioteca de íconos SVG en línea (sin dependencias). Cada entrada define el
// contenido interno del <svg>; <Icon name="..." /> se encarga de envolverlo.
// Los íconos de marca llevan su color; los de interfaz usan `currentColor`.

const stroke = (inner) =>
  `<g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${inner}</g>`

const icons = {
  // Redes
  github: {
    body: '<path fill="currentColor" d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.2-3.1-.1-.4-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z"/>',
  },
  linkedin: {
    body: '<path fill="currentColor" d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2ZM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM7.1 20.5H3.5V9h3.6v11.5ZM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0Z"/>',
  },

  // Tecnologías
  next: {
    body: '<circle cx="12" cy="12" r="10.5" fill="none" stroke="currentColor" stroke-width="1.2"/><path fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" d="M8.5 16.5v-9l8 10.5M15.5 7.5V13"/>',
  },
  node: {
    body: '<path fill="#5FA04E" d="M12 1.6 2.9 6.8v10.4l9.1 5.2 9.1-5.2V6.8z"/><path fill="#3E7A2F" d="M12 1.6v20.8l9.1-5.2V6.8z"/>',
  },
  html: {
    body: '<path fill="#E34F26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>',
  },
  css: {
    body: '<path fill="#3B6FE0" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>',
  },
  javascript: {
    body: '<rect width="24" height="24" rx="2" fill="#F7DF1E"/><text x="21" y="20.5" text-anchor="end" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10" font-weight="700" fill="#111">JS</text>',
  },
  react: {
    body: '<g fill="none" stroke="#61DAFB" stroke-width="1.2"><ellipse cx="12" cy="12" rx="10.5" ry="4.2"/><ellipse cx="12" cy="12" rx="10.5" ry="4.2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10.5" ry="4.2" transform="rotate(120 12 12)"/></g><circle cx="12" cy="12" r="2" fill="#61DAFB"/>',
  },
  tailwind: {
    body: '<path fill="#38BDF8" d="M12 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12 4.8zM6 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.665 17.818 9.026 19.2 12 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6 12z"/>',
  },
  astro: {
    body: '<path fill="currentColor" d="M9.4 2.2c.2-.5.6-.7 1-.7h3.2c.4 0 .8.2 1 .7l4.6 13.4c-1.7-.9-3.6-1.4-5.6-1.6L12.2 7.6c0-.2-.3-.2-.4 0L10.4 14c-2 .2-3.9.7-5.6 1.6z"/><path fill="#BC52EE" d="M8.3 17.4c1.1-.6 2.3-.8 3.7-.8s2.6.2 3.7.8c0 1.9-1.6 3.8-3.7 5.1-2.1-1.3-3.7-3.2-3.7-5.1z"/>',
  },
  git: {
    body: '<path fill="#F05032" d="M23.546 10.93 13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.658 2.66a1.838 1.838 0 1 1-1.103 1.033l-2.48-2.48v6.525a1.838 1.838 0 1 1-1.512-.054V8.835a1.838 1.838 0 0 1-.997-2.41L7.636 3.7.45 10.881a1.55 1.55 0 0 0 0 2.189l10.48 10.477a1.55 1.55 0 0 0 2.186 0l10.43-10.43a1.55 1.55 0 0 0 0-2.187"/>',
  },
  vercel: {
    body: '<path fill="currentColor" d="M12 2.5 23 21.5H1z"/>',
  },

  // Interfaz
  browser: { body: stroke('<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/>') },
  mobile: { body: stroke('<rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M11 18.5h2"/>') },
  pen: {
    body: stroke(
      '<path d="m12 19 7-7 3 3-7 7z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18z"/><path d="m2 2 7.586 7.586"/><circle cx="11" cy="11" r="2"/>',
    ),
  },
  chevron: { body: stroke('<path d="m6 9 6 6 6-6"/>') },
  arrow: { body: stroke('<path d="M5 12h14M13 6l6 6-6 6"/>') },
  code: { body: stroke('<path d="m16 18 6-6-6-6M8 6l-6 6 6 6M14 4l-4 16"/>') },
  mail: { body: stroke('<rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="m3 7 9 6 9-6"/>') },
  pin: { body: stroke('<path d="M19.5 10c0 5.5-7.5 11.5-7.5 11.5S4.5 15.5 4.5 10a7.5 7.5 0 0 1 15 0z"/><circle cx="12" cy="10" r="2.5"/>') },
}

export default icons
