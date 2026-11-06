// Proyectos de la web. Para añadir uno: crea su carpeta de fotos en
// src/assets/proyectos/<slug>/ (01.jpg, 02.jpg…) y añade una entrada aquí.
// El orden de esta lista es el orden de la portada (el primero, arriba).
// La dirección de cada proyecto es nando-go.com/<slug>/ (las mismas que en WordPress).

const fotos = import.meta.glob('../assets/proyectos/*/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' });

function fotosDe(slug) {
  return Object.keys(fotos)
    .filter((ruta) => ruta.includes(`/proyectos/${slug}/`))
    .sort()
    .map((ruta) => fotos[ruta]);
}

const lista = [
  {
    slug: 'oficina-en-amparo',
    carpeta: 'oficina-en-amparo',
    titulo: 'Oficina en Amparo',
    numero: '004',
    año: '2025',
    descripcion: 'Renovation of a 36 m² street-level office in Madrid: a narrow, deep space organised with custom-built furniture, a suspended metal ceiling and a blue terrazzo floor.',
    en: [
      'This project transforms a small street-level premises in a traditional Madrid building into a compact, fully functional office. With only 36 m² arranged as a narrow, deep sequence of rooms, the challenge was to make every metre count without losing a sense of openness and light.',
      'The space is organised as a linear sequence: the workspace opens onto the street, while the rear rooms hold the service areas, a kitchenette and a bathroom. In the office, custom-built furniture runs along the walls: angled desks fold around the workstations, and shelves with integrated lighting and low storage units keep everything within reach while leaving the circulation clear.',
      'A suspended metal ceiling with linear lighting runs the length of the room, lowering the scale of the space and spreading light evenly. Underfoot, a blue terrazzo floor ties the project together, echoed in the curtains and furniture. The original facade opening is kept and fitted with a new frame, connecting the office with the street while respecting the character of the building.',
    ],
    es: [
      'El proyecto transforma un pequeño local a pie de calle, en un edificio tradicional de Madrid, en una oficina compacta y completamente funcional. Con solo 36 m² organizados como una secuencia de estancias estrecha y profunda, el reto era aprovechar cada metro sin perder la sensación de amplitud y luz.',
      'El espacio se organiza de forma lineal: la zona de trabajo se abre a la calle y las estancias del fondo acogen los servicios, una pequeña cocina y el baño. En la oficina, el mobiliario a medida recorre los muros: mesas en ángulo que se pliegan alrededor de los puestos de trabajo, estantes con iluminación integrada y muebles bajos de almacenaje que lo mantienen todo a mano y dejan libre la circulación.',
      'Un techo metálico suspendido con iluminación lineal recorre la estancia, ajusta la escala del espacio y reparte la luz de forma homogénea. En el suelo, un terrazo azul da unidad al proyecto y se repite en las cortinas y el mobiliario. Se conserva el hueco original de fachada con una nueva carpintería, que conecta la oficina con la calle respetando el carácter del edificio.',
    ],
    datos: [
      ['Year', '2025'],
      ['Location', 'Madrid'],
      ['Type', 'Office Renovation'],
      ['Status', 'Built'],
      ['Area', '36 m²'],
      ['Client', 'Private'],
      ['Photographs', 'Guillermo Guisasola'],
    ],
    mapa: 'Calle del Amparo, Madrid',
  },
  {
    slug: 'chivas-scraworld-barcelona-pavilion',
    carpeta: 'chivas-barcelona-pavilion',
    titulo: 'Chivas / Scrapworld Barcelona Pavilion',
    tituloCorto: 'Chivas Barcelona Pavilion',
    numero: '003',
    año: '2023',
    descripcion: 'Ephemeral stand and stage for Scrapworld Barcelona and Chivas, inspired by the whisky glass and Barcelona’s nightlife.',
    en: [
      'For the Scrapworld Barcelona Event, in collaboration with its sponsor, Chivas, we designed an ephemeral stand and stage that draws on two iconic influences: the timelessness of the whisky glass and the vibrancy of Barcelona’s nightlife.',
      'The exterior of the structure features a distinctive geometric pattern inspired by the triangulated facets of a classic whisky glass, creating a sleek, textured surface with divots that play with depth and shadow. This dynamic facade evokes the refinement and craftsmanship of the whisky culture, offering a visually striking contrast against the backdrop of the event.',
      'Upon entering, guests are enveloped by the dramatic interior, where deep red curtains drape the space, reminiscent of the intensity found in both clubs and other venues. The combination of soft, flowing fabric and the sharp, angular exterior creates a unique sensory experience, blending sophistication with the pulsating atmosphere of Barcelona’s nightlife.',
      'This provided a space for musical acts on the main stage and, in between events, a space for visitors to experience the collaboration between Scrapworld and Chivas in a club-like space with a curated set of DJs.',
    ],
    es: [
      'Para el evento Scrapworld Barcelona, en colaboración con su patrocinador Chivas, diseñamos un stand y escenario efímeros que se inspiran en dos influencias icónicas: la atemporalidad del vaso de whisky y la vibrante vida nocturna de Barcelona.',
      'El exterior de la estructura presenta un distintivo patrón geométrico inspirado en las facetas trianguladas de un clásico vaso de whisky, creando una superficie elegante y texturizada con pirámides que juegan con la profundidad y las sombras. Esta fachada dinámica evoca la sofisticación y el trabajo artesanal asociado a la cultura del whisky, ofreciendo un contraste visualmente impactante contra el telón de fondo del evento.',
      'Al entrar, los visitantes son envueltos por un interior dramático, donde gruesas cortinas rojas cubren el espacio, evocando la intensidad presente tanto en clubes como en otros locales nocturnos. La combinación de las telas suaves y fluidas con el exterior angular y afilado crea una experiencia sensorial única, fusionando la sofisticación con la atmósfera pulsante de la vida nocturna de Barcelona.',
      'Este espacio acogió tanto a los actos musicales en el escenario principal como, entre eventos, a los visitantes, quienes pudieron disfrutar de la colaboración entre Scrapworld y Chivas en un ambiente tipo club con una selección de DJs cuidadosamente curada.',
    ],
    datos: [
      ['Year', '2023'],
      ['Location', 'Fira de Barcelona'],
      ['Type', 'Ephemeral Architecture'],
      ['Status', 'Built'],
      ['Area', '60 m²'],
      ['Client', 'Scrapworld + Chivas'],
      ['Collaborator', 'Guillermo Guisasola, Alberto and Power'],
      ['Photographs', 'Guillermo Guisasola'],
    ],
    mapa: 'Fira Barcelona Montjuïc',
  },
  {
    slug: 'house-in-bale',
    carpeta: 'house-in-bale',
    titulo: 'House in Bale',
    numero: '002',
    año: '2023',
    descripcion: 'Full renovation in Bale, Croatia: the historic perimeter wall is kept and an independent steel frame is inserted inside.',
    en: [
      'The project for this house is conceived as a harmonious blend of preservation and innovation. The design revolves around a simple yet impactful concept: maintaining the existing perimeter wall, while inserting an independent steel frame within. This approach honors the stringent conservation codes of the area by preserving the historical exterior, ensuring it remains unchanged and true to its context.',
      'Inside, the steel frame acts as a modern “living device,” creating a striking contrast between the old and the new. This contemporary structure generates dynamic and functional spaces that stand in deliberate juxtaposition to the traditional town and its architecture. The interior’s modernity offers a fresh perspective while respecting the heritage of the exterior.',
      'Casa Domani, serving as the local studio, played a key role in realizing this design, ensuring that the project is both sensitive to its surroundings and forward-thinking in its use of space.',
    ],
    es: [
      'El proyecto de esta casa se concibe como una armoniosa combinación de preservación e innovación. El diseño gira en torno a un concepto sencillo pero impactante: mantener el muro perimetral existente mientras se inserta una estructura de acero independiente en su interior. Este enfoque respeta los estrictos códigos de conservación de la zona, preservando el exterior histórico y asegurando que permanezca inalterado y fiel a su contexto.',
      'En el interior, la estructura de acero actúa como un “dispositivo habitacional” moderno, creando un contraste llamativo entre lo antiguo y lo nuevo. Esta intervención contemporánea genera espacios dinámicos y funcionales que se yuxtaponen deliberadamente a la arquitectura tradicional del pueblo. La modernidad del interior ofrece una nueva perspectiva, al mismo tiempo que respeta el legado del exterior.',
      'Casa Domani, como estudio local, desempeñó un papel clave en la realización de este diseño, asegurando que el proyecto sea sensible a su entorno y, a la vez, innovador en el uso del espacio.',
    ],
    datos: [
      ['Year', '2023'],
      ['Location', 'Bale, Croatia'],
      ['Type', 'Full Renovation'],
      ['Status', 'Built'],
      ['Area', '150 m²'],
      ['Client', 'Private'],
      ['Collaborator', 'Casa Domani'],
      ['Photographs', 'Self-photographed'],
    ],
    mapa: 'Bale, Croatia',
  },
  {
    slug: 'scrapworld-house',
    carpeta: 'scrapworld-house',
    titulo: 'Scrapworld House',
    numero: '001',
    año: '2023',
    descripcion: 'Ephemeral stand for Scrapworld at Pabellón de Cristal, Madrid, inspired by the American single-family home and 90’s West Coast culture.',
    en: [
      'The design for this stand draws inspiration from the quintessential American single-family home, with a strong focus on evoking the vibrant, laid-back atmosphere of 90’s West Coast culture.',
      'The selection of materials and colors plays a pivotal role in shaping the overall concept. A soft palette of green and pink was purposefully chosen to contrast with the raw, textured surface of OSB (Oriented Strand Board). This deliberate juxtaposition mirrors the dynamics of streetwear culture, where elements not originally created for the fashion scene are appropriated and reimagined. Similarly, the design blends softness with ruggedness, creating a visual and conceptual parallel between architectural materiality and cultural reinvention.',
    ],
    es: [
      'El diseño de este stand se inspira en la casa unifamiliar estadounidense por excelencia, con un enfoque en evocar la icónica cultura de la costa oeste de los años 90.',
      'La elección de materiales y colores desempeña un papel fundamental en la concepción general. Se seleccionó una paleta suave de verde y rosa, que contrasta de manera deliberada con la superficie áspera y texturizada del OSB (tablero de virutas orientadas). Esta yuxtaposición intencionada refleja la dinámica de la cultura streetwear, donde elementos que no fueron creados inicialmente para la moda son apropiados y reinterpretados. De manera similar, el diseño mezcla suavidad y rudeza, creando un paralelismo visual y conceptual entre la materialidad arquitectónica y la reinvención cultural.',
    ],
    datos: [
      ['Year', '2023'],
      ['Location', 'Pabellón de Cristal, Madrid'],
      ['Type', 'Ephemeral Architecture'],
      ['Status', 'Built'],
      ['Area', '64 m²'],
      ['Client', 'Scrapworld'],
      ['Collaborator', 'Juan Villegas, Diana Fernández Pareja, Fran Ahedo, Buser'],
      ['Photographs', 'Self-photographed'],
    ],
    mapa: 'Pabellón de Cristal, Madrid',
  },
];

export const proyectos = lista.map((p) => ({ ...p, fotos: fotosDe(p.carpeta) }));

export const estudio = {
  nombre: 'Fernando González Piris',
  cargo: 'Architect',
  telefono: '+34 630 183 956',
  email: 'fernando@nando-go.com',
  direccion: 'Calle del Amparo 95, 28012 Madrid, Spain',
  instagram: 'https://www.instagram.com/nando.go/',
  // Pon aquí la dirección de tu perfil de LinkedIn y aparecerá en el pie.
  linkedin: '',
};
