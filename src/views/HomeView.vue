<template lang="pug">
.page.page-home 
  //- .test 
    p total: {{ num }}, current: {{ currentNum }} %: {{currentP}}
  .banner-wrap 
    .banner
      ul.viewport
        li.item(v-for="i in num" :class="itemClass(i)" @click="getLeft($event)")
          a.link No.{{ i-1 }} 
            p {{ (i-1)-currentNum}}
      .ctrl.ctrl-l.btn.btn-l.btn-icon(@click="switchLeft")
        i(class="fa-solid fa-angle-left")
      .ctrl.ctrl-r.btn.btn-l.btn-icon(@click="switchRight")
        i(class="fa-solid fa-angle-right")
      .counter-wrap
        .counter(
          v-for='i in num' 
          :class='[counterClass(i), {active: i-1==currentNum%5}]')
  .section.scetion-limit
    .wrapper 
      h2.title 現正預購中
      .cards-wrap
        CardContainer(v-for="i in 10")
        


</template>

<script>
export default {
  name: 'HomeView',
  created(){
  },
  data(){
    return {
      num: 5,
      currentNum: 2,
      timer: null
    }
  },
  computed: {
    currentP(){
      return this.currentNum%this.num
    }
  },
  methods: {
    itemClass(id){
      return 'item-'+(id-1)
    },
    counterClass(id){
      return 'counter-'+(id-1)
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
  
          if(Math.abs(delta)<2){
            newLeft = span*delta
            target.style.cssText = `
              transform: translate3d(${newLeft}px, 0, 0);
              visibility: visible;
              opacity: 1;
              transition: 0.5s;
            ` 
          }else if(Math.abs(delta)==2){
            newLeft = span*delta
            target.style.cssText = `
              transform: translate3d(${newLeft}px, 0, 0);
              visibility: hidden;
              opacity: 0;
              transition: 0.5s;
            `
          }else if(Math.abs(delta) == 3){
            if(delta > 0){
              newLeft = -span*(5-Math.abs(delta))
            }else if(delta < 0){
              newLeft = span*(5-Math.abs(delta))
            }
            target.style.cssText = `
              transform: translate3d(${newLeft}px, 0, 0);
              visibility: hidden;
              opacity: 0;
              transition: 0.5s;
            `
          }else if(Math.abs(delta) >= 4){
            if(delta > 0){
              newLeft = -span*(5-Math.abs(delta))
            }else if(delta < 0){
              newLeft = span*(5-Math.abs(delta))
            }
            target.style.cssText = `
              transform: translate3d(${newLeft}px, 0, 0);
              visibility: visible;
              opacity: 1;
              transition: 0.5s;
            `
          }
        }
      },300)

    },
    switchRight(){
      clearTimeout(this.timer)
      this.timer=setTimeout(()=>{
        if(this.currentNum > 0){
          this.currentNum--
        }else{
          this.currentNum = 4
        }
  
        for (var i =0; i<this.num; i++){
          let target = document.getElementsByClassName('item')[i]
          let span = target.clientWidth
          let delta = i - this.currentNum
          let newLeft = 0
  
          if(Math.abs(delta)<2){
            newLeft = span*delta
            target.style.cssText = `
              transform: translate3d(${newLeft}px, 0, 0);
              visibility: visible;
              opacity: 1;
              transition: 0.5s;
            ` 
          }else if(Math.abs(delta)==2){
            newLeft = span*delta
            target.style.cssText = `
              transform: translate3d(${newLeft}px, 0, 0);
              visibility: hidden;
              opacity: 0;
              transition: 0.5s;
            `
          }else if(Math.abs(delta) == 3){
            if(delta > 0){
              newLeft = -span*(5-Math.abs(delta))
            }else if(delta < 0){
              newLeft = span*(5-Math.abs(delta))
            }
            target.style.cssText = `
              transform: translate3d(${newLeft}px, 0, 0);
              visibility: hidden;
              opacity: 0;
              transition: 0.5s;
            `
          }else if(Math.abs(delta) >= 4){
            if(delta > 0){
              newLeft = -span*(5-Math.abs(delta))
            }else if(delta < 0){
              newLeft = span*(5-Math.abs(delta))
            }
            target.style.cssText = `
              transform: translate3d(${newLeft}px, 0, 0);
              visibility: visible;
              opacity: 1;
              transition: 0.5s;
            `
          }
        }
      },300)
    }
  }
}
</script>

<style lang="scss">
.page.page-home{
  *{
    // border: 1px solid #000;
  }
  .test{
    font-size: 60px;
  }
  .banner-wrap{
    .banner{
      position: relative;
      margin: 0 auto;
      width: 720px;
      height: 405px;
      .viewport{
        width: 720px;
        height: 405px;
        border-color: red;
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
            background-color: #eee;
            font-size: 60px;
            p{
              font-size: 60px;
            }
          }
        }

        @for $i from 0 through 5 {
          .item-#{$i}{
            transform: translate3d(#{($i - 2)*720}px, 0, 0);
            @if $i > 3 {
              visibility: hidden;
              opacity: 0;
            }
          }

        }

      }

      .ctrl{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;
      }
      .ctrl-l{
        left: 0;
      }
      .ctrl-r{
        right: 0;
      }

      .counter-wrap{
        display: flex;
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 10;
        .counter{
          @include size(10px);
          margin-right: 8px;
          border-radius: 50%;
          cursor: pointer;
          background-color: rgba(black,.3);

          &:last-child{
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
    .cards-wrap{
      display: flex;
      flex-wrap: wrap;

      .card-container{
        margin-right: 24px;
        margin-bottom: 32px;
      }
    }
  }
}
</style>
