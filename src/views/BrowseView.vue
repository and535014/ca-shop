<template lang="pug">
.page.page-browse
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
        .result-main
            .card-wrap
                CardContainer(v-for="i in 20")

</template>

<script>
import CardContainer from '@/components/CardContainer.vue';
export default {
    components: { CardContainer }
}
</script>

<style lang="scss">
.page.page-browse{
    text-align: left;

    span{
        margin-right: 8px;
    }

    *{
        // border: 1px solid #000;
    }
    .browse-header{

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

    .result-main{
        display: flex;
        padding-top: 32px;

        .card-wrap{
            display: flex;
            flex-wrap: wrap;
        }

    }
}
</style>