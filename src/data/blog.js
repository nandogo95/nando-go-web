// Ayudas del blog: lista de entradas publicadas (sin borradores), la más reciente primero.
import { getCollection } from 'astro:content';

export async function entradasBlog() {
  const todas = await getCollection('blog', ({ data }) => !data.borrador);
  return todas.sort((a, b) => b.data.fecha.valueOf() - a.data.fecha.valueOf());
}

// 25.11.2026
export function fechaCorta(fecha) {
  const d = String(fecha.getUTCDate()).padStart(2, '0');
  const m = String(fecha.getUTCMonth() + 1).padStart(2, '0');
  return `${d}.${m}.${fecha.getUTCFullYear()}`;
}
