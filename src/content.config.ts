// Entradas del blog. Para publicar una nueva, crea un archivo .md en
// src/content/blog/ (el nombre del archivo es su dirección: nando-go.com/blog/<nombre>/)
// con esta cabecera:
//
//   ---
//   titulo: 'Título de la entrada'
//   tituloCorto: 'Título breve'     (opcional; el que sale en la tarjeta)
//   descripcion: 'Resumen para Google y redes (unos 150 caracteres)'
//   fecha: 2026-12-01
//   categoria: 'Guía'
//   portada: ./mi-foto.jpg        (opcional; la foto va en la misma carpeta)
//   ---
//
// Sin portada, la tarjeta del blog muestra el título en grande.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    titulo: z.string(),
    tituloCorto: z.string().optional(), // título breve para la tarjeta del blog
    tituloSeo: z.string().optional(),
    descripcion: z.string(),
    fecha: z.coerce.date(),
    categoria: z.string().default('Blog'),
    portada: image().optional(),
    lang: z.enum(['es', 'en']).default('es'),
    borrador: z.boolean().default(false),
  }),
});

export const collections = { blog };
