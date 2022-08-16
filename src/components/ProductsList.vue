<template lang="pug">
.products-list
    .section.section-filters.section-narrow.py-0
        .container-xl.p-0
            .options.row.g-0
                .col-12.col-md.mb-2.filters
                    span.options-title 篩選：
                    .filter-item
                        .filter-item_title(
                            @click="filterStockIsOpen=!filterStockIsOpen;reactIsShow.stock=!reactIsShow.stock" 
                            :class="{active: filterStockIsOpen}")
                            span 供貨情況
                            i(class="fa-solid fa-angle-down icon-s")
                        Transition(name="fadeIn")
                            .filter-item_content(v-if="filterStockIsOpen")
                                .top 
                                    span.content-title 篩選條件
                                    span.btn.btn-text(@click="resetFilter('stock')") 重設
                                .bottom 
                                    label 預購商品
                                        input(type="checkbox", name="pre-order" v-model="filters.isPreOrder")
                                    label 現貨商品
                                        input(type="checkbox", name="spot-goods" v-model="filters.isSpot")

                    .filter-item
                        .filter-item_title(
                            @click="filterPriceIsOpen=!filterPriceIsOpen;reactIsShow.price=!reactIsShow.price" 
                            :class="{active: filterPriceIsOpen}")
                            span 價格
                            i(class="fa-solid fa-angle-down icon-s")
                        Transition(name="fadeIn")
                            .filter-item_content(v-if="filterPriceIsOpen")
                                .top 
                                    span.content-title 金額
                                    span.btn.btn-text(@click="resetFilter('price')") 重設
                                .bottom 
                                    span NT$
                                    input(type="text", name="min-price" v-model="filters.minPrice")
                                    span -
                                    input(type="text", name="max-price" v-model="filters.maxPrice")
                .col-12.col-md-auto.mb-2.sort
                    span.options-title 排序：
                    .sort-options.d-flex
                        .btn.btn-sm.btn-outline-primary(
                            @click="sort='hot'"
                            :class="{active: sort=='hot'}"
                            ) 最熱門
                        .select-wrap(
                                @mouseover="sortPriceIsOpen=true"
                                @mouseleave="sortPriceIsOpen=false"
                                )
                            .select-title.btn.btn-sm.btn-outline-primary(:class="{active: sort=='ascending'||sort=='descending'}")
                                span 價格
                                i(class="fa-solid fa-angle-down icon-s")
                            Transition(name="fadeIn")
                                .select-options_wrap(v-show="sortPriceIsOpen")
                                    .select-options_option(
                                        @click="sort='ascending'"
                                        :class="{active: sort=='ascending'}"
                                        ) 價格: 低到高
                                    .select-options_option(
                                        @click="sort='descending'"
                                        :class="{active: sort=='descending'}"
                                    ) 價格: 高到低
                .col-12.col-md-auto.mb-2.product-num
                    span {{ sortProducts.length }} 件商品
    .section.section-main.section-narrow
        .container-xl.p-0
            Transition(name="fadeIn" mode="out-in")
                .row(
                    v-if="products.length!=0" 
                    :key="productsInPage")
                    CardContainer(
                        v-for="(product, id) in productsInPage"
                        :key="id"
                        v-bind="product"
                        @click="pageInit"
                        )
            .notFound(v-if="productsInPage.length==0")
                h2.title.mt-5 沒有符合的商品。
            .pages-wrap
                ul.pages.m-0.p-0
                    li.icon.icon-btn.icon-btn-l(v-if="pagesNum>1 && currPage>1" @click="goPrevPage")
                        i(class="fa-solid fa-angle-left")
                    li.icon.icon-btn.icon-btn-l.page-count(
                        v-for="i in pagesNum"
                        :class="{active: currPage==i}"
                        @click="goSpecificPage(i)"
                        )
                        span {{ i }}
                    li.icon.icon-btn.icon-btn-l(v-if="pagesNum>1 && currPage<pagesNum" @click="goNextPage")
                        i(class="fa-solid fa-angle-right")
    Transition
        JsReact(
            v-if="reactIsShow.stock"
            @click="filterStockIsOpen=!filterStockIsOpen;reactIsShow.stock=!reactIsShow.stock" 
            )
    Transition
        JsReact(
            v-if="reactIsShow.price"
            @click="filterPriceIsOpen=!filterPriceIsOpen;reactIsShow.price=!reactIsShow.price" 
            )

</template>

<script>
export default {
    props: ['products'],
    data(){
        return {
            currPage: 1,
            productNumInPage: 10,
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
        pagesNum(){
            return Math.ceil(this.sortProducts.length/this.productNumInPage)
        },
        furtherFilteredProducts(){
            let products = this.products
            let r1 = null
            let r2 = null
            let r3 = null
            let r4 = null
            let filters = this.filters

            if(filters.isSpot){
                r1 = products.filter((d) => d.state == 'spot-goods')
            }else if(!filters.isSpot){
                r1 = products
            }
            
            if(filters.isPreOrder){
                r2 = r1.filter((d) => d.state == 'pre-order')
            }else if(!filters.isPreOrder){
                r2 = r1
            }

            if(filters.minPrice){
                r3 = r2.filter((d) => d.price >= filters.minPrice)
            }else if(!filters.minPrice){
                r3 = r2
            }

            if(filters.maxPrice){
                r4 = r3.filter((d) => d.price <= filters.maxPrice)
            }else if(!filters.maxPrice){
                r4 = r3
            }

            return r4

        },
        sortProducts(){
            let products = [...this.furtherFilteredProducts]
            let sort = this.sort

            if(sort=='hot'){
                products.sort((a,b)=>{
                    return b.viewed - a.viewed
                })
            }else if(sort=='ascending'){
                products.sort((a,b)=>{
                    return a.price - b.price
                })
            }else if(sort=='descending'){
                products.sort((a,b)=>{
                    return b.price - a.price
                })
            }

            return products
        },
        productsInPage(){
            let max = this.currPage*this.productNumInPage
            let min = (this.currPage-1)*this.productNumInPage
            return this.sortProducts.slice(min,max)
        },
        cataFirst(){
            let result = this.cata.split("=")[0]
            return result 
        },
        cataSecond(){
            let target = this.cata.split("=")[1]
            let result = null 
            if(target){
                result = target.split("_").join(" ").split("-").join("/")
            }
            return target?result:null
        }
    },
    methods: {
        goNextPage(){
            if(this.currPage<this.pagesNum){
                this.currPage++
            }
        },
        goPrevPage(){
            if(this.currPage>1){
                this.currPage--
            }
        },
        goSpecificPage(i){
            this.currPage = i
        },
        resetFilter(type){
            if(type=='stock'){
                this.filters = {
                    isSpot: false,
                    isPreOrder: false
                }    
            }
            if(type='price'){
                this.filters = {
                    minPrice: null,
                    maxPrice: null
                }
            }
        },
        pageInit(){
            this.currPage = 1
            this.filterStockIsOpen = false
            this.filterPriceIsOpen = false
            this.sortPriceIsOpen = false
            this.filters = {
                isSpot: false,
                isPreOrder: false,
                minPrice: null,
                maxPrice: null
            }

            this.sort = null
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        }
    },
    watch: {
        products: {
            handler(){
                this.pageInit()
            }
        },
        currPage: {
            handler(){
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
            }
        }
    }
}
</script>

<style lang="scss">
.products-list{
    text-align: left;

    .section-filters{

        .options{

            span{
                line-height: 24px;
            }

            .filters{
                display: flex;
                align-items: center;
    
                .filter-item{
                    margin-right: 12px;
                    position: relative;

                    .filter-item_title{
                        cursor: pointer;

                        span{
                            padding: 0 8px;
                        }

                        &.active{
                            span{
                                text-decoration: underline;
                                text-underline-offset: 3px;
                            }
                        }
                    }

                    .filter-item_content{
                        position: absolute;
                        top: 36px;
                        left: 0;
                        background-color: $white;
                        z-index: 10;
                        padding: 16px;
                        border: 1px solid $border-color;
                        min-width: 200px;
                        box-sizing: content-box;

                        .top{
                            display: flex;
                            border-bottom: 1px solid $black;
                            padding-bottom: 8px;
                            .content-title{
                                flex: 1 0;
                            }
                        }

                        .bottom{
                            padding-top: 12px;
                            label{
                                padding: 8px 4px;
                                display: flex;
                                flex-direction: row-reverse;
                                justify-content: flex-end;
                                align-items: center;
                                cursor: pointer;

                                input[type=checkbox]{
                                    margin-right: 8px;
                                }

                            }

                            input[type=text]{
                                max-width: 64px;
                                margin: 0 8px;
                            }
                        }
                    }
                }
            }
            .sort{
                display: flex;
                align-items: center;

                .sort-options{

                    .btn{
                        margin-right: 8px;

                        &.active{
                            background-color: $btn-hover-color;
                            color: $white;
                        }
                    }

                    .select-wrap{
                        position: relative;

                        .select-title{
                            min-width: 100px;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;

                            span{
                                margin-right: auto;
                            }
                        }
                        .select-options_wrap{
                            position: absolute;
                            top: 34px;
                            left: 0;
                            background-color: $white;
                            border: 1px solid $gray-900;
                            z-index: 10;
                            padding: 12px;
                            min-width: 120px;

                            .select-options_option{
                                cursor: pointer;
                                padding: 4px 0;
                                text-align: center;

                                &:hover, &.active{
                                    color: $gray-900;
                                    font-weight: bold;
                                }
                            }

                        }
                    }
                }
            }
            .product-num{
                display: flex;
                align-items: center;
                justify-content: end;
            }
        }
    } 


    .section-main{

        .notFound{
            height: 80vh;
            display: flex;
            justify-content: center;
        }

        .pages-wrap{
            .pages{
                display: flex;
                justify-content: center;
                align-items: center;

                .page-count{
                    &.active{
                        span{
                            color: $btn-hover-color;
                            text-decoration: underline;
                            text-underline-offset: 3px;
                        }
                    }
                }
            }
        }

    }

    @media screen and (max-width: 575.98px){
        .section-filters{
            .options{
                .filters{
                    .filter-item{
                        .filter-item_content{
                            left: -50%;
                            min-width: 160px;

                            .bottom{
                                input[type=text]{
                                    width: 46px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

</style>