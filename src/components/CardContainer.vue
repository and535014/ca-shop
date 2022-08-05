<template lang="pug">
.card-container
    router-link.link-top(:to="getPath(product.id)")
        .pic(v-html="getImg(product.imgCover,'')")
    .info
        router-link.link-bottom(:to="getPath(product.id)") {{ product.title }}
        .details 
            a.brand(href="#") {{ product.brand }}
            .price
                span.unit NT$ 
                span.num(v-if="product.price") {{ addCommaToNum(product.price) }}
                span.num(v-if="!product.price") {{ addCommaToNum(product.minPrice) }} ~ {{ addCommaToNum(product.maxPrice) }}
</template>

<script>
export default {
    props: ['product'],
    methods: {
        getImg(url, alt){
        return `<img src="${url}" alt="${alt}">`
        },
        getPath(id){
            return `/product/${id}`
        },
        addCommaToNum(num){
            let number = num.toString()
            let result = number.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,",")
            return result
        }
    }
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

    .link-top{
        display: block;
        width: 100%;
        padding-bottom: 100%;
        background-color: #eee;
        .pic{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: auto;
            img{
                width: 100%;
            }
        }
    }

    .info{
        display: block;
        padding-top: 8px;
        background-color: #fff;
        letter-spacing: normal;

        .link-bottom{
            font-size: 16px;
            font-weight: bold;
            display: block;
            margin-bottom: 16px;
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