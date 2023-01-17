<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.d-flex.justify-content-center.mb-5 
      .col-12.mb-5
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.fnd-in
          .bloque-texto-g__img(
            :style='{ "background-image": `url(${require("@/assets/template/introduccion/t0-i1.png")})` }'
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Apreciado aprendiz, bienvenido a este componente formativo, donde se abordarán temas que le serán de gran ayuda al momento de poner en práctica la promoción, exposición o venta de un producto o servicio. Además, se desarrollará ampliamente el concepto de uno de los procesos administrativos más eficientes utilizados por las empresas, el #[em marketing]; descubra cómo su impacto y eficacia son irrefutables y su apropiada gestión permite percibir y evaluar un futuro a corto o largo plazo, con grandes resultados en cualquier organización. Cualifíquese también en temas como el servicio al cliente y la competitividad, la generación de marcas y sus métodos respectivos, entre otros.


    p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

    .col-12.mb-5
      figure
        .video
          iframe(
            width='560',
            height='315',
            src='https://www.youtube.com/embed/2L91WMqw96A',
            title='YouTube video player',
            frameborder='0',
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
            allowfullscreen
          ) 
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
