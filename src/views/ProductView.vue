<template lang="pug">
.page.page-product
    .section.section-header
        .wrapper
            p 4分 MSD/MDD > 服飾
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
                            .btn.btn-s.btn-sub -
                            input(type="text" value='1')
                            .btn.btn-s.btn-add +
                    .btns
                        .btn.btn-l 加入購物車
                        .buy.btn.btn-l 我要預購
                    ul.notices
                        p.pre-order 本商品為預購商品，2022/7/30 晚上10點截止
                        p.delivery 運送方式：一般宅配、國際快遞、與之前的預購訂單合併出貨、7-11取貨、全家超商取貨
                        p.pay 付款方式：LINE Pay、PayPal、信用卡、ATM 虛擬帳號、超商代碼

            article.product-content
                .otherInfo
                    .title-area
                        .title 購買注意事項
                        hr
                    .content
                        p 
                            span ※ 請注意，付款完成才會受理訂單喔！只下單未付款將視為不需要此訂單
                        p 
                            span ※ 默認不含官盒，如須官盒請備註喔！
                        p
                            span ◎ 
                            span 注意事項： 
                        p.list-item
                            span 1. 工期個1-2月。
                        p.list-item
                            span 2. 由於個別螢幕之間可能會有色差，布布已經盡量放上各種圖片，請大家仔細評估後下單，不接受因為色差所提出的退貨。
                        p.list-item
                            span 3. 不限金額可零卡分期2-14期或中租分期，關於零卡分期的規定請看這邊。
                        p.list-item
                            span 4. 入訂後就不可以退款、不可以改規格，請確認好再下單呦！

                .product-details
                    .title-area
                        .title 商品介紹
                        hr
                    .content
                        p 
                            span ◎ 
                            span 尺寸：三分/熊妹/普四/大六/普六
                        p.list-item
                            span ● 
                            span 3分尺寸：三圍建議26cm/約20cm/26cm（sd10/13、dd、大部分3分女均可穿）
                        p.list-item
                            span ● 
                            span 4分尺寸：三圍建議20cm/16cm/20cm（mdd、msd、狼兔體、大部分4分男女均可穿，瘦小身體可能撐不起慎拍）
                        p.list-item
                            span ● 
                            span 6分尺寸：三圍建議15cm/13cm/17cm（yosd、大部分6分、大6分均可穿，瘦小身體可能撐不起慎拍）
                        p.list-item
                            span ● 
                            span 熊尺寸：熊蛋打版，兔豆豆、4分巨嬰通穿
                        p.list-item
                            span ● 
                            span 彈力至下往上穿,圖片均有色差,可能會色移,請清洗。
                        p 
                            span ◎ 
                            span 全套點數：僅泳衣一件，無項圈。
                        p 
                            span ◎ 
                            span 售價：全款255元。
PhotoZoom
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
        flex-basis: 60px;
    }

    .section-header{
        padding-bottom: 0;
        padding-top: 12px;
    }

    .section-main{
        padding-top: 12px;

        .product-main{
            display: flex;
            border: 1px solid #eee;
            padding: 24px;

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
                        padding: 4px 6px;;
                    }
                }

                .brand{
                    margin-bottom: 24px;
                }
                
                .title{
                    font-size: 26px;
                    font-weight: 500;
                    // margin-bottom: 8px;
                    line-height: 1.4;
                    opacity: .8;
                }

                .prices{
                    font-size: 32px;
                    margin-bottom: 48px;
                    font-weight: bold;
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
                    .input{
                        display: flex;
                        align-items: center;
                        border: 2px solid #eee;
                        box-sizing: border-box;

                        .btn{
                            border: none;
                        }
                        .btn-sub{
                            border-right: 2px solid #eee;
                        }
                        .btn-add{
                            border-left: 2px solid #eee;
                        }
                        input{
                            @include size(60px, 100%);
                            border: none;
                            text-align: center;

                        }
                    }
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

        .product-content{
            margin-top: 32px;

            p{
                padding-bottom: 12px;
            }

            .list-item{
                padding-left: 24px;
            }

            .otherInfo{
                padding: 24px;
                margin: 24px 0;
                border: 1px solid #eee;
            }

            .product-details{
                padding: 24px;
                margin: 24px 0;
                border: 1px solid #eee;
            }

            .title-area{
                margin-bottom: 12px;

                .title{
                    margin-bottom: 12px;
                }
            }
        }
    }
}
</style>