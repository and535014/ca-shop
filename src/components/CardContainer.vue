<template lang="pug">
.card-container
    router-link.link-top(to="/product")
        .pic    
    .info
        router-link.link-bottom(to="/product") 商品名稱商品名稱商品名稱商品名稱商品名稱商品名稱
        .details 
            a.brand(href="#") 品牌名稱
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
    margin-bottom: 32px;
    flex-basis: calc((100% - 96px) / 5);
    min-width: 170px;
    box-sizing: border-box;
    // border: 1px solid #000;



    .link-top{
        display: block;
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
        display: block;
        padding-top: 8px;
        background-color: #fff;

        .link-bottom{
            font-size: 16px;
            font-weight: 500;
            display: block;
            margin-bottom: 12px;
        }

        .details{
            .brand{
                font-size: 14px;

                &:hover{
                    text-decoration: underline;
                    text-underline-offset: 2px;
                }
            }
    
            .price{
                font-size: 18px;
                font-weight: bold;
                margin-top: 8px;
            }
        }
    }
}
</style>