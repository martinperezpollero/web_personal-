/*
  csl.ts — helpers para formatear publicaciones exportadas de Zotero en
  CSL-JSON (CLAUDE.md §7). No se traducen títulos ni nombres de revistas
  (§5): salen en su idioma original. Solo las etiquetas de interfaz cambian
  de idioma, y esas viven en el componente, no acá.
*/

export interface CslName {
  family?: string;
  given?: string;
  literal?: string;
}

export interface CslDate {
  'date-parts'?: number[][];
  literal?: string;
}

export interface CslItem {
  id?: string;
  type?: string;
  title?: string;
  'container-title'?: string;
  'collection-title'?: string;
  author?: CslName[];
  editor?: CslName[];
  issued?: CslDate;
  DOI?: string;
  URL?: string;
  page?: string;
  volume?: string;
  issue?: string;
  publisher?: string;
  'publisher-place'?: string;
  edition?: string;
  genre?: string;
}

/** "Pérez Pollero, M." — inicial del nombre, apellido primero. */
function formatName(n: CslName): string {
  if (n.literal) return n.literal;
  const family = (n.family ?? '').trim();
  const given = (n.given ?? '').trim();
  if (!family) return given;
  const initials = given
    .split(/[\s-]+/)
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + '.')
    .join(' ');
  return initials ? `${family}, ${initials}` : family;
}

/**
 * Lista de autores: "A, X.; B, Y." — sin recortar, el hub muestra pocas piezas.
 * Si no hay autores pero sí editores (obra editada), se listan con "(ed.)".
 */
export function authors(item: CslItem): string {
  const a = (item.author ?? []).map(formatName).filter(Boolean);
  if (a.length) return a.join('; ');
  const e = (item.editor ?? []).map(formatName).filter(Boolean);
  if (e.length) return e.join('; ') + (e.length > 1 ? ' (eds.)' : ' (ed.)');
  return '';
}

export function year(item: CslItem): string {
  const y = item.issued?.['date-parts']?.[0]?.[0];
  if (y) return String(y);
  const lit = item.issued?.literal?.match(/\d{4}/)?.[0];
  return lit ?? '';
}

/** Dónde salió: revista vol(nº), pp. — o editorial para capítulos y libros. */
export function venue(item: CslItem): string {
  const parts: string[] = [];
  if (item.genre) parts.push(item.genre);
  const container = item['container-title'];
  if (container) {
    let c = container;
    if (item.volume) c += ` ${item.volume}`;
    if (item.issue) c += `(${item.issue})`;
    parts.push(c);
  }
  if (item.publisher && !container) parts.push(item.publisher);
  else if (item.publisher && container) parts.push(item.publisher);
  if (item.page) parts.push(`pp. ${item.page.replace(/-/g, '–')}`);
  return parts.join(', ');
}

export function doiUrl(item: CslItem): string | undefined {
  if (!item.DOI) return undefined;
  return `https://doi.org/${item.DOI.replace(/^https?:\/\/doi\.org\//, '')}`;
}

/** Enlace al texto en acceso abierto, si no es el mismo DOI. */
export function openAccessUrl(item: CslItem): string | undefined {
  if (!item.URL) return undefined;
  if (item.DOI && item.URL.includes(item.DOI)) return undefined;
  return item.URL;
}

export function sortByDateDesc(items: CslItem[]): CslItem[] {
  return [...items].sort((a, b) => Number(year(b) || 0) - Number(year(a) || 0));
}
