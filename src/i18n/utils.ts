export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

/** Segmentos de ruta que cambian de nombre entre idiomas. */
const segments: Record<string, Record<Locale, string>> = {
  proyectos: { es: 'proyectos', en: 'projects' },
  projects: { es: 'proyectos', en: 'projects' },
  publicaciones: { es: 'publicaciones', en: 'publications' },
  publications: { es: 'publicaciones', en: 'publications' },
  juego: { es: 'juego', en: 'game' },
  game: { es: 'juego', en: 'game' },
  colaboremos: { es: 'colaboremos', en: 'collaborate' },
  collaborate: { es: 'colaboremos', en: 'collaborate' },
};

export function getLocaleFromPath(pathname: string): Locale {
  const first = pathname.split('/').filter(Boolean)[0];
  return (locales as readonly string[]).includes(first) ? (first as Locale) : defaultLocale;
}

/**
 * Ruta equivalente en el otro idioma, conservando la página (CLAUDE.md §5).
 *
 * TODO: cuando una página no exista en el idioma destino, el selector debería
 * indicarlo en lugar de enlazar a una ruta rota. Hoy todas las páginas del hub
 * existen en ambos idiomas, así que no hace falta todavía.
 */
export function alternatePath(pathname: string, target: Locale): string {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length === 0) return `/${target}/`;
  parts[0] = target;
  for (let i = 1; i < parts.length; i++) {
    const map = segments[parts[i]];
    if (map) parts[i] = map[target];
  }
  return '/' + parts.join('/') + '/';
}
