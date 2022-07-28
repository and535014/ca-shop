<template lang="pug">
NavComp
router-view
FooterComp
</template>

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
