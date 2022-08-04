<template lang="pug">
.page.page-browse
    section.section.section-top
        .wrapper
            .browse-header
                .title 所有商品
            .options 
                .filters
                    span 篩選條件:
                    .filter
                        span.stock 供貨情況
                        i(class="fa-solid fa-angle-down")
                    .filter
                        span.price 價格
                        i(class="fa-solid fa-angle-down")
                .sort
                    span 排序依據
                    select
                        option 暢銷度
                        option 價格高到低
                        option 價格低到高
                        option 日期高到低
                        option 日期低到高
                .product-num
                    span {{ filteredProducts.length }} 件商品
    section.section.section-main
        .wrapper
            .card-wrap(v-if="filteredProducts.length!=0")
                CardContainer(
                    v-for="product in productsInPage"
                    :key="product"
                    :product="product"
                    )
            .notFound(v-if="filteredProducts.length==0")
                h2.title 沒有符合的商品。
            .pages-wrap
                ul.pages
                    li.btn.btn-s(v-if="pagesNum>1 && currPage>1" @click="goPrevPage")
                        i(class="fa-solid fa-angle-left")
                    li.btn.btn-s.page(
                        v-for="i in pagesNum"
                        :class="{active: currPage==i}"
                        @click="goSpecificPage(i)"
                        )
                        span {{ i }}
                    li.btn.btn-s(v-if="pagesNum>1" @click="goNextPage")
                        i(class="fa-solid fa-angle-right")
</template>

<script>
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
export default {
    data(){
        return {
            currPage: 1,
            productNumInPage: 20
        }
    },
    computed: {
        ...mapState(['products']),
        ...mapGetters(['filteredProducts']),
        pagesNum(){
            return Math.ceil(this.filteredProducts.length/this.productNumInPage)
        },
        productsInPage(){
            let max = this.currPage*this.productNumInPage
            let min = (this.currPage-1)*this.productNumInPage
            return this.filteredProducts.slice(min,max)
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
        }
    }
}
</script>

<style lang="scss">
.page.page-browse{
    text-align: left;

    .section-top{
        padding-bottom: 0;
        .browse-header{
            .title{
                margin-bottom: 16px;
            }
        }
        .options{
            display: flex;
            justify-content: space-between;
            .filters{
                display: flex;
                margin-right: auto;
    
                .filter{
                    margin-right: 8px;
                }
            }
            .sort{
                display: flex;
                justify-content: flex-end;
                margin-right: 24px;
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

                .page{
                    &.active{
                        text-decoration: underline;
                    }
                }
            }
        }

    }
}
</style>