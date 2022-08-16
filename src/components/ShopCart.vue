<template lang="pug">
.offcanvas.offcanvas-end.cart-list_wrap(
    tabindex="-1" 
    id="cart-list" 
    aria-labelledby="offcanvasLabel"
    )
    .offcanvas-header
        h5.offcanvas-title 我的購物車
        .btn-close.text-reset(type="button" data-bs-dismiss="offcanvas" aria-label="Close")
    .offcanvas-body.cart_content
        .cart-list(v-if="cartList.length!=0")
            .item.p-2.mb-3(v-for="(item,id) in cartList")
                .cart_thumbs.me-1.me-sm-2
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
                            .icon.icon-btn.icon-btn-l.btn-sub(@click="subQty(id,item.qty)")
                                i(class="fa-solid fa-minus")
                            input(type="text" :value="item.qty" @change="setQty(id,$event)")
                            .icon.icon-btn.icon-btn-l.btn-add(@click="addQty(id,item.qty)")
                                i(class="fa-solid fa-plus")
                    .subtotal {{ addCommaToNum(item.price * item.qty)}}
                    .icon.icon-btn.icon-btn-l.btn-delete(@click="deleteCartItem(id)")
                        i(class="fa-regular fa-trash-can")
        .empty-cart(v-if="cartList.length==0")
            h4.subtitle 您的購物車是空的
        .btn.btn-l.btn-primary.go_to_payment(v-if="cartList.length!=0") 前往結賬
</template>

<script>
import { mapState } from 'vuex'
export default {
    props: ['cartIsOpen'],
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
    }
}
</script>

<style lang="scss">
.cart-list_wrap{
    .cart_content{

        .cart-list{

            .item{
                display: flex;
                border: 1px solid #eee;
            }
        }

        .empty-cart{
            margin-top: 64px;
        }
        
        .cart_thumbs{

            .item-photo{
                width: 80px;
                height: 80px;
                
                .pic{
                    width: 100%;
                    height: 100%;
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
                color: rgba(black,.9);

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
