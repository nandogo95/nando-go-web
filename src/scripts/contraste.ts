// Contraste automático para textos que pueden quedar encima de fotos.
// Para cada elemento mira qué foto tiene debajo (en tres puntos a lo largo del
// texto), mide el brillo de esa zona de la foto y, si es oscura, le pone la
// clase .sobre-oscuro (que lo vuelve blanco). Sin foto debajo, el texto
// queda en su color normal.

const lienzo = document.createElement('canvas');
lienzo.width = lienzo.height = 1;
const ctx = lienzo.getContext('2d', { willReadFrequently: true });

// Brillo (0 negro – 255 blanco) de la foto `img` en el punto (x, y) de la pantalla,
// teniendo en cuenta cómo está recortada (object-fit: cover / contain).
function brilloFoto(img: HTMLImageElement, x: number, y: number): number | null {
  if (!ctx || !img.complete || !img.naturalWidth) return null;
  const r = img.getBoundingClientRect();
  const ajuste = getComputedStyle(img).objectFit;
  const nw = img.naturalWidth, nh = img.naturalHeight;
  let sx = r.width / nw, sy = r.height / nh;
  if (ajuste === 'cover') sx = sy = Math.max(sx, sy);
  else if (ajuste === 'contain') sx = sy = Math.min(sx, sy);
  const ox = (r.width - nw * sx) / 2, oy = (r.height - nh * sy) / 2;
  const nx = (x - r.left - ox) / sx, ny = (y - r.top - oy) / sy;
  if (nx < 0 || ny < 0 || nx > nw || ny > nh) return null;
  const lado = Math.max(4, 24 / sx); // zona de ~24 px en pantalla
  try {
    ctx.clearRect(0, 0, 1, 1);
    ctx.drawImage(img, nx - lado / 2, ny - lado / 2, lado, lado, 0, 0, 1, 1);
    const [R, G, B, A] = ctx.getImageData(0, 0, 1, 1).data;
    if (A < 10) return null;
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
  } catch {
    return null;
  }
}

// Brillo de lo que se ve en (x, y): la foto de debajo, aclarada por los velos
// blancos que tenga encima (como el de la intro). null si no hay foto.
// Cuánto blanco pone encima el fondo difuminado de la cabecera fija de la portada
// en la altura y (mismo degradado que .cabecera-inicio::after en global.css).
function blancoCabecera(y: number): number {
  const cab = document.querySelector<HTMLElement>('.cabecera-inicio');
  if (!cab) return 0;
  const p = Number(getComputedStyle(document.documentElement).getPropertyValue('--p')) || 1;
  const visible = Math.min(1, Math.max(0, (p - 0.9) * 10));
  const f = y / (cab.offsetHeight + 24);
  let a = 0;
  if (f <= 0.58) a = 1;
  else if (f <= 0.76) a = 1 - ((f - 0.58) / 0.18) * 0.4;
  else if (f <= 1) a = 0.6 * (1 - (f - 0.76) / 0.24);
  return a * visible;
}

function brilloEn(x: number, y: number, propio: Element): number | null {
  let velo = blancoCabecera(y);
  for (const el of document.elementsFromPoint(x, y)) {
    if (propio.contains(el)) continue;
    if (el.classList.contains('intro-velo')) {
      const v = Number(getComputedStyle(el).opacity) || 0;
      velo = 1 - (1 - velo) * (1 - v);
    }
    if (el instanceof HTMLImageElement) {
      const b = brilloFoto(el, x, y);
      return b === null ? null : b * (1 - velo) + 255 * velo;
    }
  }
  return null;
}

export function ajustarContraste(elementos: Iterable<HTMLElement>) {
  for (const el of elementos) {
    const r = el.getBoundingClientRect();
    if (!r.width || r.bottom < 0 || r.top > innerHeight) continue;
    const y = r.top + r.height / 2;
    const medidas = [0.2, 0.5, 0.8]
      .map((f) => brilloEn(r.left + r.width * f, y, el))
      .filter((b): b is number => b !== null);
    const oscuro = medidas.length > 0 && medidas.reduce((a, b) => a + b, 0) / medidas.length < 130;
    el.classList.toggle('sobre-oscuro', oscuro);
  }
}
