<template lang="pug">
.card-container
    .pic-wrap 
        .pic    
    .info
        .name 商品名稱商品名稱商品名稱商品名稱商品名稱商品名稱
        .brand 品牌名稱
        .price
            span.unit NT$
            span.num 1,790
</template>

<script>
export default {

}
</script>

<style lang="scss">
.card-container{
    position: relative;
    margin-right: 24px;
    margin-bottom: 24px;
    flex-basis: calc((100% - 96px) / 5);
    min-width: 170px;
    box-sizing: border-box;
    // border: 1px solid #000;



    .pic-wrap{
        width: 100%;
        padding-bottom: 100%;
        background-color: #eee;
        .pic{
            background-color: #333;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: auto;
        }
    }

    .info{
        padding-top: 8px;
        background-color: #fff;
        .name{
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 8px;
        }

        .brand{
            font-size: 14px;
            margin-bottom: 8px;
        }

        .price{
            font-size: 18px;
            font-weight: bold;
            letter-spacing: normal;
        }
    }
}
</style>