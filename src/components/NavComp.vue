<template lang="pug">
header.header.px-3.px-sm-4
    .top-header.py-2
        .container-xl.px-0
            .row.g-0
                .col-3.col-lg.d-flex.align-items-center
                    .icon.icon-btn.icon-btn-l.d-lg-none.nav-menu-btn(
                        data-bs-toggle="offcanvas"
                        data-bs-target="#nav-menu" 
                        aria-controls="offcanvasLabel"
                        )
                        i(class="fa-solid fa-bars")
                    .search-bar-wrap.d-flex.align-items-center.d-none.d-lg-flex
                        .icon.icon-btn.icon-btn-l.search-icon(
                            @click="searchIsActive=!searchIsActive"
                            :class="{active: searchIsActive}"
                            )
                            i(class="fa-solid fa-magnifying-glass")
                        input.keyword-input(
                            type="text" 
                            placeholder="商品搜尋"
                            :class="{active: searchIsActive}"
                            v-model="keywords"
                            @change="goSearch"
                            )
                .col-6.col-lg.flex-center.logo-wrap
                    router-link.logo(to="/") Crystal Apple
                .col-3.col-lg.d-flex.align-items-center.justify-content-end.icons-wrap 
                    .icon.icon-btn.icon-btn-l.ms-1.ms-md-2.ms-lg-3
                        i(class="fa-solid fa-user")
                    .icon.icon-btn.icon-btn-l.ms-1.ms-md-2.ms-lg-3.d-none.d-sm-block
                        i(class="fa-regular fa-heart")
                    .icon.icon-btn.icon-btn-l.ms-1.ms-md-2.ms-lg-3.d-none.d-lg-block
                        i(class="fa-solid fa-clipboard-list")
                    .icon.icon-btn.icon-btn-l.ms-1.ms-md-2.ms-lg-3.btn-cart(
                        data-bs-toggle="offcanvas"
                        data-bs-target="#cart-list" 
                        aria-controls="offcanvasLabel"
                        ) 
                        i(class="fa-solid fa-cart-shopping")
                        .cart-count(v-if="cartList.length!=0") {{ cartList.length }}

    nav.navigation.d-none.d-lg-block
        .container-xl.px-0
            .nav-first.d-flex.align-items-center.justify-content-between
                .nav-first-li.flex-grow-1(
                    v-for='first in navigation'
                    @mouseover="first.isOpen = true"
                    @mouseleave="first.isOpen = false"
                    :class="{isOpen: first.isOpen}"
                    )
                    template(v-if="!first.navSecond")
                        router-link.nav-first-title.py-3(
                            :to="getPath(first,'')"
                            )
                            span {{ first.navFirst }}
                    template(v-if="first.navSecond")
                        .nav-first-title.py-3
                            span {{ first.navFirst }}
                    transition(name="fadeIn")
                    .nav-second(
                        v-if="first.navSecond" 
                        v-show="first.isOpen"
                        )
                        router-link.topic-link(
                            v-for="second in first.navSecond"
                            :to="getPath(first, second)"
                            ) {{ second }}
    nav.offcanvas.offcanvas-start.navigation-menu(
        tabindex="-1" 
        id="nav-menu" 
        aria-labelledby="offcanvasLabel"
        )
        .offcanvas-header
            .search-bar-wrap.d-flex.py-2
                .icon.icon-btn.icon-btn-l.search-icon.me-2
                    i(class="fa-solid fa-magnifying-glass")
                input.keyword-input.flex-fill(
                    type="text" 
                    placeholder="商品搜尋"
                    v-model="keywords"
                    @change="goSearch"
                    )
            .btn-close.text-reset(
                type="button"
                data-bs-dismiss="offcanvas" 
                aria-label="Close")
        .offcanvas-body
            .nav-first
                .nav-first-li(
                    v-for='first in navigation'
                    @click="first.isOpen = !first.isOpen"
                    :class="{isOpen: first.isOpen}"
                    )
                    template(v-if="!first.navSecond")
                        router-link.nav-first-title.px-3(
                            :to="getPath(first,'')"
                            @click="navMenuIsOpen=!navMenuIsOpen"
                            )
                            span {{ first.navFirst }}
                    template(v-if="first.navSecond")
                        .nav-first-title.px-3.d-flex.justify-content-between.align-items-center
                            span {{ first.navFirst }}
                            i(class="fa-solid fa-angle-right icon-s")
                    .nav-second.ps-3(
                        v-if="first.navSecond" 
                        v-show="first.isOpen"
                        ) 
                        router-link.topic-link(
                            v-for="second in first.navSecond"
                            :to="getPath(first, second)"
                            @click="navMenuIsOpen=!navMenuIsOpen"
                            ) {{ second }}

</template>

<script>
import { mapState } from 'vuex'
export default {
    props: ["cartIsOpen", 'reactIsShow', 'bodyIsOVH'],
    computed: {
        ...mapState({
            navigation: state => state.header.navigation,
            cartList: state => state.cartList
        })
    },
    data() {
        return {
            searchIsActive: false,
            keywords: ""
        };
    },
    methods: {
        getPath(first, second) {
            if (first.navSecond) {
                let result = second.split(" ").join("_").split("/").join("-");
                return `/browse/${first.navFirst}=${result}`;
            }
            else if (!first.navSecond) {
                return `/browse/${first.navFirst}`;
            }
        },
        goSearch() {
            if(this.keywords){
                this.$router.push({ path: `/search/keywords=${this.keywords}` });
                this.keywords = null;
                this.searchIsActive = false;
                this.navMenuIsOpen=false
            }
        }
    }
}
</script>

<style lang="scss">
.header{
    border-bottom: 1px solid $gray-200;

    .top-header{

        .search-bar-wrap {
            .search-icon{
                &.active{
                    color: $gray-900;
                }
            }

            .keyword-input{
                border: none;
                border-bottom: 1px solid $gray-600;
                transition: width .3s;
                border-radius: 0;
                padding: 0;
                width: 0;
                line-height: 30px;
                text-indent: 8px;

                &.active{
                    width: 200px;
                }

            }
        }

        .icons-wrap{
            .btn-cart{
                position: relative;

                .cart-count{
                    position: absolute;
                    top: -8px;
                    right: -8px;
                    width: 20px;
                    line-height: 20px;
                    font-size: 10px;
                    background-color: $gray-900;
                    border-radius: 100px;
                    color: $white;
                    font-weight: bold;
                }
            }

        }

    }

    .navigation{
        .nav-first{

            .nav-first-li{
                position: relative;
                flex-basis: 100px;
                z-index: 10;
                cursor: pointer;

                .nav-first-title{
                    background-color: $white;
                    font-size: 16px;
                    display: block;
                }

                &.isOpen{
                    .nav-first-title{
                        font-weight: bold;
                        text-decoration: underline;
                        text-underline-offset: 3px;
                    }

                }
                
            }

        }

        .nav-second{
            position: absolute;
            top: 55px;
            left: 50%;
            transform: translateX(-50%);
            border: 1px solid $border-color;
            z-index: 10;
            background-color: $white;
            padding: 8px 12px;
            min-width: 180px;

            .topic-link{
                line-height: 40px;
                display: block;
                color: $btn-color;

                &:hover{
                    color: $btn-hover-color;
                    font-weight: 500;
                }
            }
        }
    }

    .navigation-menu{
        .nav-first{
            text-align: left;

            .nav-first-li{
                .nav-first-title{
                    transition: .5s;
                    cursor: pointer;
                    display: block;
                    font-size: 18px;
                    line-height: 48px;

                    .fa-angle-right{
                        transition: .5s;
                        transform: rotate(0);
                    }

                    &:hover{
                        background-color: $gray-200;
                    }
                }

                .nav-second{
                    border-bottom: 1px solid $border-color;

                    .topic-link{
                        display: block;
                        line-height: 44px;
                        cursor: pointer;
                        color: $btn-color;

                        &:hover{
                            font-weight: bold;
                            color: $btn-hover-color;
                        }
                    }
                }

                &.isOpen{
                    .nav-first-title{
                        background-color: $gray-200;

                        .fa-angle-right{
                            transform: rotate(90deg);
                        }
                    }
                }
            }

        }
    }

    @media screen and (max-width: 991.98px){
        .top-header{
            .logo{
                font-size: 32px;
            }
        }
    }

    @media screen and (max-width: 767.98px){
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1030;
        background-color: $white;
        width: 100%;
    }

    @media screen and (max-width: 575.98px){
        .top-header{
            .logo{
                font-size: 20px;
            }
        }
    }
}

</style>