<template lang="pug">
.page.page-home 
  .banner-wrap 
    .banner
      ul.viewport
        li.item(v-for="(banner, bid) in banners" :class="itemClass(bid)")
          router-link.link(:to="getPath(banner.id)" v-html="getImg(banner.imgs)")
      .ctrl.ctrl-l(@click="switchLeft")
        i(class="fa-solid fa-angle-left icon-l")
      .ctrl.ctrl-r(@click="switchRight")
        i(class="fa-solid fa-angle-right icon-l")
      .counter-wrap
        .counter(
          v-for='i in num' 
          :class='[counterClass(i), {active: i-1 == currentNum % num}]'
          )
  section.section.scetion-limit.section-narrow
    .wrapper 
      h2.title 現正預購中
      .cards-wrap
        CardContainer(v-for="product in products" v-bind="product")

</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HomeView',
  created(){
    window.addEventListener('resize',()=>{
      if(window.innerWidth < 500 && window.innerWidth > 470){
        location.reload()
      }
    })
  },
  data(){
    return {
      currentNum: 2,
      timer: null
    }
  },
  computed: {
    currentP(){
      return this.currentNum%this.num
    },
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
    itemClass(id){
      return 'item-'+(id)
    },
    counterClass(id){
      return 'counter-'+(id)
    },
    switchLeft(){
      clearTimeout(this.timer)
      this.timer = setTimeout(()=>{
        if(this.currentNum < this.num){
          this.currentNum++
        }else{
          this.currentNum = 1
        }
  
        for (var i =0; i<this.num; i++){
          let target = document.getElementsByClassName('item')[i]
          let span = target.clientWidth
          let delta = i - this.currentNum
          let newLeft = 0
  
          if( delta>=-2 && delta<=3 ){
            newLeft = span*delta
          }else if( delta <=-3 ){
            newLeft = span*(this.num-Math.abs(delta))
          }else if( delta >=4 ){
            newLeft = -span*(this.num-Math.abs(delta))
          }
  
          if( Math.abs(delta) < 2 || Math.abs(delta) > 4){
            target.style.cssText = `
              transform: translate3d(${newLeft}px, 0, 0);
              visibility: visible;
              opacity: 1;
              transition: 0.5s;
            `
          }else if( Math.abs(delta) >= 2 ){
            target.style.cssText = `
              transform: translate3d(${newLeft}px, 0, 0);
              visibility: hidden;
              opacity: 0;
              transition: 0.5s;
            ` 
          }
        }
      },200)

    },
    switchRight(){
      clearTimeout(this.timer)
      this.timer=setTimeout(()=>{
        if(this.currentNum > 1){
          this.currentNum--
        }else{
          this.currentNum = this.num
        }
  
        for (var i =0; i<this.num; i++){
          let target = document.getElementsByClassName('item')[i]
          let span = target.clientWidth
          let delta = i - this.currentNum
          let newLeft = 0

          if( delta>=-2 && delta<=3 ){
            newLeft = span*delta
          }else if( delta <=-3 ){
            newLeft = span*(this.num-Math.abs(delta))
          }else if( delta >=4 ){
            newLeft = -span*(this.num-Math.abs(delta))
          }
  
          if( Math.abs(delta) < 2 || Math.abs(delta) > 4){
            target.style.cssText = `
              transform: translate3d(${newLeft}px, 0, 0);
              visibility: visible;
              opacity: 1;
              transition: 0.5s;
            `
          }else if( Math.abs(delta) >= 2 ){
            target.style.cssText = `
              transform: translate3d(${newLeft}px, 0, 0);
              visibility: hidden;
              opacity: 0;
              transition: 0.5s;
            ` 
          }
        }
      },200)
    },
    getImg(url, alt){
      return `
        <picture>
          <source srcset="${url.small}" media="(max-width: 479px)">
          <img src="${url.big}" alt="${alt}">
        </picture>
      `
    }
  }
}
</script>

<style lang="scss">
.page.page-home{
  .test{
    font-size: 60px;
  }
  .banner-wrap{
    .banner{
      position: relative;
      margin: 0 auto;
      max-width: 800px;
      .viewport{
        width: 100%;
        padding-bottom: 56.25%;
        position: relative;
        overflow: hidden;
        .item{
          transform: translate3d(0, 0, 0);
          transform-style: preserve-3d;
          position: absolute;
          left: 0;
          top: 0;
          @include size(100%);

          .link{
            display: block;
            @include size(100%);
            font-size: 60px;
            background-color: #eee;

            img{
              width: 100%;
            }
          }
        }

        @for $i from 0 through 5 {
          .item-#{$i}{
            transform: translate3d(#{($i - 2)*800}px, 0, 0);
            @if $i > 3 {
              visibility: hidden;
              opacity: 0;
            }

            @if $i < 1 {
              visibility: hidden;
              opacity: 0;
            }
          }

        }

      }

      .counter-wrap{
        display: flex;
        flex-direction: row-reverse;
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
        .counter{
          @include size(10px);
          margin-right: 8px;
          border-radius: 50%;
          background-color: rgba(black,.3);

          &:first-child{
            margin-right: 0;
          }

          &.active{
            background-color: rgba(black,.8);
          }
        }
      }
    }
  }

  .scetion-limit{
    text-align: left;
    .title{
      margin-bottom: 32px;
    }

    .cards-wrap{
      display: flex;
      flex-wrap: wrap;
    }
  }

  @media screen and (max-width: 767px){
    .banner-wrap{
      .banner{
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 479px){
    .banner-wrap{
      .banner{
        .viewport{
          padding-bottom: 133.3%;
        }
      }
    }

  }

}
</style>
