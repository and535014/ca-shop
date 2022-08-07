<template lang="pug">
.page.page-browse
    .section.section-top
        .wrapper
            .browse-header
                .title 
                    span "{{keywords.split('=')[1]}}" 搜尋結果
    Transition(name="fadeIn" mode="out-in")
        ProductsList(:products="fProducts" :key="fProducts")

</template>

<script>
import { mapState } from 'vuex'
export default {
    props: ['keywords'],
    data(){
        return {
            currPage: 1,
            productNumInPage: 20,
            filterStockIsOpen: false,
            filterPriceIsOpen: false,
            sortPriceIsOpen: false,
            filters: {
                isSpot: false,
                isPreOrder: false,
                minPrice: null,
                maxPrice: null
            },
            sort: null,
            reactIsShow: {
                stock: false,
                price: false
            }
        }
    },
    computed: {
        ...mapState(['products']),
        fProducts(){
            let datas = this.products
            let keywords = this.keywords.split("=")[1]
            let products = datas.filter((d) => d.title.includes(keywords))

            return products
        }
    }
}
</script>

<style lang="scss">

</style>