import { defineConfig } from 'astro/config';

// El ruteo bilingüe se maneja a mano con carpetas /es y /en y helpers en
// src/i18n/ (CLAUDE.md §5). No se usa la config i18n de Astro para no meter
// redirecciones automáticas fuera de nuestro control.
export default defineConfig({
  // TODO: dominio definitivo (CLAUDE.md §11.2). Necesario para hreflang y sitemap.
  site: 'https://example.com',
  trailingSlash: 'always',
});
