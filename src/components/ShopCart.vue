<template lang="pug">
//- .mask-cover
.cart-list_wrap
    h5.title 我的購物車
    .cart_content
        ul.cart-list(v-if="cartList.length!=0")
            li.item(v-for="(item,id) in cartList")
                .cart_thumbs
                    .item-photo
                .cart_info
                    .pre-order
                        .tag.tag-s 預
                        span 預計 {{ item.deliveryDate }} 出貨
                    .subtitle {{ item.title }}
                    .spec
                        span {{ item.spec.name }}
                    .cart-quantity
                        .input
                            .btn.btn-s.btn-sub(@click="subQty(id,item.qty)") -
                            input(type="text" :value="item.qty" @change="setQty(id,$event)")
                            .btn.btn-s.btn-add(@click="addQty(id,item.qty)") +
                    .subtotal {{ item.spec.price * item.qty}}
                    .btn.btn-icon.btn-s.btn-delete(@click="deleteCartItem(id)")
                        i(class="fa-regular fa-trash-can")
        .empty-cart(v-if="cartList.length==0")
            h4.subtitle 您的購物車是空的
    .btn.btn-l.btn-primary.go_to_payment(v-if="cartList.length!=0") 前往結賬
</template>

<script>
import { mapState } from 'vuex'
export default {
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
        }
    }
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
                @include size(60px);
                background-color: #eee;
            }
        }

        .cart_info{
            text-align: left;
            font-size: 14px;
            position: relative;
            flex: 1;
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
                        width: 60px;
                        text-align: center;
                    }
                }
            }

            .subtotal{
                text-align: right;
                font-weight: bold;
                font-size: 16px;

                &:before{
                    content: "$";
                }
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
