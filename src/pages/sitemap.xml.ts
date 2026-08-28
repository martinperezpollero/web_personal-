import type { APIRoute } from 'astro';

/*
  Sitemap escrito a mano (sin dependencia). Enumera las rutas del hub; cada
  una existe en /es/ y /en/. Al agregar una página nueva, sumarla acá.
  Las URLs usan `site` de astro.config.mjs — hoy es un placeholder (§11.2).
*/
const paths = [
  '/es/',
  '/en/',
  '/es/proyectos/',
  '/en/projects/',
  '/es/publicaciones/',
  '/en/publications/',
  '/es/bio/',
  '/en/bio/',
  '/es/juego/',
  '/en/game/',
];

export const GET: APIRoute = ({ site }) => {
  const base = site?.toString().replace(/\/$/, '') ?? '';
  const urls = paths
    .map((p) => {
      const alts = paths
        .filter((q) => q.replace(/^\/(es|en)\//, '') === p.replace(/^\/(es|en)\//, ''))
        .map((q) => {
          const loc = q.startsWith('/en/') ? 'en' : 'es';
          return `    <xhtml:link rel="alternate" hreflang="${loc}" href="${base}${q}"/>`;
        })
        .join('\n');
      return `  <url>\n    <loc>${base}${p}</loc>\n${alts}\n  </url>`;
    })
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
