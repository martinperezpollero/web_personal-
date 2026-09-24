import type { APIRoute } from 'astro';

/*
  Sitemap escrito a mano (sin dependencia). Enumera las rutas del hub como
  pares [es, en], porque el segmento no siempre coincide entre idiomas
  (proyectos/projects, publicaciones/publications, juego/game,
  colaboremos/collaborate) — emparejar por string, como hacía antes, dejaba
  a cada página referenciándose solo a sí misma en el hreflang. Al agregar
  una página nueva, sumar el par acá.
  Las URLs usan `site` de astro.config.mjs — hoy es un placeholder (§11.2).
*/
const pairs: [string, string][] = [
  ['/es/', '/en/'],
  ['/es/proyectos/', '/en/projects/'],
  ['/es/publicaciones/', '/en/publications/'],
  ['/es/bio/', '/en/bio/'],
  ['/es/juego/', '/en/game/'],
  ['/es/colaboremos/', '/en/collaborate/'],
];

export const GET: APIRoute = ({ site }) => {
  const base = site?.toString().replace(/\/$/, '') ?? '';
  const urls = pairs
    .flatMap(([es, en]) => [
      { loc: es, alts: [es, en] },
      { loc: en, alts: [es, en] },
    ])
    .map(({ loc, alts }) => {
      const links = alts
        .map((p) => {
          const lang = p.startsWith('/en/') ? 'en' : 'es';
          return `    <xhtml:link rel="alternate" hreflang="${lang}" href="${base}${p}"/>`;
        })
        .join('\n');
      return `  <url>\n    <loc>${base}${loc}</loc>\n${links}\n  </url>`;
    })
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
