<template lang="pug">
NavComp(
    :cartIsOpen="cartIsOpen" 
    :key="cartIsOpen" 
    @update="updateCart"
    )
router-view
//- router-view(v-slot="{ Component }")
//-     transition(name="fadeIn" mode="out-in")
//-         component(:is="Component")
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
            cartIsOpen: false
        }
    },
    methods: {
        updateCart(val){
            this.cartIsOpen=val
        }
    },
    computed: {
        maskIsActive(){
            return this.cartIsOpen?true:false
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
