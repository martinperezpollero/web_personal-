import type { Locale } from './utils';

/**
 * Cadenas de interfaz (no de contenido). El contenido va en Markdown /
 * content collections, nunca acá (CLAUDE.md §7). Nada se traduce solo:
 * cada idioma se escribe (CLAUDE.md §5).
 */
export const ui = {
  es: {
    'lang.label': 'ES',
    'nav.aria': 'Navegación principal',
    'nav.projects': 'proyectos',
    'nav.publications': 'publicaciones',
    'projects.empty': 'TODO: cargar fichas de proyecto (CLAUDE.md §10). Nada publicado todavía.',
    'publications.empty':
      'TODO: exportar la colección de Zotero a src/data/publications.json en CSL-JSON (CLAUDE.md §7).',
    'footer.todo': 'TODO: correo público y perfiles (CLAUDE.md §10).',
  },
  en: {
    'lang.label': 'EN',
    'nav.aria': 'Main navigation',
    'nav.projects': 'projects',
    'nav.publications': 'publications',
    'projects.empty': 'TODO: add project entries (CLAUDE.md §10). Nothing published yet.',
    'publications.empty':
      'TODO: export the Zotero library to src/data/publications.json as CSL-JSON (CLAUDE.md §7).',
    'footer.todo': 'TODO: public email and profiles (CLAUDE.md §10).',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UIKey = keyof (typeof ui)['es'];
