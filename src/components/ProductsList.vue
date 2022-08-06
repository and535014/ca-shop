<template lang="pug">
.products-list
    .section.section-filters
        .wrapper
            .options 
                .filters
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
                .sort
                    span.options-title 排序：
                    .sort-options
                        .btn.btn-secondary(
                            @click="sort='hot'"
                            :class="{active: sort=='hot'}"
                            ) 最熱門
                        .select-wrap(
                                @mouseover="sortPriceIsOpen=true"
                                @mouseleave="sortPriceIsOpen=false"
                                )
                            .select-title.btn.btn-secondary(:class="{active: sort=='ascending'||sort=='descending'}")
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
                .product-num
                    span {{ products.length }} 件商品
    .section.section-main
        .wrapper
            Transition(name="fadeIn" mode="out-in")
                .card-wrap(
                    v-if="products.length!=0" 
                    :key="productsInPage")
                    CardContainer(
                        v-for="(product, id) in productsInPage"
                        :key="id"
                        v-bind="product"
                        @click="pageInit"
                        )
            .notFound(v-if="productsInPage.length==0")
                h2.title 沒有符合的商品。
            .pages-wrap
                ul.pages
                    li.btn.btn-icon-s(v-if="pagesNum>1 && currPage>1" @click="goPrevPage")
                        i(class="fa-solid fa-angle-left")
                    li.btn.btn-s.page(
                        v-for="i in pagesNum"
                        :class="{active: currPage==i}"
                        @click="goSpecificPage(i)"
                        )
                        span {{ i }}
                    li.btn.btn-icon-s(v-if="pagesNum>1 && currPage<pagesNum" @click="goNextPage")
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
import { mapState } from 'vuex'
export default {
    props: ['products'],
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
        pagesNum(){
            return Math.ceil(this.products.length/this.productNumInPage)
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
                r3 = r2.filter((d) => d.minPrice >= filters.minPrice)
            }else if(!filters.minPrice){
                r3 = r2
            }

            if(filters.maxPrice){
                r4 = r3.filter((d) => d.maxPrice <= filters.maxPrice)
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
                    return a.minPrice - b.minPrice
                })
            }else if(sort=='descending'){
                products.sort((a,b)=>{
                    return b.minPrice - a.minPrice
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
        }
    },
    watch: {
        products(){
            this.pageInit()
        }
    }
}
</script>

<style lang="scss">
.products-list{
    text-align: left;

    .section-filters{
        padding: 0;
        .options{
            display: flex;
            justify-content: space-between;
            align-items: center;

            span{
                line-height: 24px;
            }

            .filters{
                display: flex;
                margin-right: auto;
    
                .filter-item{
                    margin-right: 24px;
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
                        background-color: #fff;
                        z-index: 10;
                        width: 200px;
                        padding: 16px 24px;
                        border: 1px solid $black-40;

                        .top{
                            display: flex;
                            border-bottom: 1px solid #000;
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
                margin-right: 24px;

                .sort-options{
                    display: flex;

                    .btn{
                        padding: 2px 10px;
                        margin-right: 8px;
                        font-weight: normal;

                        &.active{
                            background-color: $brand-color;
                            color: white;
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
                            top: 30px;
                            left: 0;
                            background-color: #fff;
                            border: 1px solid $black-40;
                            z-index: 10;
                            padding: 12px;
                            min-width: 120px;

                            .select-options_option{
                                cursor: pointer;
                                padding: 4px 0;
                                text-align: center;

                                &:hover, &.active{
                                    color: lighten($brand-color,5);
                                    font-weight: bold;
                                }
                            }

                        }
                    }
                }
            }
        }
    } 


    .section-main{
        padding-top: 32px;

        .card-wrap{
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;

            .card-container{
                margin-bottom: 32px;
                &:nth-child(5n+5){
                    border-color: red;
                    margin-right: 0;
                }
            }
        }

        .notFound{
            height: 50vh;
            display: flex;
            justify-content: center;

            .title{
                margin-top: 60px;
            }
        }

        .pages-wrap{
            .pages{
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;

                .btn-icon-s{
                    padding-top: 4px;
                }

                .page{
                    font-size: 18px;
                    &.active{
                        text-decoration: underline;
                        text-underline-offset: 3px;
                    }
                }
            }
        }

    }
}
</style>