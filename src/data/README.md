# src/data

## publications.json

Exportación **CSL-JSON** de la colección de Zotero (CLAUDE.md §7).

Flujo:

1. Se actualiza la colección en Zotero.
2. Se exporta a CSL-JSON.
3. Se reemplaza este archivo con la exportación.
4. Commit.

**No se editan publicaciones a mano.** El hub muestra entre cinco y ocho piezas
seleccionadas; el CV completo va aparte en PDF.

Hoy: `[]` — TODO primera exportación. Anclajes públicos por proyecto en CLAUDE.md §2.

## publications.sample.json

Datos de ejemplo (los anclajes de CLAUDE.md §2) para ver el diseño de la lista
mientras no hay export real. **No es la fuente**: no se publica desde acá.

Para previsualizar con datos:

    cp src/data/publications.sample.json src/data/publications.json
    # …mirar el sitio…
    git checkout src/data/publications.json   # volver a []

El formateo (autores, año, revista, DOI, acceso abierto) vive en `src/lib/csl.ts`
y se renderiza con `src/components/PublicationList.astro`.
