<template lang="pug">
.page.page-browse
    section.section.section-top
        .wrapper
            .browse-header
                .title 所有商品
            .options 
                .filters
                    span.options-title 篩選條件：
                    .filter-item
                        .filter-item_title(@click="filterStockIsOpen=!filterStockIsOpen" :class="{active: filterStockIsOpen}")
                            span 供貨情況
                            i(class="fa-solid fa-angle-down icon-s")
                        Transition(name="fadeIn")
                            .filter-item_content(v-if="filterStockIsOpen")
                                .top 
                                    span.content-title 已選取 0 項
                                    span.btn.btn-text 重設
                                .bottom 
                                    label 預購商品
                                        input(type="checkbox", name="pre-order")
                                    label 現貨商品
                                        input(type="checkbox", name="in-stock")

                    .filter-item
                        .filter-item_title(@click="filterPriceIsOpen=!filterPriceIsOpen" :class="{active: filterPriceIsOpen}")
                            span 價格
                            i(class="fa-solid fa-angle-down icon-s")
                        Transition(name="fadeIn")
                            .filter-item_content(v-if="filterPriceIsOpen")
                                .top 
                                    span.content-title 金額
                                    span.btn.btn-text 重設
                                .bottom 
                                    span NT$
                                    input(type="text", name="min-price")
                                    span -
                                    input(type="text", name="max-price")
                .sort
                    span.options-title 排序依據：
                    .sort-options
                        .btn.btn-secondary 最新
                        .btn.btn-secondary 最熱門
                        .select-wrap(
                                @mouseover="sortPriceIsOpen=true"
                                @mouseleave="sortPriceIsOpen=false"
                                )
                            .select-title.btn.btn-secondary
                                span 價格
                                i(class="fa-solid fa-angle-down icon-s")
                            Transition(name="fadeIn")
                                .select-options_wrap(v-show="sortPriceIsOpen")
                                    .select-options_option 價格: 低到高
                                    .select-options_option 價格: 高到低
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
</template>

<script>
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
export default {
    data(){
        return {
            currPage: 1,
            productNumInPage: 20,
            filterStockIsOpen: false,
            filterPriceIsOpen: false,
            sortPriceIsOpen: false
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
                        z-index: 1;
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
                            z-index: 1;
                            padding: 12px;
                            min-width: 120px;

                            .select-options_option{
                                cursor: pointer;
                                padding: 4px 0;
                                text-align: center;

                                &:hover{
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