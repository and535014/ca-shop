<template lang="pug">
.page.page-home
  .test
  .carousel.slide.carousel-dark(
    id="banner"
    data-bs-ride="carousel"
    )
    .carousel-inner
      .carousel-item(
        v-for="(banner, bid) in banners"
        :class="{active: bid==0}"
        )
        router-link.link(:to="getPath(banner.id)" v-html="getImg(banner.imgs)")
    .carousel-control-prev(
      type="button"
      data-bs-target="#banner" 
      data-bs-slide="prev"
    )
      span.carousel-control-prev-icon(aria-hidden="true")
    .carousel-control-next(
      type="button"
      data-bs-target="#banner" 
      data-bs-slide="next"
    )
      span.carousel-control-next-icon(aria-hidden="true")
    .carousel-indicators
      button(
        v-for="(i, id) in num"
        type="button"
        data-bs-target="#banner"
        :data-bs-slide-to="id"
        :class="{active: id==0}" 
        :aria-current="{true: id==0}"
        :aria-label="getSlideId(id)"
        )
  section.section.scetion-limit.section-narrow
    .container-xl
      .row
        .col
          h2.title.mb-4 現正預購中
      .row
        CardContainer(v-for="product in products" v-bind="product")

</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HomeView',
  computed: {
    ...mapState({
      banners: state => state.banners,
      products: state => state.products.filter((d) => d.state=='pre-order')
    }),
    num(){
      return this.banners.length
    }
  },
  methods: {
    getPath(id){
      return `/product/${id}`
    },
    getImg(url, alt){
      return `
        <picture>
          <source srcset="${url.small}" media="(max-width: 479px)">
          <img src="${url.big}" alt="${alt}" class="w-100 d-block">
        </picture>
      `
    },
    getSlideId(id){
      return 'Slide ' + id
    }
  }
}
</script>

<style lang="scss">
.page.page-home{
  .carousel{
    max-width: 1000px;
    margin: 0 auto;
  }

  .scetion-limit{
    text-align: left;
    .title{
      margin-bottom: 32px;
    }
  }

}
</style>
