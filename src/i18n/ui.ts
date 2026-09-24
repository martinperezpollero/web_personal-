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
    'nav.collaborate': 'colaboremos',
    'nav.game': 'juego',
    'nav.cv': 'cv',
    'cv.newtab': '(abre CVUy en una pestaña nueva)',
    'projects.empty': 'TODO: cargar fichas de proyecto (CLAUDE.md §10). Nada publicado todavía.',
    'publications.empty':
      'TODO: exportar la colección de Zotero a src/data/publications.json en CSL-JSON (CLAUDE.md §7).',
    'home.bio.linea': 'TODO: una línea de presentación (§2, §11.3).',
    'home.bio.parrafo': 'TODO: un párrafo de bio — la convergencia de las dos líneas de trabajo (§2).',
    'bio.title': 'bio',
    'bio.corta.todo':
      'TODO: bio corta en tercera persona, para que la copien comités y organizadores (~50 palabras) (§2).',
    'bio.larga.todo': 'TODO: bio larga para prensa, comités y presentaciones. En español, escrita a mano (§2).',
    'bio.long.link': 'bio larga →',
    'bio.photo.download': 'descargar foto ↓',
    'copy.button': 'copiar',
    'copy.done': 'copiado ✓',
    'notfound.title': 'no está en la carta',
    'notfound.body': 'Esa página no existe o cambió de lugar.',
    'notfound.home': 'volver al inicio',
    'contact.title': 'contacto',
    'contact.pending': 'pendiente',
    'game.title': 'juego',
    'game.lede': 'Dos ejercicios breves sobre cartografía: leer una leyenda y reconocer un terreno.',
    'game.l1': 'nivel 1 — leyenda',
    'game.l2': 'nivel 2 — el terreno',
    'game.body': 'Primera ronda de un juego sobre cartografías lúdicas. Vienen más niveles.',
    'portrait.alt': 'Martín Pérez Pollero, retrato en blanco y negro',
    'skip.link': 'Saltar al contenido',
  },
  en: {
    'lang.label': 'EN',
    'nav.aria': 'Main navigation',
    'nav.projects': 'projects',
    'nav.publications': 'publications',
    'nav.collaborate': 'collaborate',
    'nav.game': 'game',
    'nav.cv': 'cv',
    'cv.newtab': '(opens CVUy in a new tab)',
    'projects.empty': 'TODO: add project entries (CLAUDE.md §10). Nothing published yet.',
    'publications.empty':
      'TODO: export the Zotero library to src/data/publications.json as CSL-JSON (CLAUDE.md §7).',
    'home.bio.linea': 'TODO: a one-line intro, written in English (§2, §5).',
    'home.bio.parrafo': 'TODO: a one-paragraph bio, written in English (§2, §5).',
    'bio.title': 'bio',
    'bio.corta.todo':
      'TODO: short third-person bio, for committees and organisers to copy (~50 words) (§2).',
    'bio.larga.todo': 'TODO: long bio for press, committees and talks. Written in English by a person (§2, §5).',
    'bio.long.link': 'long bio →',
    'bio.photo.download': 'download photo ↓',
    'copy.button': 'copy',
    'copy.done': 'copied ✓',
    'notfound.title': 'off the map',
    'notfound.body': 'That page does not exist or has moved.',
    'notfound.home': 'back to the start',
    'contact.title': 'contact',
    'contact.pending': 'pending',
    'game.title': 'game',
    'game.lede': 'Two short exercises about cartography: reading a legend and recognising a terrain.',
    'game.l1': 'level 1 — legend',
    'game.l2': 'level 2 — the terrain',
    'game.body': 'The first round of a game about playful cartography. More levels are coming.',
    'portrait.alt': 'Martín Pérez Pollero, black-and-white portrait',
    'skip.link': 'Skip to content',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UIKey = keyof (typeof ui)['es'];
