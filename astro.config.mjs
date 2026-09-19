import { defineConfig } from 'astro/config';

// El ruteo bilingüe se maneja a mano con carpetas /es y /en y helpers en
// src/i18n/ (CLAUDE.md §5). No se usa la config i18n de Astro para no meter
// redirecciones automáticas fuera de nuestro control.
export default defineConfig({
  // Dominio definitivo (CLAUDE.md §11.2), comprado 19/09/2026.
  site: 'https://martinperezpollero.com',
  trailingSlash: 'always',
});
