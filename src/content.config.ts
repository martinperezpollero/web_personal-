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

export const collections = {
  proyectos: defineCollection({
    loader: glob({ pattern: '*.md', base: './src/content/es/proyectos' }),
    schema: proyecto,
  }),
  projects: defineCollection({
    loader: glob({ pattern: '*.md', base: './src/content/en/projects' }),
    schema: proyecto,
  }),
};
