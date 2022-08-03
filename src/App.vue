<template lang="pug">
NavComp(:cartIsOpen="cartIsOpen")
router-view
ShopCart
FooterComp
</template>

<script>
export default {
    data(){
        return {
            cartIsOpen: false
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
