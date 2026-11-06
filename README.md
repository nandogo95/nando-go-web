# Web de NANDO-GO — nando-go.com

Web estática hecha con [Astro](https://astro.build) y publicada en Cloudflare. Sustituye a la web de WordPress/Elementor.

## Empezar

Hace falta Node 22 o superior.

    npm install
    npm run dev

La web se abre en http://localhost:4321.

## Dónde está cada cosa

| Qué | Dónde |
|---|---|
| Proyectos: textos, datos, orden de la portada | `src/data/proyectos.js` |
| Fotos de cada proyecto (01.jpg, 02.jpg… en orden) | `src/assets/proyectos/<proyecto>/` |
| Datos de contacto, Instagram, LinkedIn | `src/data/proyectos.js` (abajo, `estudio`) |
| Página About | `src/pages/contact.astro` |
| Página de cada proyecto | `src/pages/[slug].astro` |
| Colores, tipografía y maquetación | `src/styles/global.css` |
| Logo | `src/assets/logo.png` |
| Redirecciones de direcciones antiguas | `public/_redirects` |

### Añadir un proyecto

1. Crea `src/assets/proyectos/<nombre>/` con las fotos numeradas (`01.jpg`, `02.jpg`…). Mejor a 2400 px como máximo.
2. Añade una entrada en `src/data/proyectos.js` (copia una existente). La primera de la lista sale arriba en la portada.

Astro genera las versiones web de las fotos (WebP, varios tamaños) al publicar.

## Publicar

Con el repositorio conectado a Cloudflare (Workers & Pages → Import a repository), lo que entra en `main` se publica solo.
Trabaja en una rama y abre un pull request: Cloudflare crea una dirección de prueba para cada rama.

- Comando de build: `npm run build`
- Comando de deploy: `npx wrangler deploy`

Publicación manual, con acceso a la cuenta de Cloudflare: `npm run deploy`.

## Pasar el dominio

El dominio nando-go.com está registrado en Hover. Para servirlo desde Cloudflare:

1. En Cloudflare, *Add a domain* → `nando-go.com` (plan Free). Cloudflare copia los registros DNS actuales: revisa que estén los del correo (MX, TXT) si los hay.
2. En Hover, cambia los *nameservers* por los dos que te da Cloudflare.
3. En el Worker `nando-go-web` → *Settings → Domains & Routes*, añade `nando-go.com` y `www.nando-go.com` como *Custom domain*.
4. Comprueba la web y, después, cancela Elementor.

## Copia de la web antigua

Las imágenes originales (a tamaño completo) y los textos de WordPress están en la carpeta
`Documentos\nando-go-web-respaldo-wordpress`, fuera del repositorio.
