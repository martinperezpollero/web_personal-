import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/*
  Proyectos (CLAUDE.md §7). Una colección por idioma; los archivos se
  corresponden por nombre entre `es/proyectos/` y `en/projects/` (CLAUDE.md §5).
  Los títulos de tesis y publicaciones no se traducen (CLAUDE.md §5): por eso
  `anclaje.cita` va en su idioma original en ambas versiones.
*/
const proyecto = z.object({
  titulo: z.string(),
  estado: z.string(),
  periodo: z.string().optional(),
  resumen: z.string(),
  colaboradores: z.array(z.string()).default([]),
  enlaceExterno: z.string().url().optional(),
  idiomasDisponibles: z.array(z.enum(['es', 'en'])).default(['es']),
  // Geo-etiqueta decorativa (dirección "relieve luminoso", §6): la sede del
  // proyecto como coordenada. Opcional; sin ella se muestra "sin coordenada".
  coordenada: z.string().optional(),
  sede: z.string().optional(),
  anclaje: z
    .object({
      cita: z.string(),
      url: z.string().url().optional(),
    })
    .optional(),
  orden: z.number().default(99),
  borrador: z.boolean().default(false),
});

/*
  Bio (CLAUDE.md §2: tres longitudes × dos idiomas). Un archivo por idioma:
  `es/bio.md` y `en/bio.md`. Las dos cortas van en el frontmatter; la larga
  (prensa, comités) es el cuerpo del Markdown. Todos los campos opcionales:
  mientras están vacíos, la web muestra un TODO en su lugar. El inglés se
  escribe, no se traduce (§5).
*/
const bio = z.object({
  linea: z.string().optional(),
  parrafo: z.string().optional(),
});

export const collections = {
  proyectos: defineCollection({
    loader: glob({ pattern: '*.md', base: './src/content/es/proyectos' }),
    schema: proyecto,
  }),
  projects: defineCollection({
    loader: glob({ pattern: '*.md', base: './src/content/en/projects' }),
    schema: proyecto,
  }),
  bioEs: defineCollection({
    loader: glob({ pattern: 'bio.md', base: './src/content/es' }),
    schema: bio,
  }),
  bioEn: defineCollection({
    loader: glob({ pattern: 'bio.md', base: './src/content/en' }),
    schema: bio,
  }),
};
