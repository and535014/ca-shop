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
        @click="cartIsOpen=!cartIsOpen")
ShopCart(
    :class="{active: cartIsOpen}"
    :cartIsOpen="cartIsOpen"
    @update="updateCartInfo"
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
        updateNavInfo(val){
            this.cartIsOpen = val.cartIsOpen
        },
        updateCartInfo(val){
            this.cartIsOpen = val.cartIsOpen
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
