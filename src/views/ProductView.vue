<template lang="pug">
.page.page-product
    .section.section-main
        .wrapper
            .product-main
                .photos
                    .main-photo
                        .pic-l(
                            v-html="getImg(currentImg)"
                            @click="photoIsZoom=true"
                            )
                    .thumbs
                        .pic-s(
                            v-for='(img, id) in product.imgs'
                            :class="{active: currentImg==img}"
                            @click="setCurrentImg(img, id)"
                            )
                            .pic(:style="bgcss(img)")
                .product-main-info
                    .pre-order-tag(v-if="product.state=='pre-order'")
                        span.tag 預購商品 
                        span 預計：{{ product.deliveryDate }} 出貨
                    .product-brand
                        span {{ product.brand }}
                    .product-title
                        span {{ product.title }}
                    .prices
                        span.unit NT$
                        span.num(v-if="product.price") {{ addCommaToNum(product.price) }}
                        span.num(v-if="!currentSpec && !product.price") {{ addCommaToNum(product.minPrice) }} ~ {{ addCommaToNum(product.maxPrice) }}
                        span.num(v-if="currentSpec") {{ addCommaToNum(currentSpec.price) }}
                    .specs.flex-box
                        label.flex-item 規格
                        ul.options
                            li.btn.btn-s.btn-secondary.spec-item(
                                v-for='spec in product.specs'
                                @click="getCurrentSpec(spec)"
                                :class="{active: currentSpec==spec}"
                                ) {{ spec.name }}
                    .quantity.flex-box
                        label.flex-item 數量
                        .input-num
                            .btn.btn-s.btn-sub(@click="quantitySub") -
                            input(type="text" v-model="quantity")
                            .btn.btn-s.btn-add(@click="quantityAdd") +
                    .btns
                        .btn.btn-l.btn-primary.btn-withIcon(@click="addCart")
                            i(class="fa-solid fa-cart-shopping icon-s")
                            |加入購物車
                        .buy.btn.btn-l.btn-secondary 我要預購
                    ul.notices
                        p.pre-order 本商品為預購商品，{{ product.preorderDeadline }} 截止
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
    Transition(name="fadeIn" mode="out-in")
        PhotoZoom(
            v-if="photoIsZoom" 
            :currentImg="currentImg"
            :imgs="product.imgs"
            :isOpen="photoIsZoom"
            :currentImgId="currentImgId"
            @update="updatePhotoZoom"
            )
    Transition(name="fadeIn" mode="out-in")
        ModalComp(
            v-if="cartIsAdded"
            :msg="msg"
            :icon="msgIcon"
            )
            template(v-slot:mask)
                MaskCover
            template(v-slot:msg)

</template>

<script>
import { mapState } from 'vuex'
import ModalComp from '@/components/ModalComp.vue'
export default {
    created() {
        this.currentImg = this.product.imgs.pic01
    },
    props: ["id"],
    data() {
        return {
            currentImg: null,
            currentImgId: 0,
            currentSpec: null,
            quantity: 1,
            photoIsZoom: false,
            cartIsAdded: false,
            msg: '',
            msgIcon: ''
        };
    },
    computed: {
        ...mapState({
            products: state => state.products,
            cartList: state => state.cartList
        }),
        product() {
            return this.products.filter((d)=>d.id==this.id)[0]
        }
    },
    methods: {
        getImg(url) {
            return `<img src="${url}">`;
        },
        bgcss(url){
            return {
                'background-image': 'url('+url+')',
                'background-position': 'center center',
                'background-size': 'contain',
                'background-repeat': 'no-repeat'
            }
        },
        setCurrentImg(img, id) {
            this.currentImg = img;
            this.currentImgId = id;
        },
        getCurrentSpec(spec) {
            this.currentSpec = spec;
            this.currentImg = spec.url;
            this.quantity = 1;
        },
        quantitySub() {
            if (this.quantity > 1) {
                this.quantity--;
            }
            else {
                this.quantity = 1;
            }
        },
        quantityAdd() {
            this.quantity++;
        },
        addCart() {
            if (this.currentSpec) {
                let orderInfo = {
                    ...this.product,
                    spec: this.currentSpec,
                    qty: this.quantity
                };
                this.$store.commit("addCart", orderInfo);
                this.msg = '商品已經成功加入購物車。'
                this.msgIcon = 'success'
                this.cartIsAdded=true

                setTimeout(()=>{
                    this.cartIsAdded=false
                    this.msg = ''
                this.msgIcon = ''
                },1200)
            }else{
                this.msg = '請選擇規格。'
                this.msgIcon = 'alert'
                this.cartIsAdded=true

                setTimeout(()=>{
                    this.cartIsAdded=false
                    this.msg = ''
                this.msgIcon = ''
                },1200)
            }
        },
        updatePhotoZoom(val) {
            this.photoIsZoom = val;
        },
        addCommaToNum(num){
            let number = num.toString()
            let result = number.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,",")
            return result
        }
    },
    components: { ModalComp }
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

    .section-main{
        padding-top: 24px;

        .product-main{
            display: flex;
            border: 1px solid #eee;
            padding: 24px;

            .photos{
                margin-right: 64px;
                max-width: 450px;

                .main-photo{
                    margin-bottom: 12px;
                }

                .thumbs{
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;

                }
                .pic-l{
                    width: 450px;
                    padding-bottom: 100%;
                    background-color: #fff;
                    cursor: zoom-in;
                    position: relative;

                    img{
                        height: 100%;
                        @include abCenter;
                    }
                }

                .pic-s{
                    width: calc((100% - 40px) / 5);
                    padding-bottom: calc((100% - 40px) / 5);
                    margin-right: 8px;
                    margin-bottom: 12px;
                    cursor: pointer;
                    position: relative;
                    box-sizing: border-box;
                    overflow: hidden;

                    .pic{
                        height: 100%;
                        @include abCenter;
                        @include size(100%,100%);
                    }

                    &.active{
                        outline: 2px solid black;
                    }
                }
            }

            .product-main-info{
                flex: 1;

                .pre-order-tag{
                    font-size: 14px;
                    margin-bottom: 12px;
                    .tag{
                        margin-right: 8px;
                    }
                }
                
                .product-title{
                    font-size: 30px;
                    font-weight: 500;
                    line-height: 1.4;
                    margin-bottom: 48px;
                    letter-spacing: normal;
                }

                .prices{
                    font-size: 40px;
                    color: $brand-color;
                    margin-bottom: 32px;
                    font-weight: bold;
                    display: flex;
                    justify-content: flex-end;
                    letter-spacing: normal;
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
                    flex-wrap: wrap;

                    .spec-item{
                        margin-right: 8px;
                        border: 1px solid $black-20;
                        color: $black-80;

                        &.active{
                            background-color: $brand-color;
                            color: white;
                        }
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