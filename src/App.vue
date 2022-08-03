<template lang="pug">
NavComp(
    :cartIsOpen="cartIsOpen" 
    :key="cartIsOpen" 
    @update="updateCart"
    )
router-view
transition(name="fadeIn")
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
</style>
