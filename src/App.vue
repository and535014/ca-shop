<template lang="pug">
NavComp(
    :cartIsOpen="cartIsOpen"
    :key="cartIsOpen" 
    @update="updateNavInfo"
    )
router-view(v-slot="{ Component }")
    transition(name="fadeIn" mode="out-in")
        component(:is="Component")
transition(name="fadeInOut" mode="out-in")
    MaskCover(
        v-if="maskIsActive" 
        @click.once="cartIsOpen=!cartIsOpen")
ShopCart(
    :class="{active: cartIsOpen}"
    :cartIsOpen="cartIsOpen"
    @update="updateCartInfo"
    )
.btn.btn-icon-l.goTop(@click='goTop' :class="{'isShow': scrollY > 200}")
    i(class="fa-solid fa-angle-up icon-l")
FooterComp
</template>

<script>
export default {
    created(){
        window.addEventListener('scroll', () => {
            let windowScrollY = window.scrollY

            this.scrollY = windowScrollY
        })
    },
    data(){
        return {
            cartIsOpen: false,
            scrollY: null
        }
    },
    methods: {
        updateNavInfo(val){
            this.cartIsOpen = val.cartIsOpen
        },
        updateCartInfo(val){
            this.cartIsOpen = val.cartIsOpen
        },
        goTop(){
            let top = document.documentElement.scrollTop || document.body.scrollTop
            const timeTop = setInterval(()=>{
                document.body.scrollTop = document.documentElement.scrollTop = top-=50
                if(top <=0){
                    clearInterval(timeTop)
                }
            }, 10)
        }
    },
    computed: {
        maskIsActive(){
            return this.cartIsOpen?true:false
        }
    },
    watch: {
    }
}
</script>

<style lang="scss">
.btn.goTop{
    position: fixed;
    right: 2.4rem;
    bottom: 10rem;
    @include boxShadow;
    background-color: rgba($brand-color,.9);
    color: white;
    border-radius: 50%;
    opacity: 0;
    transition: .5s;
    transform: translateY(20px);
    z-index: 10;
    &.isShow{
        opacity: 1;
        transform: translateY(0);
    }
}
//fadeIn
.fadeIn-enter-from{
    opacity: 0;
}
.fadeIn-enter-active{
    transition: .5s;
}
.fadeIn-enter-to{
    opacity: 1;
}

.fadeIn-leave-from{
    opacity: 1;
}
.fadeIn-leave-active{
    transition: .1s;
}
.fadeIn-leave-to{
    opacity: 0;
}

//fadeInOut
.fadeInOut-enter-from{
    opacity: 0;
}
.fadeInOut-enter-active{
    transition: .5s;
}
.fadeInOut-enter-to{
    opacity: 1;
}

.fadeInOut-leave-from{
    opacity: 1;
}
.fadeInOut-leave-active{
    transition: .5s;
}
.fadeInOut-leave-to{
    opacity: 0;
}

</style>
