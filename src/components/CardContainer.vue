<template lang="pug">
.card-container
    .pic-wrap 
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
    width: 400px;
    // border: 1px solid #000;

    .pic-wrap{
        @include size(400,360px);
        background-color: #eee;
    }

    .info{
        // position: absolute;
        // left: 0;
        // bottom: 0;
        padding-top: 8px;
        background-color: #fff;
        .name{
        font-size: 16px;
        font-weight: bold;
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