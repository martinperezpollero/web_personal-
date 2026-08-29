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
    'nav.game': 'juego',
    'nav.cv': 'cv',
    'projects.empty': 'TODO: cargar fichas de proyecto (CLAUDE.md §10). Nada publicado todavía.',
    'publications.empty':
      'TODO: exportar la colección de Zotero a src/data/publications.json en CSL-JSON (CLAUDE.md §7).',
    'footer.todo': 'TODO: correo público y perfiles (CLAUDE.md §10).',
    'home.bio.linea': 'TODO: una línea de presentación (§2, §11.3).',
    'home.bio.parrafo': 'TODO: un párrafo de bio — la convergencia de las dos líneas de trabajo (§2).',
    'bio.title': 'bio',
    'bio.larga.todo': 'TODO: bio larga para prensa, comités y presentaciones. En español, escrita a mano (§2).',
    'bio.long.link': 'bio larga →',
    'notfound.title': 'no está en la carta',
    'notfound.body': 'Esa página no existe o cambió de lugar.',
    'notfound.home': 'volver al inicio',
    'contact.title': 'contacto',
    'contact.emailNote': '(§2: decidir si va este correo o uno institucional)',
    'contact.pending': 'pendiente',
    'game.title': 'juego',
    'game.lede': 'Dos ejercicios breves sobre cartografía: leer una leyenda y reconocer un terreno.',
    'game.l1': 'nivel 1 — leyenda',
    'game.l2': 'nivel 2 — el terreno',
    'game.mapCaption': 'Carta de la zona de los cerros Campanero. Redibujo con IA a partir de una hoja topográfica — no es un documento de agrimensura.',
    'game.body':
      'Primera ronda de un juego sobre cartografías lúdicas. Si crece (más rondas, niveles), pasa a satélite (§1, §9): repo y diseño propios, y el hub queda con el enlace.',
    'portrait.alt': 'Foto de Martín Pérez Pollero (marcador de posición)',
  },
  en: {
    'lang.label': 'EN',
    'nav.aria': 'Main navigation',
    'nav.projects': 'projects',
    'nav.publications': 'publications',
    'nav.cv': 'cv',
    'projects.empty': 'TODO: add project entries (CLAUDE.md §10). Nothing published yet.',
    'publications.empty':
      'TODO: export the Zotero library to src/data/publications.json as CSL-JSON (CLAUDE.md §7).',
    'footer.todo': 'TODO: public email and profiles (CLAUDE.md §10).',
    'home.bio.linea': 'TODO: a one-line intro, written in English (§2, §5).',
    'home.bio.parrafo': 'TODO: a one-paragraph bio, written in English (§2, §5).',
    'bio.title': 'bio',
    'bio.larga.todo': 'TODO: long bio for press, committees and talks. Written in English by a person (§2, §5).',
    'bio.long.link': 'long bio →',
    'notfound.title': 'off the map',
    'notfound.body': 'That page does not exist or has moved.',
    'notfound.home': 'back to the start',
    'contact.title': 'contact',
    'contact.emailNote': '(§2: decide whether to show this address or an institutional one)',
    'contact.pending': 'pending',
    'game.title': 'game',
    'game.lede': 'Two short exercises about cartography: reading a legend and recognising a terrain.',
    'game.l1': 'level 1 — legend',
    'game.l2': 'level 2 — the terrain',
    'game.mapCaption': 'Map of the Campanero hills area. AI redraw from a topographic sheet — not a survey document.',
    'game.body':
      'The first round of a game about playful cartography. If it grows (more rounds, levels), it becomes a satellite (§1, §9): its own repo and design, with the hub keeping the link.',
    'portrait.alt': 'Photo of Martín Pérez Pollero (placeholder)',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UIKey = keyof (typeof ui)['es'];
