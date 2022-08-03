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
                    span 100 件商品
    section.section.section-main
        .wrapper
            .card-wrap
                CardContainer(v-for="product in products" :product="product")
            .pages-wrap
                ul.pages
                    li 
                        a(href="#") 1
                    li 
                        a(href="#") 2
                    li 
                        a(href="#") 3
                    li
                        i(class="fa-solid fa-angle-right")
</template>

<script>
import CardContainer from '@/components/CardContainer.vue';
import { mapState } from 'vuex'
export default {
    components: { CardContainer },
    computed: {
        ...mapState({
            products: state => state.products
        })
    }
}
</script>

<style lang="scss">
.page.page-browse{
    text-align: left;

    span{
        margin-right: 8px;
    }

    .section-top{
        padding-bottom: 0;
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

        .pages-wrap{
            .pages{
                display: flex;
                justify-content: center;
                align-items: center;

                li{
                    margin-right: 8px;
                    a{
                        text-decoration: underline;
                        display: block;
                        padding: 8px;
                    }

                    &:last-child{
                        margin-left: 8px;
                    }
                }
            }
        }

    }
}
</style>