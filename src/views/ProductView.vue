<template lang="pug">
.page.page-product
    .section.section-header
        .wrapper
            p 4分 MSD / MDD > 服飾
    .section.section-main
        .wrapper
            .product-main
                .photos
                    .main-photo
                        .pic-l
                    .thumbs
                        .pic-s(v-for='i in 4')
                .product-main-info
                    .pre-order-tag
                        span.tag.tag-s 預購商品
                        span 預計：2022 / 12 出貨
                    .title 高腰連身裙高腰連身裙高腰連身裙高腰連身裙高腰連身裙高腰連身裙
                    .brand Holy Cross
                    .prices
                        span.unit NT$
                        span.num 2,115 ~ 2,205
                    .specs.flex-box
                        label.flex-item 規格
                        ul.options
                            li.btn.btn-s(v-for='i in 3') 紅色
                    .quantity.flex-box
                        label.flex-item 數量
                        .input
                            .btn.btn-s -
                            input(type="number")
                            .btn.btn-s +
                    .btns
                        .btn.btn-l 加入購物車
                        .buy.btn.btn-l 我要預購
                    ul.notices
                        p.pre-order 本商品為預購商品，2022/7/30 晚上10點截止
                        p.delivery 運送方式：一般宅配、國際快遞、與之前的預購訂單合併出貨、7-11取貨、全家超商取貨
                        p.pay 付款方式：LINE Pay、PayPal、信用卡、ATM 虛擬帳號、超商代碼

            .product-content
                .otherInfo
                .product-details

</template>

<script>
export default {

}
</script>

<style lang="scss">
.page.page-product{
    text-align: left;

    .flex-box{
        display: flex;
    }

    .flex-item{
        flex-basis: 100px;
    }

    .section-header{
        padding-bottom: 0;
        padding-top: 12px;
    }

    .section-main{
        padding-top: 12px;

        .product-main{
            display: flex;

            .photos{
                margin-right: 32px;

                .main-photo{
                    margin-bottom: 12px;
                }

                .thumbs{
                    display: flex;
                }
                .pic-l{
                    width: 450px;
                    height: 450px;
                    background-color: #eee;
                }

                .pic-s{
                    width: 82px;
                    height: 82px;
                    background-color: #eee;
                    margin-right: 8px;
                }
            }

            .product-main-info{
                .pre-order-tag{
                    font-size: 12px;
                    margin-bottom: 12px;
                    .tag{
                        margin-right: 8px;
                        border-radius: 0;
                        padding: 4px 6px;
                    }
                }

                .brand{
                    margin-bottom: 24px;
                }
                
                .title{
                    font-size: 26px;
                    font-weight: 500;
                    margin-bottom: 12px;
                    line-height: 1.4;
                    opacity: .8;
                }

                .prices{
                    font-size: 32px;
                    margin-bottom: 48px;
                    span{
                        margin-right: 8px;
                    }
                }
                label{
                    display: block;
                    margin-bottom: 8px;
                }
                .specs{
                    margin-bottom: 24px;

                    .btn{
                        margin-right: 8px;
                    }
                }

                .quantity{
                    margin-bottom: 24px;
                }

                .btns{
                    margin-bottom: 24px;
                    display: flex;
                    .btn{
                        flex: 1;

                        &:first-child{
                            margin-right: 8px;
                        }
                    }
                }

                .notices{
                    opacity: .6;

                    .pre-order{
                        font-weight: bold;
                    }

                    p{
                        line-height: 30px;
                    }
                }
            }
        }
    }
}
</style>