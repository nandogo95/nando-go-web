// Mapa del sitio para Google: se genera solo a partir de la lista de proyectos.
import { proyectos } from '../data/proyectos.js';

export function GET({ site }) {
  const rutas = ['/', '/contact/', ...proyectos.map((p) => `/${p.slug}/`)];
  const urls = rutas.map((r) => `  <url><loc>${new URL(r, site)}</loc></url>`).join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
}
