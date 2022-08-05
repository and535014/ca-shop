<template lang="pug">
//- .mask-cover
.cart-list_wrap
    h5.title 我的購物車
    .cart_content
        ul.cart-list(v-if="cartList.length!=0")
            li.item(v-for="(item,id) in cartList")
                .cart_thumbs
                    .item-photo
                        .pic(:style="bgcss(item.spec.url)")
                .cart_info
                    .pre-order
                        .tag 預
                        span 預計 {{ item.deliveryDate }} 出貨
                    .brand {{ item.brand }}
                    router-link.product-title(
                        @click="cartIsOpen=!cartIsOpen"
                        :to="getPath(item.id)"
                        ) {{ item.title }}
                    .spec
                        span {{ item.spec.name }}
                    .cart-quantity
                        .input-num
                            .btn.btn-s.btn-sub(@click="subQty(id,item.qty)") -
                            input(type="text" :value="item.qty" @change="setQty(id,$event)")
                            .btn.btn-s.btn-add(@click="addQty(id,item.qty)") +
                    .subtotal {{ addCommaToNum(item.spec.price * item.qty)}}
                    .btn.btn-icon-m.btn-text.btn-delete(@click="deleteCartItem(id)")
                        i(class="fa-regular fa-trash-can")
        .empty-cart(v-if="cartList.length==0")
            h4.subtitle 您的購物車是空的
    .btn.btn-l.btn-primary.go_to_payment(v-if="cartList.length!=0") 前往結賬
</template>

<script>
import { mapState } from 'vuex'
export default {
    props: ['cartIsOpen'],
    data(){
        return {
        }
    },
    computed: {
        ...mapState(['cartList'])
    },
    methods: {
        deleteCartItem(id){
            this.$store.commit('deleteCart', id)
        },
        addQty(id, qty){
            qty++
            let result = {
                id: id,
                qty: qty
            }
            this.$store.commit('setQuantity', result)
        },
        subQty(id, qty){
            if(qty>1){
                qty--
            }else{
                qty=1
            }

            let result = {
                id: id,
                qty: qty
            }
            this.$store.commit('setQuantity', result)
        },
        setQty(id, evt){
            let target = evt.target
            let result = {
                id: id,
                qty: target.value
            }
            this.$store.commit('setQuantity', result)
        },
        getImg(url, alt){
            return `<img src="${url}" alt="${alt}">`
        },
        bgcss(url){
            return {
                'background-image': 'url('+url+')',
                'background-position': 'center center',
                'background-size': 'contain',
                'background-repeat': 'no-repeat'
            }
        },
        getPath(id){
            return `/product/${id}`
        },
        addCommaToNum(num){
            let number = num.toString()
            let result = number.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,",")
            return result
        }
    },
    watch: {
        cartIsOpen: {
            handler(val){
                this.$emit('update', {cartIsOpen: val})
            }
        }
    }
}
</script>

<style lang="scss">
.cart-list_wrap{
    position: fixed;
    top: 0;
    right: 0;
    width: 400px;
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
        padding-bottom: 16px;
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

        .empty-cart{
            margin-top: 64px;
        }
        
        .cart_thumbs{
            margin-right: 12px;
            .item-photo{
                @include size(80px);
                
                .pic{
                    @include size(100%, 100%);
                }
            }
        }

        .cart_info{
            text-align: left;
            position: relative;
            flex: 1;
            .pre-order{
                display: flex;
                align-items: center;
                margin-bottom: 12px;
                font-size: 14px;
                .tag{
                    margin-right: 8px;
                }
            }
            .brand{
                font-size: 14px;
                opacity: .6;
                margin-bottom: 4px;
            }
            .product-title{
                margin-bottom: 12px;
                font-size: 18px;
                font-weight: 500;
                display: block;
                margin-bottom: 8px;
            }
            .spec{
                margin-bottom: 12px;
                font-size: 16px;
                opacity: .8;
            }

            .cart-quantity{
                margin-bottom: 12px;
                display: flex;
            }

            .subtotal{
                text-align: right;
                font-weight: bold;
                font-size: 24px;
                line-height: 1.6;
                letter-spacing: normal;
                color: $brand-color;

                &:before{
                    content: "$";
                }
            }


        }

        .btn-delete{
            position: absolute;
            top: 0;
            right: 0;
            color: rgb(191, 0, 0);
        }
    }

    .go_to_payment{
        width: 100%;
    }

}
</style>
