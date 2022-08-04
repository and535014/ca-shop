<template lang="pug">
NavComp(
    :cartIsOpen="cartIsOpen"
    :key="cartIsOpen" 
    @update="updateNavInfo"
    :currCata="currCata"
    )
router-view(v-slot="{ Component }")
    transition(name="fadeIn" mode="out-in")
        component(
            :is="Component" 
            :currCata="currCata"
            )
transition(name="fadeIn" mode="out-in")
    MaskCover(
        v-if="maskIsActive" 
        @click="cartIsOpen=!cartIsOpen")
ShopCart(
    :class="{active: cartIsOpen}"
    )
FooterComp
</template>

<script>
export default {
    data(){
        return {
            cartIsOpen: false,
            currCata: {
                firstCata: null,
                secondCata: null
            }
        }
    },
    methods: {
        updateNavInfo(val){
            if(val.cartIsOpen){
                this.cartIsOpen = val.cartIsOpen
            }

            let cata = this.currCata
            if(val.firstCata){
                cata.firstCata = val.firstCata
            }

            if(val.secondCata){
                cata.secondCata = val.secondCata
            }

            // console.log(val)
        }
    },
    computed: {
        maskIsActive(){
            return this.cartIsOpen?true:false
        }
    },
    watch: {
        currCata: {
            handler(val){
                this.currCata = val
            }
        }
    }
}
</script>

<style lang="scss">
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
    transition: .5s;
}
.fadeIn-leave-to{
    opacity: 0;
}

//navFadeIn
.navFadeIn-enter-from{
    opacity: 0;
}
.navFadeIn-enter-active{
    transition: .5s;
}
.navFadeIn-enter-to{
    opacity: 1;
}

.navFadeIn-leave-from{
    opacity: 1;
}
.navFadeIn-leave-active{
    transition: 0s;
}
.navFadeIn-leave-to{
    opacity: 0;
}
</style>
