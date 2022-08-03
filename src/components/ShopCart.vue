<template lang="pug">
//- .mask-cover
.cart-list_wrap
    h5.title 我的購物車
    .cart_content
        ul.cart-list
            li.item(v-for="i in 3")
                .cart_thumbs
                    .item-photo
                .cart_info
                    .pre-order
                        .tag.tag-s 預
                        span 預計 2023/01 出貨
                    .subtitle 風櫻起落四分
                    .spec
                        span 訂金 綠色 MSD 
                    .cart-quantity
                        .input
                            .btn.btn-s.btn-sub -
                            input(type="text" value='1')
                            .btn.btn-s.btn-add +
                    .subtotal $750
                    .btn.btn-icon.btn-s.btn-delete
                        i(class="fa-regular fa-trash-can")

    .btn.btn-l.btn-primary.go_to_payment 前往結賬
</template>

<script>
export default {

}
</script>

<style lang="scss">
.mask-cover{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(black,.6);
    z-index: 10;
}
.cart-list_wrap{
    position: fixed;
    top: 0;
    right: 0;
    max-width: 700px;
    height: 100vh;
    z-index: 100;
    background-color: #fff;
    padding: 24px;
    overflow: scroll;
    box-sizing: border-box;
    transition: .5s;
    transform: translateX(100%);

    &.active{
        transform: translateX(0);
    }

    .title{
        line-height: 40px;
        border-bottom: 2px solid #000;
    }
    .cart_content{

        .cart-list{
            padding: 24px 0;

            .item{
                display: flex;
                padding: 12px;
                border: 1px solid #eee;
                margin-bottom: 12px;
            }
        }
        .cart_thumbs{
            margin-right: 12px;
            .item-photo{
                @include size(60px);
                background-color: #eee;
            }
        }

        .cart_info{
            text-align: left;
            font-size: 14px;
            position: relative;
            .pre-order{
                display: flex;
                align-items: center;
                font-size: 13px;
                margin-bottom: 12px;
                .tag{
                    border-radius: 0;
                    padding: 2px 8px;
                    margin-right: 8px;
                }
            }
            .subtitle{
                margin-bottom: 12px;
                font-size: 14px;
            }
            .spec{
                margin-bottom: 12px;
            }

            .cart-quantity{
                margin-bottom: 12px;
                .input{
                    display: flex;
                    align-items: center;

                    input{
                        height: 100%;
                    }
                }
            }

            .subtotal{
                text-align: right;
                font-weight: bold;
                font-size: 16px;
            }


        }

        .btn-delete{
            position: absolute;
            top: 0;
            right: 0;
        }
    }

    .go_to_payment{
        width: 100%;
    }

}
</style>
