# hub — Martín Pérez Pollero

Web personal breve que presenta a Martín y deriva a sus proyectos satélite.
Leer `CLAUDE.md` antes de tocar código: ahí están las reglas, decisiones y
preguntas abiertas.

## Correr

```sh
nvm use            # Node 26
npm install
npm run dev        # http://localhost:4321
npm run build      # genera dist/ (salida estática)
npm run preview
```

## Estructura

- `src/styles/tokens.css` — **único** lugar con decisiones visuales (CLAUDE.md §6).
- `src/i18n/` — helpers de ruteo bilingüe `/es` `/en` (CLAUDE.md §5).
- `src/content/{es,en}/` — proyectos como content collection (CLAUDE.md §7, §8).
- `src/data/publications.json` — export CSL-JSON de Zotero (CLAUDE.md §7). Hoy vacío.
- `public/cv/` — CV en PDF, cuando exista.

## Estado

Esqueleto. Sin dirección estética definida, sin dominio, sin textos de bio,
sin publicaciones cargadas. Ver los `TODO` en el código y CLAUDE.md §10–§11.
