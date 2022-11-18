<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Fundamentos para la generación de marca

    .row.justify-content-center.mb-5(data-aos='zoom-in')
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.fnd-in
          .bloque-texto-g__img(
            :style='{ "background-image": `url(${require("@/assets/template/tema02/t2-i1.png")})` }'
          )
          .bloque-texto-g__texto.py-4.px-5
            p.mb-0 Ahora bien, es necesario estar informados y ser más exigentes; todo el tema de mercadeo no solo se trata de ofrecer buenos productos y servicios a un precio razonable, sino también, de proporcionar experiencias significativas a los consumidores, debido a que esto eleva enormemente el nivel de profesionalidad necesario para construir una marca con éxito.

    p.mb-5 La marca, vista desde un panorama interno, es la expresión del propósito de una empresa y su compromiso con los diferentes grupos de interés; externamente, la marca es todo lo que las personas piensan, comparten y sienten sobre una compañía o producto y, desde la gestión, es una herramienta que permite generar vínculos con las personas, creando valor para la empresa y la sociedad en general.

    .row.justify-content-center.mb-5
      .col-12.col-lg-10
        .cajon.cajon-color-2.p-4
          p.mb-0 Vale la pena aclarar, que el posicionamiento de una marca se compone de elementos fundamentales como: el público objetivo, el marco y punto de referencia y la razón para creer en ella. 

    p.mb-5 A continuación, los métodos técnicos claves para la creación de marca:

    TabsA.color-acento-contenido.fz-13.mb-5(data-aos='zoom-in-up')
      .tarjeta.bg-03.p-4(titulo='En investigación cuantitativa')
        .row 
          .col-lg-6
            p Los métodos técnicos son el elemento diferenciador principal y hacen referencia al grado de control interno que se aplica en la investigación, además, están representados por la estrategia experimental.
          .col-lg-6
            img(src='@/assets/template/tema02/t2-i2.png', alt='AvatarTop')

      .tarjeta.bg-03.p-4(titulo='En investigación cualitativa')
        .row 
          .col-lg-6
            p El elemento diferenciador lo compone el objetivo de la investigación y la naturaleza de los datos que se deben analizar.
          .col-lg-6
            img(src='@/assets/template/tema02/t2-i3.png', alt='AvatarTop')     

      .tarjeta.bg-03.p-4(titulo='Métodos')
        .row 
          .col-lg-6
            p Son los procesos de investigación que incluyen ciertas estrategias generales, que condicionan el desarrollo de cada una de sus etapas, siempre en función de la coherencia interna.
          .col-lg-6
            img(src='@/assets/template/tema02/t2-i4.png', alt='AvatarTop')     

      .tarjeta.bg-03.p-4(titulo='Técnicas')
        .row 
          .col-lg-6
            p Son los procedimientos que se llevan a cabo para la realización de diferentes etapas particulares, y actúan como dispositivos auxiliares posibilitando el uso de los métodos.
          .col-lg-6
            img(src='@/assets/template/tema02/t2-i5.png', alt='AvatarTop')     

      .tarjeta.bg-03.p-4(titulo='Diseño')
        .row 
          .col-lg-6
            p Es un proceso en el cual se realiza el boceto de la investigación, a través de decisiones específicas. Esta tarea se realiza antes de obtener los datos sistemáticamente. Estos procedimientos no se realizan de forma aislada, sino que, por el contrario, son consideradas en su conjunto y en función de los objetivos de la investigación.
          .col-lg-6
            img(src='@/assets/template/tema02/t2-i6.png', alt='AvatarTop')     

      .tarjeta.bg-03.p-4(titulo='El concepto normativo')
        .row 
          .col-lg-6
            p Hace referencia al conjunto de reglas que debe seguir el investigador, la toma de decisiones con relación a las múltiples fases de la investigación y pensando siempre en función de los objetivos.
          .col-lg-6
            img(src='@/assets/template/tema02/t2-i7.png', alt='AvatarTop')     

      .tarjeta.bg-03.p-4(titulo='La función denominativa')
        .row 
          .col-lg-6
            p Se refiere al método que se emplea, la inclusión de variables, la manera en que se obtienen las medidas y a la cantidad de variables que se implican.
          .col-lg-6
            img(src='@/assets/template/tema02/t2-i8.png', alt='AvatarTop')     


    h3.mb-4
      i.fas.fa-square.color_texto_acento.me-3
      | ¿Cómo se crea una marca? (Creación de un producto o servicio)
            
    //- Web
    .row.justify-content-center.mb-5(data-aos='zoom-in')
      .col-11.d-none.d-lg-block
        .bloque-texto-a.color-primario.p-3.p-sm-4.p-md-5.fnd-in-left-03
          .bloque-texto-g__texto.py-4.px-5
            strong.mb-0 Luego de establecer los métodos técnicos, se debe tener claro que, crear o definir una marca, es como un viaje de autodescubrimiento empresarial, puesto que puede tomar demasiado tiempo o ser una tarea difícil. Por esta razón, es necesario encontrar la respuesta a los siguientes interrogantes:
      //- Mobil
      .col-11.d-sm-block.d-lg-none
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.fnd-in
          .bloque-texto-g__img(
            :style='{ "background-image": `url(${require("@/assets/template/tema02/t2-i9.svg")})` }'
          )
          .bloque-texto-g__texto.py-4.px-5.mt-4
            strong.mb-0 Luego de establecer los métodos técnicos, se debe tener claro que, crear o definir una marca, es como un viaje de autodescubrimiento empresarial, puesto que puede tomar demasiado tiempo o ser una tarea difícil. Por esta razón, es necesario encontrar la respuesta a los siguientes interrogantes:            

    p.mb-5 A continuación, presentan algunos consejos para la creación de marca:

    .row.d-flex.justify-content-center.mt-5
      .col-md-10
        ImagenInfografica.color-acento-botones(data-aos='zoom-in')
          template(v-slot:imagen)
            figure
              img(src='@/assets/template/tema02/t2-i10.svg')

          .tarjeta.color-acento-botones_black.p-3(x='48%', y='45%', numero='+')
            h3 Definir el público objetivo
            p Se debe tener en cuenta que los productos o servicios que se van a ofrecer, van a satisfacer a un tipo de necesidades específicas, propias de un determinado tipo de clientes. Por esta razón, es importante definir muy bien, a través de una segmentación de mercado, al público objetivo, con el fin de asegurar un correcto&nbsp;
              i feedback.


          .tarjeta.color-acento-botones_black.p-3(x='73%', y='45%', numero='+')
            h3 Proyectar una imagen acorde con la filosofía de marca
            p Los clientes potenciales esperan siempre comportamientos y actitudes determinados y es necesario, como empresa, proyectar en todo momento, una buena imagen para que se tenga claro que elegirla es la mejor opción.


          .tarjeta.color-acento-botones_black.p-3(x='95.8%', y='45%', numero='+')
            h3 Hacer que el cliente se sienta especial
            p Es muy importante tomar las medidas necesarias para que los potenciales clientes se sientan especiales por el simple hecho de usar o comprar la marca, porque estos desean ser escuchados, valorados y apreciados.


          .tarjeta.color-acento-botones_black.p-3(x='50%', y='90%', numero='+')
            h3 Construir una marca que aporte valor
            p Para crear una marca fuerte, es indispensable que esta ofrezca algún valor añadido, que la haga única y diferente al resto de las empresas competidoras.


          .tarjeta.color-acento-botones_black.p-3(x='74%', y='90%', numero='+')
            h3 Mantener viva la relación
            p Se recomienda no mantener el mismo mensaje por siempre. Las necesidades de los clientes van cambiando, así como las costumbres y los hábitos sociales. Por lo que se hace necesario innovar en los mensajes y crear campañas que vayan atrayendo a nuevos clientes.

          .tarjeta.color-acento-botones_black.p-3(x='97%', y='90%', numero='+')
            h3 Medir su rendimiento
            p No solo se deben diseñar e implementar acciones con el fin de potenciar la marca, sino que se deben medir los resultados de dichas acciones y tener unas metas establecidas, tanto a corto como a largo plazo, con la finalidad de corregir errores a tiempo y mejorar la estrategia de marca.  
            
        .row.mt-5.p-4.card-t1.align-items-center.mb-5(data-aos='zoom-in-up')
          .col-lg-2.col-2
            figure
              img(
                src='@/assets/template/tema02/t2-i15.svg',
                alt='Texto que describa la imagen'
              )
          .col-lg-7.col-6
            h4.text-white ¿Cómo se genera contenido? 
            p.mb-0.text-white Lo invitamos a consultar el documento ¿Cómo se genera contenido? Donde ampliará la información sobre la generación de contenido, canales de comunicación con los clientes, cómo se genera una proyección y la realización de un informe logístico.
          .col-lg-3.col-4.text-center
            a.boton.boton--b.color-acento-botones(
              :href='obtenerLink("/actividades/Como se genera contenido.pdf")',
              target='_blank'
            )
              span Descargar
              i.fas.fa-file-download                 
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
