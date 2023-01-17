<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Proceso de reconocimiento y satisfacción de los clientes

    p.mb-5(data-aos='fade-right') Medir la satisfacción de un cliente con respecto a la aceptación de un producto o servicio que se ofrece, tiene como base poder conocer y satisfacer las necesidades del consumidor; existen varias formas de poder analizar este mercado: encuestas, formularios, redes sociales, PQRS (Peticiones, Quejas, Reclamos y Sugerencias), entre otras.

    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-12.col-lg-10
        .cajon.cajon-color-2.p-4
          p.mb-0 Cuando un usuario o cliente consume un producto o servicio por más de una vez, está dando señales de confianza en el producto y/o en la marca. En términos comerciales, hay un proceso de fidelización, lo que supone un cliente satisfecho que comprará el producto más veces y creará una línea directa e indirecta de potenciales clientes (familiares, amigos, colegas, a quienes, por su buena referencia, podría atraer). En ese momento se están generando ventas y aumento de clientes.

    p.mb-5(data-aos='fade-left') Un buen servicio al cliente puede llegar a ser un elemento promocional para las ventas. Atraer a un nuevo cliente, es aproximadamente seis veces más caro que mantener uno, por lo que las compañías han optado por escribir factores importantes para la actuación de la empresa, tales como:

    .row.justify-content-center.mb-5(data-aos='flip-up')
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.style-card-2.p-4
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(
                  src='@/assets/template/tema03/t3-i1.png',
                  alt='Texto que describa la imagen'
                )

          h3.text-center Contingencias del servicio
          p.text-small.text-center El vendedor debe estar preparado para evitar que las huelgas y desastres naturales perjudiquen al cliente.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.style-card-2.p-4
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(
                  src='@/assets/template/tema03/t3-i2.png',
                  alt='Texto que describa la imagen'
                )

          h3.text-center Acciones
          p.text-small.text-center Las acciones y el comportamiento de las diferentes personas con las cuales el cliente entra en contacto producen un impacto sobre el nivel de satisfacción del mismo; por esto es importante tener mucho cuidado en la atención general que se brinda.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.style-card-2.p-4
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(
                  src='@/assets/template/tema03/t3-i3.png',
                  alt='Texto que describa la imagen'
                )

          h3.text-center Políticas de servicio
          p.text-small.text-center Las empresas deben enfatizar en la creación de políticas que tengan en cuenta las verdaderas necesidades del cliente.

    h3.mb-4
      i.fas.fa-square.color_texto_acento.me-3
      | Conceptos de distribución de productos

    p(data-aos='fade-left') La distribución de productos es una estrategia que abarca los procesos de custodia y logística de una empresa o una organización; establece los métodos de seguridad y desplazamiento como elemento indispensable para la consolidación del negocio y la fidelización de los clientes. En gran parte, las ventajas que nos ofrecen la red o el Internet, es lo que permite y facilita el contacto directo con el consumidor final o con los clientes.

    p.mb-5(data-aos='fade-right') Se exponen a continuación, las estrategias de distribución:

    .row.mb-5(data-aos='zoom-in-down')
      .col-lg-4.col-12
        figure
          img(
            src='@/assets/template/tema03/t3-i4.png',
            alt='Texto que describa la imagen'
          ) 
      .col-lg-8.col-12
        AcordionA.mb-5(tipo='a', clase-tarjeta='tarjeta acordeonA')
          .row(titulo='Distribución intensiva')
            p Es la estrategia mediante la cual se trata de vender el producto en puntos de venta relacionados con más productos, además del propio, pero del mismo tipo.
          .row(titulo='Distribución extensiva')
            p A diferencia de la anterior, esta estrategia se centra más en la disponibilidad del producto y en que se encuentre en todos los sitios posibles.
          .row(titulo='Distribución selectiva')
            p Es la estrategia mediante la cual se diferencia una empresa de la competencia.
          .row(titulo='Distribución exclusiva')
            p A diferencia de la anterior, el punto de venta se centra en otorgar un mayor prestigio a la marca.

    h3.mb-4
      i.fas.fa-square.color_texto_acento.me-3
      | ¿Cuál es la importancia de la logística en una empresa?

    p La logística empresarial es una parte esencial en la cadena de producción y suministro dentro de una empresa. La actividad logística incluye la planificación, ejecución y actividades que intervienen en la obtención, traslado y almacenamiento de materiales.
      br
      br
      |La logística tiene dos objetivos primordiales: realizar el trabajo a un mínimo costo y brindar el mejor servicio posible al cliente. Para lograr esto la empresa debe diseñar un sistema que controle toda la actividad logística, buscando que sea lo más eficaz y eficiente posible.
      br
      br
      |Conozca, entonces, los diferentes tipos de logística en la empresa:

    .row.d-flex.justify-content-center.mb-5
      .col-lg-11.col-12
        PasosA.color-acento-contenido.mb-5(tipo='n')
          .row
            .col-md-10.mb-md-0.col-8
              h3 Definir el alcance
              p Planificación del aprovisionamiento de proveedores, ejecución de aprovisionamiento y gestión de la relación con los proveedores.
            .col-md-2.col-4
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema03/lineatiempo/t3-l1.png',
                  alt='Texto que describa la imagen'
                )

          .row
            .col-md-2.col-4
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema03/lineatiempo/t3-l2.png',
                  alt='Texto que describa la imagen'
                )
            .col-md-10.mb-md-0.col-8
              h3.text-start Logística de distribución
              p.text-start Planificación de actividades, almacenamiento de productos, ejecución de&nbsp;
                i cross docking&nbsp;
                | y el transporte de la distribución.

          .row
            .col-md-10.mb-md-0.col-8
              h3 Logística inversa
              p Recogida de devoluciones, puesta en conformidad, reparación, reintegración, reciclaje, etc.
            .col-md-2.col-4
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema03/lineatiempo/t3-l3.png',
                  alt='Texto que describa la imagen'
                )

          .row
            .col-md-2.col-4
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema03/lineatiempo/t3-l4.png',
                  alt='Texto que describa la imagen'
                )
            .col-md-10.mb-md-0.col-8
              h3.text-start Sistema logístico
              p.text-start Planificación, organización, ejecución y control de actividades de aprovisionamiento.

    h3.mb-5
      i.fas.fa-square.color_texto_acento.me-3
      | Monitoreo de los productos (envíos y entregas)

    //- Web
    .row.justify-content-center.mb-5(data-aos='zoom-in-down')
      .col-11.d-none.d-lg-block
        .bloque-texto-a.color-primario.p-3.p-sm-4.p-md-5.fnd-in-left-04
          .bloque-texto-g__texto.py-4.px-5
            p.mb-0 Cuando una empresa u organización realiza el monitoreo del transporte de sus productos, va más a fondo; se tiene una dedicación más que un mapa  digital, que muestra la ubicación en tiempo real del camión en movimiento, va relacionando cada entrega y va actualizando la guía o código del envío en una pantalla del sistema de información o&nbsp;
                  i software&nbsp;
                  | especializado de monitoreo. Se tiene una información valiosa de la cadena de suministros e inventario comercial.
      //- Mobil
      .col-11.d-sm-block.d-lg-none(data-aos='zoom-in-down')
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.fnd-in
          .bloque-texto-g__img(
            :style='{ "background-image": `url(${require("@/assets/template/tema03/t3-i5.png")})` }'
          )
          .bloque-texto-g__texto.py-4.px-5.mt-4
            p.mb-0 Cuando una empresa u organización realiza el monitoreo del transporte de sus productos, va más a fondo; se tiene una dedicación más que un mapa  digital, que muestra la ubicación en tiempo real del camión en movimiento, va relacionando cada entrega y va actualizando la guía o código del envío en una pantalla del sistema de información o&nbsp;
                i software&nbsp;
                | especializado de monitoreo. Se tiene una información valiosa de la cadena de suministros e inventario comercial.

    p.mb-5 También cumple de manera eficaz con la capacidad de saber, en todo momento, donde se encuentran los productos que tienen como finalidad ser entregados a los clientes. Se sabe el origen y su destino.

    .row.justify-content-center.mb-5(data-aos='zoom-in-down')
      .col-11
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.fnd-in
          .bloque-texto-g__img(
            :style='{ "background-image": `url(${require("@/assets/template/tema03/t3-i7.svg")})` }'
          )
          .bloque-texto-g__texto.py-4.px-5
            ul
              li 
                i.fas.fa-check.color-icon-check
                | &nbsp;Se obtiene información en tiempo real, mediante el monitoreo de un dispositivo GPS integrado al vehículo.
              br
              br
              li 
                i.fas.fa-check.color-icon-check
                | &nbsp;Se tiene información en la página web o&nbsp;
                i software&nbsp;
                | de monitoreo de la empresa, mediante una aplicación para dispositivos móviles.

    p.mb-5(data-aos='fade-up') Todo sistema de información o monitoreo de transporte ofrece múltiples beneficios, pero cuando un sistema de este tipo se desea integrar a un negocio o empresa, puede resultar complejo que sea de agrado de los empleados y colaboradores, ya que, comúnmente, existe reticencia o desconfianza por los cambios. Por tanto, se debe involucrar a todo el equipo o grupo de trabajadores e impulsarlos en el conocimiento y uso de las nuevas tecnologías. Es preciso acompañarlos en la implementación y que sean parte fundamental éxito en el monitoreo de transportes; que vean los beneficios que ellos obtendrán del proyecto. 

    .row.justify-content-center.mb-5(data-aos='zoom-in-down')
      .col-12.col-lg-10
        .cajon.cajon-color-1.p-4
          .row 
            .col-lg-2.col-4
              figure
                  img(
                    src='@/assets/template/tema03/t3-i6.svg',
                    alt='Texto que describa la imagen'
                  )
            .col-lg-10.col-12
              p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros. 

</template>

<script>
export default {
  name: 'Tema3',
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
