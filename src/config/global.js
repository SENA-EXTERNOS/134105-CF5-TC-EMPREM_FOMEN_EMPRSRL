export default {
  global: {
    componenteFormativo: 'Mezcla de mercadeo, los clientes y la competencia',
    descripcionCurso:
      'Este componente formativo aborda elementos y aspectos clave de la comercialización de productos o servicios; el aprendiz podrá afianzarse en conceptos y habilidades de <em>marketing</em>, comportamiento de los mercados y las necesidades de los consumidores, creación de marca, técnicas y fundamentos del mercadeo, entrega de los productos y la satisfacción de los clientes, entre otros.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      // {
      //   clases: ['banner-principal-decorativo-4'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      // },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Mercadeo: fundamentos y técnicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Los clientes: tipos y características',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: '¿Qué es el marketing?',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Fundamentos para la generación de marca',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Proceso de reconocimiento y satisfacción de los clientes',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Mercadeo: fundamentos y técnicas',
      referencia:
        'next_u. (s.f.). <em>Los 4 fundamentos del marketing que debes conocer.</em>',
      tipo: 'Artículo',
      link:
        'https://www.nextu.com/blog/los-4-fundamentos-del-marketing-que-debes-conocer-rc22/',
    },
    {
      tema: 'Mercadeo: fundamentos y técnicas',
      referencia:
        'Quiroa, M. y Sevilla, P. (s.f.).<em> Historia del Marketing.</em>',
      tipo: 'Artículo',
      link:
        'https://economipedia.com/definiciones/historia/historia-del-marketing.html',
    },
    {
      tema: 'Fundamentos para la generación de marca',
      referencia:
        'Ortiz, D. (2018). <em>10 técnicas de marketing para vender más. </em>',
      tipo: 'Artículo',
      link:
        'https://www.cyberclick.es/numerical-blog/10-tecnicas-de-marketing-para-vender-mas',
    },
    {
      tema: 'Fundamentos para la generación de marca',
      referencia:
        'CEF. (s.f.). 1. <em>Concepto de investigación de mercados. </em>',
      tipo: 'Artículo',
      link:
        'https://www.marketing-xxi.com/concepto-de-investigacion-de-mercados-23.htm',
    },
  ],
  glosario: [
    {
      termino: 'Competitividad',
      significado:
        'es la capacidad de competir. En el ámbito de la economía, se refiere a la capacidad que tiene una persona, empresa o país, para obtener rentabilidad en el mercado frente a sus otros competidores.',
    },
    {
      termino: 'Creatividad',
      significado:
        'es un proceso dinámico, es una fuerza viva y cambiante del ser humano; es decir, es el motor del desarrollo personal y ha sido la base del progreso de toda cultura.',
    },
    {
      termino: 'Innovación',
      significado:
        'acción de cambio que supone una novedad. Esta palabra procede del latín <em>innovatĭo, -ōnis</em> que a su vez se deriva del término <em>innovo, -are</em> “hacer nuevo”, “renovar”, que se forma con <em>in</em>- “hacia dentro” y <em>novus</em> “nuevo”.',
    },
    {
      termino: 'Inteligencia comparativa',
      significado:
        'se puede describir como la capacidad de percibir o inferir información, y retenerla como conocimiento para aplicarlo a comportamientos adaptativos dentro de un entorno o contexto.',
    },
    {
      termino: 'Logística',
      significado:
        'es el conjunto de procesos, técnicas y estrategias destinadas a optimizar los flujos de comercialización, haciéndolos más eficientes y rentables con el fin de garantizar la satisfacción del cliente.',
    },
    {
      termino: 'Marca',
      significado:
        'es la forma en la que una empresa se identifica y diferencia de otras. La marca es la personalidad de la empresa, y esta se comunica a través de un logotipo, nombre, lema, voz y tono.',
    },
    {
      termino: '<em>Marketing</em>',
      significado:
        'sistema para investigar un mercado, ofrecer valor y satisfacer al cliente con un objetivo de lucro.',
    },
    {
      termino: 'Mercadeo',
      significado:
        'es una carrera comercial que consiste en la administración de bienes y servicios, así como también se encarga del conjunto de leyes y establecimientos para que un producto forme parte de la competencia.',
    },
    {
      termino: 'Redes sociales',
      significado:
        'son plataformas digitales formadas por comunidades de individuos con intereses, actividades o relaciones en común; estas permiten el contacto entre personas y funcionan como un medio para comunicarse e intercambiar información.',
    },
    {
      termino: 'Servicio al cliente',
      significado:
        'consiste en brindar todo el asesoramiento al consumidor, antes, durante y después de la compra.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aranda, A. (2018). <em>Segmentación de mercados: definición, tipos y estrategia.</em>',
      link:
        'https://www.abtasty.com/es/blog/segmentacion-de-mercado-definicion-tipos-y-estrategia/',
    },
    {
      referencia:
        'Díaz, C. (2022). <em>Monitoreo de transporte: 5 maneras en que mejoran tus operaciones.</em>',
      link:
        'https://www.netlogistik.com/es/blog/monitoreo-de-transporte-5-maneras-en-que-mejora-tus-operaciones#:~:text=El%20monitoreo%20de%20transporte%20es,operadores%20para%20recibir%20env%C3%ADos%20entrantes',
    },
    {
      referencia:
        'marketingdirecto.com. (2020). <em>La importancia de un excelente servicio al cliente y las encuestas de satisfacción. </em>',
      link:
        'https://www.marketingdirecto.com/punto-de-vista/la-columna/la-importancia-de-un-excelente-servicio-al-cliente-y-las-encuestas-de-satisfaccion-juan-manuel-scarilli',
    },
    {
      referencia:
        'Nuño, P. (2017). <em>La distribución de productos en la empresa. </em>',
      link:
        'https://www.emprendepyme.net/la-distribucion-de-productos-en-la-empresa.html',
    },
    {
      referencia:
        'Psikipedia. <em>(2015). Método, diseño y técnica: conceptos.</em>',
      link:
        'https://psikipedia.com/libro/investigacion/1557-metodo-diseno-y-tecnica-conceptos',
    },
    {
      referencia: 'Smith, A. (1776). <em>La riqueza de las naciones.</em>',
      link:
        'http://www.iunma.edu.ar/doc/MB/lic_historia_mat_bibliografico/Fundamentos%20de%20Econom%C3%ADa%20Pol%C3%ADtica/194-Smith,%20Adam%20-%20La%20riqueza%20de%20las%20naciones%20(Alianza).pdf',
    },
    {
      referencia:
        'Summa. (s.f.). <em>Cómo construir una marca de éxito: guía completa paso a paso.</em>',
      link:
        'https://summa.es/blog/construir-marca-de-exito/#1.%20Conceptos%20b%C3%A1sicos',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
