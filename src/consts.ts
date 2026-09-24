/*
  consts.ts — constantes de todo el sitio. Lo que se repite en varios lados
  vive acá, no copiado en cada componente.

  NO va acá el color ni el tamaño (eso es tokens.css) ni el contenido largo
  (eso es Markdown). Solo identificadores y rutas.
*/
import type { Locale } from './i18n/utils';

/** El nombre, una de las tres constantes que viajan a todos los sitios (§3). */
export const SITE_NAME = 'Martín Pérez Pollero';

/** Firma académica: "Pérez Pollero, M." — sin guion (§2). Para metadatos y citas. */
export const SIGN = 'Pérez Pollero, M.';

/**
 * Base de Martín (§2). Coordenada del eyebrow de la home y de /bio/.
 * El número no se traduce; solo cambia el cardinal (O en español, W en inglés).
 */
export const BASE_COORD: Record<Locale, { fix: string; place: string }> = {
  es: { fix: '34°54′36.194″S 56°10′48.420″O', place: 'Montevideo' },
  en: { fix: '34°54′36.194″S 56°10′48.420″W', place: 'Montevideo' },
};

/**
 * El CV completo vive en CVUy (el CV público de Martín en la red uruguaya).
 * El hub no aloja un PDF; enlaza acá. Confirmar que es el permalink que se
 * quiere público.
 */
export const CV_URL =
  'https://exportcvuy.anii.org.uy/cv/?7ed9909c3cbde1b8004c19b4613454d8d86bc4f2feb04e77e3dc358d91bd94a82a94a44cb1824e8564a3ac4781ffff721437e6ecec64a9b3329b362b090f4849';

/**
 * Navegación del encabezado. `route` se resuelve a `/{lang}/{segmento}/`;
 * `cv` es el enlace al CVUy. El hub es breve (§1): esta lista no crece sin
 * conversarlo.
 */
export const NAV = [
  { key: 'projects', kind: 'route', es: 'proyectos', en: 'projects' },
  { key: 'publications', kind: 'route', es: 'publicaciones', en: 'publications' },
  { key: 'collaborate', kind: 'route', es: 'colaboremos', en: 'collaborate' },
  { key: 'game', kind: 'route', es: 'juego', en: 'game' },
  { key: 'cv', kind: 'external', es: 'cv', en: 'cv' },
] as const;

/** Ruta a la foto (§10). Retrato en blanco y negro, 453×551. */
export const PORTRAIT = '/img/martin-perez-pollero.jpg';

/**
 * Imagen por defecto para og:image/twitter:image, una por idioma (mismo
 * diseño, tagline traducida). 1200×630. Las páginas pueden pisarla con su
 * propia `ogImage` si hace falta.
 */
export const OG_IMAGE: Record<Locale, string> = {
  es: '/img/og-es.jpg',
  en: '/img/og-en.jpg',
};

/** Correo público: el institucional de la UCU (§2). */
export const EMAIL = 'martin.perez@ucu.edu.uy';

/** Afiliación actual (§2), para JSON-LD. */
export const AFFILIATION = 'Universidad Católica del Uruguay';

/**
 * Capítulo que sustenta el proyecto doctoral (§2, anclaje de
 * biografias-ludicas.md): Pérez Pollero, M. y Monteagudo, M. J. (2025).
 * «La biografía lúdica...», en Cartografía lúdica: un mapa vivo por
 * explorar. Dykinson, pp. 247–265. Página del libro en la editorial
 * (verificada por ISBN, no hay DOI propio del capítulo).
 */
export const BIOGRAFIA_LUDICA_URL =
  'https://www.dykinson.com/libros/cartografia-ludica-un-mapa-vivo-por-explorar/9791370062736/';
