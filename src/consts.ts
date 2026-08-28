/*
  consts.ts — constantes de todo el sitio. Lo que se repite en varios lados
  vive acá, no copiado en cada componente.

  NO va acá el color ni el tamaño (eso es tokens.css) ni el contenido largo
  (eso es Markdown). Solo identificadores y rutas.
*/
import type { Locale } from './i18n/utils';

/** El nombre, una de las tres constantes que viajan a todos los sitios (§3). */
export const SITE_NAME = 'Martín Pérez Pollero';

/** Firma académica, unificada con guion (§2). Para metadatos y citas. */
export const SIGN = 'Pérez-Pollero, M.';

/** Base de Martín (§2). Coordenada decorativa del eyebrow de la home. */
export const BASE_COORD: Record<Locale, { fix: string; place: string }> = {
  es: { fix: '34°54′S 56°11′O', place: 'Montevideo' },
  en: { fix: '34°54′S 56°11′W', place: 'Montevideo' },
};

/** CV público en PDF (§7, §10). El archivo todavía no existe: ver public/cv/. */
export const CV_PATH = '/cv/cv-martin-perez-pollero-2026.pdf';

/**
 * Navegación del encabezado. `route` se resuelve a `/{lang}/{segmento}/`;
 * `cv` es un enlace directo al PDF. El hub es breve (§1): esta lista no crece
 * sin conversarlo.
 */
export const NAV = [
  { key: 'projects', kind: 'route', es: 'proyectos', en: 'projects' },
  { key: 'publications', kind: 'route', es: 'publicaciones', en: 'publications' },
  { key: 'cv', kind: 'file', es: 'cv', en: 'cv' },
] as const;

/** Afiliación actual (§2), para JSON-LD. */
export const AFFILIATION = 'Universidad Católica del Uruguay';
