<template lang="pug">
header.header
    .top-header
        .wrapper
            .search-bar-wrap
                .search-icon.btn.btn-l.btn-icon-m.btn-text
                    i(class="fa-solid fa-magnifying-glass")
            .logo-wrap 
                router-link.logo(to="/" @click="init") Crystal Apple
            .icons-wrap 
                .btn.btn-l.btn-icon-m.btn-text
                    i(class="fa-solid fa-user")
                .btn.btn-l.btn-icon-m.btn-text
                    i(class="fa-regular fa-heart")
                .btn.btn-l.btn-icon-m.btn-text
                    i(class="fa-solid fa-clipboard-list")
                .btn.btn-l.btn-icon-m.btn-text.btn-cart(@click="cartOpen=!cartOpen") 
                    i(class="fa-solid fa-cart-shopping")
                    .cart-count(v-if="cartList.length!=0") {{ cartList.length }}

    nav.navigation 
        .wrapper
            ul.nav-first(v-for='first in navigation')
                li.nav-first-li(
                    @mouseover="first.isOpen = true"
                    @mouseleave="first.isOpen = false"
                    :class="{isOpen: first.isOpen}"
                    )
                    template(v-if="!first.navSecond")
                        router-link.title(
                            :to="getPath(first,'')"
                            )
                            span {{ first.navFirst }}
                    template(v-if="first.navSecond")
                        .title
                            span {{ first.navFirst }}
                    transition(name="navFadeIn")
                        .nav-second(
                            v-if="first.navSecond" 
                            v-show="first.isOpen"
                            ) 
                            router-link.topic-link(
                                href="#" 
                                v-for="second in first.navSecond"
                                @click="setFilter(first,second)"
                                :to="getPath(first, second)"
                                ) {{ second }}

</template>

<script>
import { mapState } from 'vuex'
export default {
    props: ['cartIsOpen', 'reactIsShow', 'currCata'],
    computed: {
        ...mapState({
            navigation: state => state.header.navigation,
            cartList: state => state.cartList
        })
    },
    data(){
        return {
            cartOpen: this.cartIsOpen,
            currCataLocal: this.currCata
        }
    },
    watch: {
        cartOpen: {
            handler(val){
                this.$emit('update', {cartIsOpen: val})
            }
        },
        currCataLocal: {
            handler(val){
                this.$emit('update', {firstCata: val.firstCata, secondCata: val.secondCata})
            }
        }
    },
    methods: {
        getPath(first,second){
            if(first.navSecond){
                let result = second.split(" ").join("_").split("/").join("-")
                return `/browse/${first.navFirst}=${result}`
            }else if(!first.navSecond){
                return `/browse/${first.navFirst}`
            }
        },
        init(){
            this.currCataLocal = {
                firstCata: null,
                secondCata: null
            }
        }
    }
}
</script>

<style lang="scss">
.header{
    padding: 0 24px;
    border-bottom: 1px solid $black-40;

    .top-header{
        padding: 16px 0;
        .wrapper{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: auto;
            grid-template-areas: ' search logo icons';
        }
        .search-bar-wrap {
            grid-area: 'search';
            display: flex;
            align-items: center;
        }
        .logo-wrap{
            @include flexCenter;
            .logo{
                grid-area: 'logo';
            }
        }

        .icons-wrap{
            grid-area: 'icons';
            display: flex;
            justify-content: flex-end;
            align-items: center;

            .btn{
                margin-left: 12px;
            }

            .btn-cart{
                position: relative;
                .cart-count{
                    position: absolute;
                    top: -8px;
                    right: -8px;
                    width: 20px;
                    line-height: 20px;
                    font-size: 10px;
                    background-color: lighten($brand-color,20);
                    border-radius: 100px;
                    color: white;
                    font-weight: bold;
                }
            }

        }

    }

    .navigation{
        .wrapper{
            display: flex;
        }
        .nav-first{
            flex: 1 0 100px;
            position: relative;


            .nav-first-li{
                cursor: pointer;
                z-index: 10;
                &.isOpen{
                    .title{
                        font-weight: bold;
                        text-decoration: underline;
                        text-underline-offset: 3px;
                    }
                    .nav-second{
                        a{
                            opacity: 1;
                        }
                    }
                }
                .title{
                    background-color: #fff;
                    padding: 14px 0 10px;
                    font-size: 16px;
                    margin: 0;
                    font-weight: normal;
                    display: block;
                }

            }

        }

        .nav-second{
            position: absolute;
            min-width: 100%;
            top: 42px;
            left: 0;
            border: 1px solid $black-40;
            z-index: 10;
            background-color: #fff;
            padding: 8px 12px;

            .topic-link{
                line-height: 40px;
                transition: .3s;
                display: block;
                color: $black-60;

                &:hover{
                    color: lighten($brand-color,10);
                }
            }
        }
    }
}
</style>